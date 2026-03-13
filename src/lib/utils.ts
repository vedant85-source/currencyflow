import { ConversionHistory } from '@/types';

// Format number with commas
export const formatNumber = (num: number, decimals: number = 2): string => {
  return num.toLocaleString('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
};

// Format currency with symbol
export const formatCurrency = (
  amount: number,
  currencyCode: string,
  decimals: number = 2
): string => {
  const symbols: Record<string, string> = {
    USD: '$',
    EUR: '€',
    GBP: '£',
    JPY: '¥',
    AUD: 'A$',
    CAD: 'C$',
    CHF: 'Fr',
    CNY: '¥',
    INR: '₹',
    SGD: 'S$',
    HKD: 'HK$',
    KRW: '₩',
    SEK: 'kr',
    NOK: 'kr',
    NZD: 'NZ$',
    TRY: '₺',
    RUB: '₽',
    AED: 'د.إ',
    SAR: '﷼',
    PKR: '₨',
    BDT: '৳',
    NGN: '₦',
    EGP: '£',
    THB: '฿',
    MYR: 'RM',
    IDR: 'Rp',
    PHP: '₱',
    VND: '₫',
    PLN: 'zł',
    CZK: 'Kč',
    HUF: 'Ft',
    DKK: 'kr',
    ILS: '₪',
    CLP: '$',
    COP: '$',
    ARS: '$',
    PEN: 'S/',
    QAR: '﷼',
    KWD: 'د.ك',
    OMR: '﷼',
    BHD: 'د.ب',
    JOD: 'د.ا',
    LBP: 'ل.ل',
    IQD: 'ع.د',
    MXN: '$',
    BRL: 'R$',
    ZAR: 'R',
  };

  const symbol = symbols[currencyCode] || currencyCode;
  const formatted = formatNumber(amount, decimals);
  
  // For currencies where symbol comes after
  const suffixCurrencies = ['CZK', 'DKK', 'HUF', 'NOK', 'PLN', 'SEK'];
  
  if (suffixCurrencies.includes(currencyCode)) {
    return `${formatted} ${symbol}`;
  }
  
  return `${symbol}${formatted}`;
};

// Get date range for charts
export const getDateRange = (
  range: '1d' | '7d' | '30d' | '1y'
): { startDate: string; endDate: string } => {
  const end = new Date();
  const start = new Date();
  
  switch (range) {
    case '1d':
      start.setDate(end.getDate() - 1);
      break;
    case '7d':
      start.setDate(end.getDate() - 7);
      break;
    case '30d':
      start.setDate(end.getDate() - 30);
      break;
    case '1y':
      start.setFullYear(end.getFullYear() - 1);
      break;
  }
  
  return {
    startDate: start.toISOString().split('T')[0],
    endDate: end.toISOString().split('T')[0],
  };
};

// Local storage helpers for conversion history
const HISTORY_KEY = 'currencyflow_history';
const MAX_HISTORY_ITEMS = 10;

export const getConversionHistory = (): ConversionHistory[] => {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(HISTORY_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading history:', error);
  }
  return [];
};

export const addToHistory = (
  from: string,
  to: string,
  amount: number,
  result: number,
  rate: number
): void => {
  if (typeof window === 'undefined') return;
  
  try {
    const history = getConversionHistory();
    const newItem: ConversionHistory = {
      id: Date.now().toString(),
      from,
      to,
      amount,
      result,
      rate,
      timestamp: Date.now(),
    };
    
    const updated = [newItem, ...history].slice(0, MAX_HISTORY_ITEMS);
    localStorage.setItem(HISTORY_KEY, JSON.stringify(updated));
  } catch (error) {
    console.error('Error saving history:', error);
  }
};

export const clearHistory = (): void => {
  if (typeof window === 'undefined') return;
  
  try {
    localStorage.removeItem(HISTORY_KEY);
  } catch (error) {
    console.error('Error clearing history:', error);
  }
};

// Format timestamp to readable date
export const formatTimestamp = (timestamp: number): string => {
  const date = new Date(timestamp);
  return date.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
};

// Generate SEO-friendly slug
export const generateSlug = (from: string, to: string): string => {
  return `${from.toLowerCase()}-to-${to.toLowerCase()}`;
};

// Parse slug to currency pair
export const parseSlug = (slug: string): { from: string; to: string } | null => {
  const match = slug.match(/^([a-z]{3})-to-([a-z]{3})$/i);
  if (match) {
    return {
      from: match[1].toUpperCase(),
      to: match[2].toUpperCase(),
    };
  }
  return null;
};

// Debounce function
export const debounce = <T extends (...args: any[]) => void>(
  func: T,
  wait: number
): ((...args: Parameters<T>) => void) => {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

// Class name merger for Tailwind
export const cn = (...classes: (string | boolean | undefined)[]): string => {
  return classes.filter(Boolean).join(' ');
};
