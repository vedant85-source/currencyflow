'use client';

import { useState, useEffect } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Area,
  AreaChart,
} from 'recharts';
import { getHistoricalRates } from '@/lib/api';
import { getDateRange, formatNumber, cn } from '@/lib/utils';
import { ChartDataPoint, TimeRange } from '@/types';

interface ExchangeRateChartProps {
  from: string;
  to: string;
  timeRange?: TimeRange;
  className?: string;
  showControls?: boolean;
}

export const ExchangeRateChart: React.FC<ExchangeRateChartProps> = ({
  from,
  to,
  timeRange: initialTimeRange = '30d',
  className,
  showControls = true,
}) => {
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [timeRange, setTimeRange] = useState<TimeRange>(initialTimeRange);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { startDate, endDate } = getDateRange(timeRange);
        const historicalData = await getHistoricalRates(from, to, startDate, endDate);
        setData(historicalData);
      } catch (error) {
        console.error('Error fetching chart data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [from, to, timeRange]);

  const timeRangeOptions: { value: TimeRange; label: string }[] = [
    { value: '1d', label: '1D' },
    { value: '7d', label: '7D' },
    { value: '30d', label: '30D' },
    { value: '1y', label: '1Y' },
  ];

  const formatChartDate = (dateStr: string) => {
    const date = new Date(dateStr);
    switch (timeRange) {
      case '1d':
        return date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
      case '7d':
      case '30d':
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
      case '1y':
        return date.toLocaleDateString('en-US', { month: 'short', year: '2-digit' });
      default:
        return dateStr;
    }
  };

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white dark:bg-gray-800 p-3 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700">
          <p className="text-sm text-gray-600 dark:text-gray-400">{formatChartDate(label)}</p>
          <p className="text-lg font-semibold text-primary-600 dark:text-primary-400">
            {formatNumber(payload[0].value, 4)} {to}
          </p>
        </div>
      );
    }
    return null;
  };

  if (loading) {
    return (
      <div
        className={cn(
          'bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6',
          'flex items-center justify-center min-h-[300px]',
          className
        )}
      >
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-600" />
      </div>
    );
  }

  const minRate = Math.min(...data.map(d => d.rate));
  const maxRate = Math.max(...data.map(d => d.rate));
  const rateChange = data.length > 1 ? data[data.length - 1].rate - data[0].rate : 0;
  const rateChangePercent = data.length > 1 ? (rateChange / data[0].rate) * 100 : 0;

  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6',
        className
      )}
    >
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
            {from} to {to} Exchange Rate
          </h3>
          <div className="flex items-center gap-2 mt-1">
            <span className="text-2xl font-bold text-gray-900 dark:text-white">
              {formatNumber(data[data.length - 1]?.rate || 0, 4)}
            </span>
            <span
              className={cn(
                'text-sm font-medium',
                rateChange >= 0 ? 'text-green-500' : 'text-red-500'
              )}
            >
              {rateChange >= 0 ? '+' : ''}
              {formatNumber(rateChangePercent, 2)}%
            </span>
          </div>
        </div>

        {showControls && (
          <div className="flex gap-1 mt-4 md:mt-0">
            {timeRangeOptions.map((option) => (
              <button
                key={option.value}
                onClick={() => setTimeRange(option.value)}
                className={cn(
                  'px-3 py-1.5 text-sm font-medium rounded-md transition-all duration-200',
                  timeRange === option.value
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-200 dark:hover:bg-gray-600'
                )}
              >
                {option.label}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Chart */}
      <div className="h-[300px] w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorRate" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="3 3"
              stroke="#e5e7eb"
              vertical={false}
            />
            <XAxis
              dataKey="date"
              tickFormatter={formatChartDate}
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              minTickGap={30}
            />
            <YAxis
              domain={[minRate * 0.995, maxRate * 1.005]}
              tickFormatter={(value) => formatNumber(value, 2)}
              stroke="#9ca3af"
              tick={{ fill: '#9ca3af', fontSize: 12 }}
              tickLine={false}
              axisLine={false}
              width={60}
            />
            <Tooltip content={<CustomTooltip />} />
            <Area
              type="monotone"
              dataKey="rate"
              stroke="#3b82f6"
              strokeWidth={2}
              fillOpacity={1}
              fill="url(#colorRate)"
              dot={false}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Low</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {formatNumber(minRate, 4)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">High</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {formatNumber(maxRate, 4)}
          </p>
        </div>
        <div>
          <p className="text-xs text-gray-500 dark:text-gray-400">Average</p>
          <p className="text-sm font-semibold text-gray-900 dark:text-white">
            {formatNumber(data.reduce((acc, d) => acc + d.rate, 0) / data.length, 4)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ExchangeRateChart;
