'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', symbol: '€', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', symbol: '£', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', symbol: '¥', flag: '🇯🇵' },
  { code: 'AUD', name: 'Australian Dollar', symbol: 'A$', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', symbol: 'C$', flag: '🇨🇦' },
  { code: 'CHF', name: 'Swiss Franc', symbol: 'Fr', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', symbol: '¥', flag: '🇨🇳' },
  { code: 'INR', name: 'Indian Rupee', symbol: '₹', flag: '🇮🇳' },
  { code: 'SGD', name: 'Singapore Dollar', symbol: 'S$', flag: '🇸🇬' },
  { code: 'AED', name: 'UAE Dirham', symbol: 'د.إ', flag: '🇦🇪' },
  { code: 'SAR', name: 'Saudi Riyal', symbol: '﷼', flag: '🇸🇦' },
  { code: 'PKR', name: 'Pakistani Rupee', symbol: '₨', flag: '🇵🇰' },
  { code: 'BDT', name: 'Bangladeshi Taka', symbol: '৳', flag: '🇧🇩' },
  { code: 'NGN', name: 'Nigerian Naira', symbol: '₦', flag: '🇳🇬' },
  { code: 'MXN', name: 'Mexican Peso', symbol: '$', flag: '🇲🇽' },
  { code: 'BRL', name: 'Brazilian Real', symbol: 'R$', flag: '🇧🇷' },
  { code: 'ZAR', name: 'South African Rand', symbol: 'R', flag: '🇿🇦' },
  { code: 'KRW', name: 'South Korean Won', symbol: '₩', flag: '🇰🇷' },
  { code: 'THB', name: 'Thai Baht', symbol: '฿', flag: '🇹🇭' },
];

interface LiveConverterProps {
  initialFrom?: string;
  initialTo?: string;
  initialAmount?: number;
  className?: string;
}

export const LiveConverter: React.FC<LiveConverterProps> = ({
  initialFrom = 'USD',
  initialTo = 'EUR',
  initialAmount = 1,
  className,
}) => {
  const [amount, setAmount] = useState<number>(initialAmount);
  const [fromCurrency, setFromCurrency] = useState<string>(initialFrom);
  const [toCurrency, setToCurrency] = useState<string>(initialTo);
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Fetch live exchange rate from Frankfurter API
  const fetchExchangeRate = useCallback(async () => {
    if (fromCurrency === toCurrency) {
      setRate(1);
      setLastUpdated(new Date());
      console.log(`[LiveConverter] Same currency: ${fromCurrency} = 1.0000`);
      return;
    }

    setLoading(true);
    setError(null);

    const apiUrl = `https://api.frankfurter.app/latest?from=${fromCurrency}&to=${toCurrency}`;
    console.log(`[LiveConverter] Fetching rate from: ${apiUrl}`);

    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('[LiveConverter] API Response:', data);

      // Parse the rate from the response
      const fetchedRate = data.rates?.[toCurrency];
      
      if (fetchedRate === undefined || fetchedRate === null) {
        throw new Error(`Rate not found for ${toCurrency} in response`);
      }

      console.log(`[LiveConverter] Rate fetched: 1 ${fromCurrency} = ${fetchedRate} ${toCurrency}`);
      
      setRate(fetchedRate);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('[LiveConverter] Error fetching rate:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch exchange rate');
      setRate(null);
    } finally {
      setLoading(false);
    }
  }, [fromCurrency, toCurrency]);

  // Fetch rate when currencies change
  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);

  // Calculate converted amount
  const convertedAmount = rate !== null ? amount * rate : 0;

  // Get currency info
  const fromCurrencyInfo = currencies.find(c => c.code === fromCurrency);
  const toCurrencyInfo = currencies.find(c => c.code === toCurrency);

  // Swap currencies
  const handleSwap = () => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  };

  // Format number with commas
  const formatNumber = (num: number, decimals: number = 2) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
    <div className={cn('bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8', className)}>
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
                'w-full px-4 py-3 pr-16',
                'bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600',
                'rounded-lg text-xl font-semibold text-gray-900 dark:text-white',
                'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent',
                'transition-all duration-200'
              )}
              placeholder="Enter amount"
            />
            <span className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 font-medium">
              {fromCurrency}
            </span>
          </div>
        </div>

        {/* Currency Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,auto,1fr] gap-4 items-end">
          {/* From Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              From
            </label>
            <select
              value={fromCurrency}
              onChange={(e) => setFromCurrency(e.target.value)}
              className={cn(
                'w-full px-4 py-3',
                'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600',
                'rounded-lg text-gray-900 dark:text-white',
                'focus:outline-none focus:ring-2 focus:ring-primary-500',
                'transition-all duration-200'
              )}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>

          {/* Swap Button */}
          <button
            type="button"
            onClick={handleSwap}
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

          {/* To Currency */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              To
            </label>
            <select
              value={toCurrency}
              onChange={(e) => setToCurrency(e.target.value)}
              className={cn(
                'w-full px-4 py-3',
                'bg-white dark:bg-gray-700 border border-gray-300 dark:border-gray-600',
                'rounded-lg text-gray-900 dark:text-white',
                'focus:outline-none focus:ring-2 focus:ring-primary-500',
                'transition-all duration-200'
              )}
            >
              {currencies.map((currency) => (
                <option key={currency.code} value={currency.code}>
                  {currency.flag} {currency.code} - {currency.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Result Display */}
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
              <span className="ml-3 text-gray-600 dark:text-gray-400">Fetching live rate...</span>
            </div>
          ) : error ? (
            <div className="text-red-500 dark:text-red-400 py-4">
              <p className="font-medium">Error: {error}</p>
              <button
                onClick={fetchExchangeRate}
                className="mt-2 text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Retry
              </button>
            </div>
          ) : (
            <>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-1">
                {formatNumber(amount)} {fromCurrency} =
              </p>
              <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
                {toCurrencyInfo?.symbol}{formatNumber(convertedAmount)}
              </p>
              <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mt-1">
                {toCurrency}
              </p>
              {rate !== null && (
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                  1 {fromCurrency} = {formatNumber(rate, 4)} {toCurrency}
                </p>
              )}
              {rate !== null && (
                <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                  1 {toCurrency} = {formatNumber(1 / rate, 4)} {fromCurrency}
                </p>
              )}
            </>
          )}
        </div>

        {/* Last Updated */}
        {lastUpdated && !loading && !error && (
          <p className="text-xs text-center text-gray-400 dark:text-gray-500">
            Rate updated: {lastUpdated.toLocaleTimeString()}
          </p>
        )}
      </div>
    </div>
  );
};

export default LiveConverter;
