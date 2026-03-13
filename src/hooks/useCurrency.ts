'use client';

import { useState, useEffect, useCallback } from 'react';
import { getExchangeRate, convertCurrency } from '@/lib/api';
import { addToHistory } from '@/lib/utils';

interface UseCurrencyReturn {
  amount: number;
  setAmount: (amount: number) => void;
  fromCurrency: string;
  setFromCurrency: (currency: string) => void;
  toCurrency: string;
  setToCurrency: (currency: string) => void;
  result: number;
  rate: number;
  loading: boolean;
  error: string | null;
  swapCurrencies: () => void;
  convert: () => Promise<void>;
}

export const useCurrency = (
  initialFrom: string = 'USD',
  initialTo: string = 'EUR',
  initialAmount: number = 1
): UseCurrencyReturn => {
  const [amount, setAmount] = useState(initialAmount);
  const [fromCurrency, setFromCurrency] = useState(initialFrom);
  const [toCurrency, setToCurrency] = useState(initialTo);
  const [result, setResult] = useState(0);
  const [rate, setRate] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const convert = useCallback(async () => {
    if (amount <= 0) return;
    
    setLoading(true);
    setError(null);
    
    try {
      const { result: conversionResult, rate: exchangeRate } = await convertCurrency(
        amount,
        fromCurrency,
        toCurrency
      );
      setResult(conversionResult);
      setRate(exchangeRate);
      addToHistory(fromCurrency, toCurrency, amount, conversionResult, exchangeRate);
    } catch (err) {
      setError('Failed to convert currency. Please try again.');
    } finally {
      setLoading(false);
    }
  }, [amount, fromCurrency, toCurrency]);

  const swapCurrencies = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
  }, [fromCurrency, toCurrency]);

  // Auto-convert when dependencies change
  useEffect(() => {
    const timeout = setTimeout(() => {
      convert();
    }, 300);
    
    return () => clearTimeout(timeout);
  }, [amount, fromCurrency, toCurrency, convert]);

  // Initial conversion
  useEffect(() => {
    convert();
  }, []);

  return {
    amount,
    setAmount,
    fromCurrency,
    setFromCurrency,
    toCurrency,
    setToCurrency,
    result,
    rate,
    loading,
    error,
    swapCurrencies,
    convert,
  };
};
