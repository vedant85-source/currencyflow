import axios from 'axios';
import { ChartDataPoint } from '@/types';

const FRANKFURTER_API = 'https://api.frankfurter.app';

// Cache for exchange rates
const rateCache: Map<string, { rate: number; timestamp: number }> = new Map();
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export interface ExchangeRateResponse {
  base: string;
  rates: Record<string, number>;
  date: string;
}

export const getLatestRates = async (base: string = 'USD'): Promise<ExchangeRateResponse> => {
  try {
    const response = await axios.get(`${FRANKFURTER_API}/latest`, {
      params: { from: base },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching latest rates:', error);
    throw new Error('Failed to fetch exchange rates');
  }
};

export const getExchangeRate = async (
  from: string,
  to: string
): Promise<number> => {
  const cacheKey = `${from}-${to}`;
  const cached = rateCache.get(cacheKey);
  
  if (cached && Date.now() - cached.timestamp < CACHE_DURATION) {
    return cached.rate;
  }

  try {
    const response = await axios.get(`${FRANKFURTER_API}/latest`, {
      params: { from, to },
    });
    const rate = response.data.rates[to];
    
    rateCache.set(cacheKey, { rate, timestamp: Date.now() });
    return rate;
  } catch (error) {
    console.error('Error fetching exchange rate:', error);
    // Return fallback rates for demo purposes
    return getFallbackRate(from, to);
  }
};

export const getHistoricalRates = async (
  from: string,
  to: string,
  startDate: string,
  endDate: string
): Promise<ChartDataPoint[]> => {
  try {
    const response = await axios.get(`${FRANKFURTER_API}/${startDate}..${endDate}`, {
      params: { from, to },
    });
    
    const rates = response.data.rates;
    return Object.entries(rates).map(([date, rateData]: [string, any]) => ({
      date,
      rate: rateData[to],
    }));
  } catch (error) {
    console.error('Error fetching historical rates:', error);
    // Generate mock data for demo
    return generateMockHistoricalData(from, to, startDate, endDate);
  }
};

export const getCurrencies = async (): Promise<Record<string, string>> => {
  try {
    const response = await axios.get(`${FRANKFURTER_API}/currencies`);
    return response.data;
  } catch (error) {
    console.error('Error fetching currencies:', error);
    return {};
  }
};

// Fallback rates for demo purposes
const getFallbackRate = (from: string, to: string): number => {
  const rates: Record<string, Record<string, number>> = {
    'USD': {
      'EUR': 0.92, 'GBP': 0.79, 'JPY': 150.5, 'AUD': 1.52, 'CAD': 1.35,
      'CHF': 0.88, 'CNY': 7.19, 'INR': 83.0, 'SGD': 1.34, 'AED': 3.67,
      'SAR': 3.75, 'PKR': 278.5, 'BDT': 109.5, 'NGN': 1500, 'NZD': 1.61,
      'MXN': 17.05, 'BRL': 4.95, 'ZAR': 18.9, 'SEK': 10.35, 'NOK': 10.55,
      'TRY': 31.2, 'RUB': 92.5, 'THB': 35.8, 'MYR': 4.75, 'IDR': 15600,
      'PHP': 56.2, 'VND': 24500, 'PLN': 4.0, 'CZK': 23.5, 'HUF': 358,
      'DKK': 6.88, 'ILS': 3.65, 'KWD': 0.307, 'QAR': 3.64, 'OMR': 0.384,
      'BHD': 0.376, 'JOD': 0.709, 'EGP': 30.9, 'CLP': 965, 'COP': 3920,
      'ARS': 838, 'PEN': 3.72, 'LBP': 89500, 'IQD': 1308,
    },
    'EUR': {
      'USD': 1.09, 'GBP': 0.86, 'JPY': 163.5, 'AUD': 1.65, 'CAD': 1.47,
      'CHF': 0.96, 'CNY': 7.82, 'INR': 90.2, 'SGD': 1.46, 'AED': 4.0,
      'SAR': 4.09, 'PKR': 303, 'BDT': 119, 'NGN': 1635, 'NZD': 1.75,
    },
    'GBP': {
      'USD': 1.27, 'EUR': 1.16, 'JPY': 190.2, 'AUD': 1.92, 'CAD': 1.71,
      'CHF': 1.11, 'CNY': 9.11, 'INR': 105.1, 'SGD': 1.70, 'AED': 4.66,
      'SAR': 4.76, 'PKR': 353, 'BDT': 138.5, 'NGN': 1905, 'NZD': 2.04,
    },
    'INR': {
      'USD': 0.012, 'EUR': 0.011, 'GBP': 0.0095, 'JPY': 1.81, 'AUD': 0.018,
      'CAD': 0.016, 'AED': 0.044, 'PKR': 3.35, 'BDT': 1.32, 'SGD': 0.016,
    },
  };
  
  if (rates[from] && rates[from][to]) {
    return rates[from][to];
  }
  if (rates[to] && rates[to][from]) {
    return 1 / rates[to][from];
  }
  if (from === to) {
    return 1;
  }
  
  // Cross rate calculation via USD
  if (rates['USD'] && rates['USD'][from] && rates['USD'][to]) {
    return rates['USD'][to] / rates['USD'][from];
  }
  
  return 1;
};

// Generate mock historical data for demo
const generateMockHistoricalData = (
  from: string,
  to: string,
  startDate: string,
  endDate: string
): ChartDataPoint[] => {
  const baseRate = getFallbackRate(from, to);
  const data: ChartDataPoint[] = [];
  const start = new Date(startDate);
  const end = new Date(endDate);
  const daysDiff = Math.ceil((end.getTime() - start.getTime()) / (1000 * 60 * 60 * 24));
  
  let currentRate = baseRate;
  
  for (let i = 0; i <= daysDiff; i++) {
    const date = new Date(start);
    date.setDate(date.getDate() + i);
    
    // Add some random variation
    const change = (Math.random() - 0.5) * 0.02;
    currentRate = currentRate * (1 + change);
    
    data.push({
      date: date.toISOString().split('T')[0],
      rate: Number(currentRate.toFixed(4)),
    });
  }
  
  return data;
};

export const convertCurrency = async (
  amount: number,
  from: string,
  to: string
): Promise<{ result: number; rate: number }> => {
  const rate = await getExchangeRate(from, to);
  return {
    result: Number((amount * rate).toFixed(2)),
    rate,
  };
};
