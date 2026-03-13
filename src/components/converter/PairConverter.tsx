'use client';

import { useState, useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';

interface PairConverterProps {
  fromCode: string;
  toCode: string;
  fromName: string;
  toName: string;
  fromFlag: string;
  toFlag: string;
}

export const PairConverter: React.FC<PairConverterProps> = ({
  fromCode,
  toCode,
  fromName,
  toName,
  fromFlag,
  toFlag,
}) => {
  const [amount, setAmount] = useState<number>(1);
  const [rate, setRate] = useState<number | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  // Fetch live exchange rate from Frankfurter API
  const fetchExchangeRate = useCallback(async () => {
    if (fromCode === toCode) {
      setRate(1);
      setLastUpdated(new Date());
      console.log(`[PairConverter] Same currency: ${fromCode} = 1.0000`);
      return;
    }

    setLoading(true);
    setError(null);

    const apiUrl = `https://api.frankfurter.app/latest?from=${fromCode}&to=${toCode}`;
    console.log(`[PairConverter] Fetching rate from: ${apiUrl}`);

    try {
      const response = await fetch(apiUrl);
      
      if (!response.ok) {
        throw new Error(`API error: ${response.status} ${response.statusText}`);
      }

      const data = await response.json();
      console.log('[PairConverter] API Response:', data);

      // Parse the rate from the response
      const fetchedRate = data.rates?.[toCode];
      
      if (fetchedRate === undefined || fetchedRate === null) {
        throw new Error(`Rate not found for ${toCode} in response`);
      }

      console.log(`[PairConverter] Rate fetched: 1 ${fromCode} = ${fetchedRate} ${toCode}`);
      
      setRate(fetchedRate);
      setLastUpdated(new Date());
    } catch (err) {
      console.error('[PairConverter] Error fetching rate:', err);
      setError(err instanceof Error ? err.message : 'Failed to fetch exchange rate');
      setRate(null);
    } finally {
      setLoading(false);
    }
  }, [fromCode, toCode]);

  // Fetch rate on mount and when currencies change
  useEffect(() => {
    fetchExchangeRate();
  }, [fetchExchangeRate]);

  // Calculate converted amount
  const convertedAmount = rate !== null ? amount * rate : 0;

  // Format number with commas
  const formatNumber = (num: number, decimals: number = 2) => {
    return num.toLocaleString('en-US', {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    });
  };

  return (
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
            {fromCode}
          </span>
        </div>
      </div>

      {/* Currency Display (Read-only for pair pages) */}
      <div className="grid grid-cols-2 gap-4">
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">From</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{fromFlag}</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{fromCode}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{fromName}</p>
            </div>
          </div>
        </div>
        <div className="p-4 bg-gray-100 dark:bg-gray-700 rounded-lg">
          <p className="text-xs text-gray-500 dark:text-gray-400 mb-1">To</p>
          <div className="flex items-center gap-2">
            <span className="text-2xl">{toFlag}</span>
            <div>
              <p className="font-semibold text-gray-900 dark:text-white">{toCode}</p>
              <p className="text-xs text-gray-500 dark:text-gray-400">{toName}</p>
            </div>
          </div>
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
              {formatNumber(amount)} {fromCode} =
            </p>
            <p className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              {formatNumber(convertedAmount)}
            </p>
            <p className="text-lg text-primary-600 dark:text-primary-400 font-medium mt-1">
              {toCode}
            </p>
            {rate !== null && (
              <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
                1 {fromCode} = {formatNumber(rate, 4)} {toCode}
              </p>
            )}
            {rate !== null && (
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                1 {toCode} = {formatNumber(1 / rate, 4)} {fromCode}
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

      {/* Debug Info (remove in production) */}
      {rate !== null && (
        <div className="text-xs text-gray-400 dark:text-gray-500 text-center">
          <p>API: Frankfurter</p>
          <p>Rate: {rate}</p>
        </div>
      )}
    </div>
  );
};

export default PairConverter;
