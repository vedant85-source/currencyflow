'use client';

import { useState } from 'react';
import { ExchangeRateChart } from '@/components/charts/ExchangeRateChart';
import { CurrencySelector } from '@/components/converter/CurrencySelector';
import { AdBanner } from '@/components/ads/AdBanner';
import { AdInContent } from '@/components/ads/AdInContent';
import { TimeRange } from '@/types';
import { cn } from '@/lib/utils';

const popularPairs = [
  { from: 'USD', to: 'EUR' },
  { from: 'USD', to: 'GBP' },
  { from: 'USD', to: 'JPY' },
  { from: 'EUR', to: 'GBP' },
  { from: 'GBP', to: 'USD' },
  { from: 'USD', to: 'INR' },
];

export default function ChartsPage() {
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [timeRange, setTimeRange] = useState<TimeRange>('30d');

  const timeRangeOptions: { value: TimeRange; label: string }[] = [
    { value: '1d', label: '1 Day' },
    { value: '7d', label: '7 Days' },
    { value: '30d', label: '30 Days' },
    { value: '1y', label: '1 Year' },
  ];

  return (
    <>
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-gray-900 dark:via-primary-950 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Historical Exchange Rate Charts
          </h1>
          <p className="text-primary-100 text-center max-w-2xl mx-auto">
            Track currency pair performance over time with our interactive charts.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Ad */}
        <div className="max-w-4xl mx-auto mb-8">
          <AdBanner slot="charts-top" className="w-full" />
        </div>

        {/* Currency Selection */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
            <div className="grid md:grid-cols-[1fr,auto,1fr,auto] gap-4 items-end">
              <CurrencySelector
                label="From Currency"
                value={fromCurrency}
                onChange={setFromCurrency}
              />
              
              <div className="flex items-center justify-center pb-3">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4"
                  />
                </svg>
              </div>
              
              <CurrencySelector
                label="To Currency"
                value={toCurrency}
                onChange={setToCurrency}
              />
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Time Range
                </label>
                <select
                  value={timeRange}
                  onChange={(e) => setTimeRange(e.target.value as TimeRange)}
                  className={cn(
                    'w-full px-4 py-3',
                    'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600',
                    'rounded-lg text-gray-900 dark:text-white',
                    'focus:outline-none focus:ring-2 focus:ring-primary-500'
                  )}
                >
                  {timeRangeOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        </div>

        {/* Main Chart */}
        <div className="max-w-5xl mx-auto">
          <ExchangeRateChart
            from={fromCurrency}
            to={toCurrency}
            timeRange={timeRange}
            showControls={false}
          />
        </div>

        {/* Mid-content Ad */}
        <div className="max-w-4xl mx-auto mt-12">
          <AdInContent slot="charts-mid" />
        </div>

        {/* Popular Pairs */}
        <div className="mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Popular Currency Pairs
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {popularPairs.map((pair) => (
              <button
                key={`${pair.from}-${pair.to}`}
                onClick={() => {
                  setFromCurrency(pair.from);
                  setToCurrency(pair.to);
                }}
                className={cn(
                  'p-4 bg-white dark:bg-gray-800 rounded-xl',
                  'border border-gray-200 dark:border-gray-700',
                  'hover:border-primary-300 dark:hover:border-primary-700',
                  'shadow-sm hover:shadow-md',
                  'transition-all duration-200 text-left'
                )}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="flex -space-x-2">
                      <span className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-sm font-semibold text-primary-600 dark:text-primary-400">
                        {pair.from.slice(0, 1)}
                      </span>
                      <span className="w-8 h-8 rounded-full bg-accent-100 dark:bg-accent-900/30 flex items-center justify-center text-sm font-semibold text-accent-600 dark:text-accent-400">
                        {pair.to.slice(0, 1)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">
                        {pair.from}/{pair.to}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">
                        View Chart
                      </p>
                    </div>
                  </div>
                  <svg
                    className="w-5 h-5 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Understanding Exchange Rate Charts
          </h2>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Exchange rate charts provide valuable insights into currency performance over time. 
              By analyzing these trends, you can make more informed decisions about when to convert 
              your money.
            </p>
            
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              How to Read the Charts
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
              <li><strong>X-axis:</strong> Shows the time period (days, weeks, or months)</li>
              <li><strong>Y-axis:</strong> Shows the exchange rate value</li>
              <li><strong>Line/Area:</strong> Represents the rate movement over time</li>
              <li><strong>Tooltip:</strong> Hover to see exact rates for specific dates</li>
            </ul>

            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mt-8 mb-4">
              Time Range Options
            </h3>
            <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-6">
              <li><strong>1 Day:</strong> Shows intraday movements for short-term analysis</li>
              <li><strong>7 Days:</strong> Weekly view for recent trend analysis</li>
              <li><strong>30 Days:</strong> Monthly view for medium-term trends</li>
              <li><strong>1 Year:</strong> Annual view for long-term analysis</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
