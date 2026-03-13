'use client';

import { useCurrency } from '@/hooks/useCurrency';
import { CurrencySelector } from './CurrencySelector';
import { formatCurrency, formatNumber } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ConverterWidgetProps {
  initialFrom?: string;
  initialTo?: string;
  initialAmount?: number;
  className?: string;
  showHistory?: boolean;
}

export const ConverterWidget: React.FC<ConverterWidgetProps> = ({
  initialFrom = 'USD',
  initialTo = 'EUR',
  initialAmount = 1,
  className,
  showHistory = true,
}) => {
  const {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    result,
    rate,
    loading,
    swapCurrencies,
  } = useCurrency(initialFrom, initialTo, initialAmount);

  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-2xl shadow-xl',
        'p-6 md:p-8',
        className
      )}
    >
      <div className="space-y-6">
        {/* Amount Input */}
        <div>
          <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
            Amount
          </label>
          <div className="relative">
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(parseFloat(e.target.value) || 0)}
              min="0"
              step="0.01"
              className={cn(
                'w-full px-4 py-3 pr-12',
                'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600',
                'rounded-lg text-xl font-semibold text-gray-900 dark:text-white',
                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                'transition-all duration-200'
              )}
              placeholder="Enter amount"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
              {fromCurrency}
            </span>
          </div>
        </div>

        {/* Currency Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
          <CurrencySelector
            label="From"
            value={fromCurrency}
            onChange={setFromCurrency}
          />

          {/* Swap Button */}
          <button
            type="button"
            onClick={swapCurrencies}
            className={cn(
              'flex items-center justify-center',
              'w-12 h-12 mx-auto',
              'bg-primary-100 dark:bg-primary-900/30',
              'hover:bg-primary-200 dark:hover:bg-primary-900/50',
              'rounded-full transition-all duration-200',
              'focus:outline-none focus:ring-2 focus:ring-primary-500'
            )}
            aria-label="Swap currencies"
          >
            <svg
              className="w-5 h-5 text-primary-600 dark:text-primary-400"
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
          </button>

          <CurrencySelector
            label="To"
            value={toCurrency}
            onChange={setToCurrency}
          />
        </div>

        {/* Result */}
        <div
          className={cn(
            'bg-gradient-to-r from-primary-50 to-accent-50',
            'dark:from-primary-900/20 dark:to-accent-900/20',
            'rounded-xl p-6 text-center'
          )}
        >
          {loading ? (
            <div className="flex items-center justify-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary-600" />
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {formatNumber(amount)} {fromCurrency} =
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {formatCurrency(result, toCurrency)}
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
                1 {fromCurrency} = {formatNumber(rate, 4)} {toCurrency}
              </p>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                1 {toCurrency} = {formatNumber(1 / rate, 4)} {fromCurrency}
              </p>
            </>
          )}
        </div>

        {/* Last Updated */}
        <p className="text-xs text-center text-gray-400 dark:text-gray-500">
          Rates are for informational purposes only. Last updated: {new Date().toLocaleTimeString()}
        </p>
      </div>
    </div>
  );
};

export default ConverterWidget;
