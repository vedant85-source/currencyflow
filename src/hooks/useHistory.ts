'use client';

import { useState, useEffect, useCallback } from 'react';
import { ConversionHistory } from '@/types';
import { getConversionHistory, clearHistory as clearStoredHistory } from '@/lib/utils';

interface UseHistoryReturn {
  history: ConversionHistory[];
  refreshHistory: () => void;
  clearHistory: () => void;
}

export const useHistory = (): UseHistoryReturn => {
  const [history, setHistory] = useState<ConversionHistory[]>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    refreshHistory();
  }, []);

  const refreshHistory = useCallback(() => {
    if (typeof window !== 'undefined') {
      const stored = getConversionHistory();
      setHistory(stored);
    }
  }, []);

  const clearHistory = useCallback(() => {
    clearStoredHistory();
    setHistory([]);
  }, []);

  // Prevent hydration mismatch
  if (!mounted) {
    return {
      history: [],
      refreshHistory: () => {},
      clearHistory: () => {},
    };
  }

  return {
    history,
    refreshHistory,
    clearHistory,
  };
};
