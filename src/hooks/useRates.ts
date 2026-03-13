'use client';

import { useState, useEffect, useCallback } from 'react';
import { getLatestRates } from '@/lib/api';

interface RatesMap {
  [key: string]: number;
}

interface UseRatesReturn {
  rates: RatesMap;
  loading: boolean;
  error: string | null;
  lastUpdated: Date | null;
  refreshRates: () => Promise<void>;
}

export const useRates = (base: string = 'USD'): UseRatesReturn => {
  const [rates, setRates] = useState<RatesMap>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const refreshRates = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      const data = await getLatestRates(base);
      setRates(data.rates);
      setLastUpdated(new Date());
    } catch (err) {
      setError('Failed to fetch exchange rates');
    } finally {
      setLoading(false);
    }
  }, [base]);

  useEffect(() => {
    refreshRates();
    
    // Auto-refresh every 5 minutes
    const interval = setInterval(refreshRates, 5 * 60 * 1000);
    
    return () => clearInterval(interval);
  }, [refreshRates]);

  return {
    rates,
    loading,
    error,
    lastUpdated,
    refreshRates,
  };
};
