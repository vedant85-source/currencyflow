export interface Currency {
  code: string;
  name: string;
  symbol: string;
  flag: string;
}

export interface ExchangeRate {
  base: string;
  target: string;
  rate: number;
  timestamp: number;
}

export interface ConversionHistory {
  id: string;
  from: string;
  to: string;
  amount: number;
  result: number;
  rate: number;
  timestamp: number;
}

export interface ChartDataPoint {
  date: string;
  rate: number;
}

export interface CurrencyPair {
  from: string;
  to: string;
  fromName: string;
  toName: string;
  fromFlag: string;
  toFlag: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  tags: string[];
  image?: string;
}

export interface SEOMeta {
  title: string;
  description: string;
  keywords?: string[];
  ogImage?: string;
  canonical?: string;
}

export type TimeRange = '1d' | '7d' | '30d' | '1y';
