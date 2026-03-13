import { CurrencyPair } from '@/types';

export const popularPairs: CurrencyPair[] = [
  { from: 'USD', to: 'INR', fromName: 'US Dollar', toName: 'Indian Rupee', fromFlag: '🇺🇸', toFlag: '🇮🇳' },
  { from: 'EUR', to: 'USD', fromName: 'Euro', toName: 'US Dollar', fromFlag: '🇪🇺', toFlag: '🇺🇸' },
  { from: 'GBP', to: 'INR', fromName: 'British Pound', toName: 'Indian Rupee', fromFlag: '🇬🇧', toFlag: '🇮🇳' },
  { from: 'USD', to: 'JPY', fromName: 'US Dollar', toName: 'Japanese Yen', fromFlag: '🇺🇸', toFlag: '🇯🇵' },
  { from: 'USD', to: 'AUD', fromName: 'US Dollar', toName: 'Australian Dollar', fromFlag: '🇺🇸', toFlag: '🇦🇺' },
  { from: 'USD', to: 'AED', fromName: 'US Dollar', toName: 'UAE Dirham', fromFlag: '🇺🇸', toFlag: '🇦🇪' },
  { from: 'USD', to: 'PKR', fromName: 'US Dollar', toName: 'Pakistani Rupee', fromFlag: '🇺🇸', toFlag: '🇵🇰' },
  { from: 'USD', to: 'BDT', fromName: 'US Dollar', toName: 'Bangladeshi Taka', fromFlag: '🇺🇸', toFlag: '🇧🇩' },
  { from: 'USD', to: 'NGN', fromName: 'US Dollar', toName: 'Nigerian Naira', fromFlag: '🇺🇸', toFlag: '🇳🇬' },
  { from: 'GBP', to: 'USD', fromName: 'British Pound', toName: 'US Dollar', fromFlag: '🇬🇧', toFlag: '🇺🇸' },
  { from: 'EUR', to: 'GBP', fromName: 'Euro', toName: 'British Pound', fromFlag: '🇪🇺', toFlag: '🇬🇧' },
  { from: 'AUD', to: 'USD', fromName: 'Australian Dollar', toName: 'US Dollar', fromFlag: '🇦🇺', toFlag: '🇺🇸' },
  { from: 'USD', to: 'CAD', fromName: 'US Dollar', toName: 'Canadian Dollar', fromFlag: '🇺🇸', toFlag: '🇨🇦' },
  { from: 'USD', to: 'CHF', fromName: 'US Dollar', toName: 'Swiss Franc', fromFlag: '🇺🇸', toFlag: '🇨🇭' },
  { from: 'USD', to: 'CNY', fromName: 'US Dollar', toName: 'Chinese Yuan', fromFlag: '🇺🇸', toFlag: '🇨🇳' },
  { from: 'EUR', to: 'INR', fromName: 'Euro', toName: 'Indian Rupee', fromFlag: '🇪🇺', toFlag: '🇮🇳' },
  { from: 'GBP', to: 'EUR', fromName: 'British Pound', toName: 'Euro', fromFlag: '🇬🇧', toFlag: '🇪🇺' },
  { from: 'JPY', to: 'USD', fromName: 'Japanese Yen', toName: 'US Dollar', fromFlag: '🇯🇵', toFlag: '🇺🇸' },
  { from: 'CAD', to: 'USD', fromName: 'Canadian Dollar', toName: 'US Dollar', fromFlag: '🇨🇦', toFlag: '🇺🇸' },
  { from: 'USD', to: 'SGD', fromName: 'US Dollar', toName: 'Singapore Dollar', fromFlag: '🇺🇸', toFlag: '🇸🇬' },
];

export const getPopularPairs = (): CurrencyPair[] => popularPairs;

export const getPairByCodes = (from: string, to: string): CurrencyPair | undefined => {
  return popularPairs.find(p => p.from === from && p.to === to);
};

export const generateAllPairs = (): CurrencyPair[] => {
  const majorCurrencies = ['USD', 'EUR', 'GBP', 'JPY', 'AUD', 'CAD', 'CHF', 'CNY', 'INR', 'SGD', 'AED', 'SAR', 'PKR', 'BDT', 'NGN'];
  const pairs: CurrencyPair[] = [];
  
  for (const from of majorCurrencies) {
    for (const to of majorCurrencies) {
      if (from !== to) {
        const existing = popularPairs.find(p => p.from === from && p.to === to);
        if (existing) {
          pairs.push(existing);
        } else {
          pairs.push({
            from,
            to,
            fromName: getCurrencyName(from),
            toName: getCurrencyName(to),
            fromFlag: getCurrencyFlag(from),
            toFlag: getCurrencyFlag(to),
          });
        }
      }
    }
  }
  
  return pairs;
};

const getCurrencyName = (code: string): string => {
  const names: Record<string, string> = {
    'USD': 'US Dollar',
    'EUR': 'Euro',
    'GBP': 'British Pound',
    'JPY': 'Japanese Yen',
    'AUD': 'Australian Dollar',
    'CAD': 'Canadian Dollar',
    'CHF': 'Swiss Franc',
    'CNY': 'Chinese Yuan',
    'INR': 'Indian Rupee',
    'SGD': 'Singapore Dollar',
    'AED': 'UAE Dirham',
    'SAR': 'Saudi Riyal',
    'PKR': 'Pakistani Rupee',
    'BDT': 'Bangladeshi Taka',
    'NGN': 'Nigerian Naira',
  };
  return names[code] || code;
};

const getCurrencyFlag = (code: string): string => {
  const flags: Record<string, string> = {
    'USD': '🇺🇸',
    'EUR': '🇪🇺',
    'GBP': '🇬🇧',
    'JPY': '🇯🇵',
    'AUD': '🇦🇺',
    'CAD': '🇨🇦',
    'CHF': '🇨🇭',
    'CNY': '🇨🇳',
    'INR': '🇮🇳',
    'SGD': '🇸🇬',
    'AED': '🇦🇪',
    'SAR': '🇸🇦',
    'PKR': '🇵🇰',
    'BDT': '🇧🇩',
    'NGN': '🇳🇬',
  };
  return flags[code] || '🏳️';
};
