'use client';

import { useParams } from 'next/navigation';
import { PairConverter } from '@/components/converter/PairConverter';
import { AdBanner } from '@/components/ads/AdBanner';
import { AdInContent } from '@/components/ads/AdInContent';
import { cn } from '@/lib/utils';

// Currency data
const currencyData: Record<string, { name: string; flag: string }> = {
  USD: { name: 'US Dollar', flag: '🇺🇸' },
  EUR: { name: 'Euro', flag: '🇪🇺' },
  GBP: { name: 'British Pound', flag: '🇬🇧' },
  JPY: { name: 'Japanese Yen', flag: '🇯🇵' },
  AUD: { name: 'Australian Dollar', flag: '🇦🇺' },
  CAD: { name: 'Canadian Dollar', flag: '🇨🇦' },
  CHF: { name: 'Swiss Franc', flag: '🇨🇭' },
  CNY: { name: 'Chinese Yuan', flag: '🇨🇳' },
  INR: { name: 'Indian Rupee', flag: '🇮🇳' },
  SGD: { name: 'Singapore Dollar', flag: '🇸🇬' },
  AED: { name: 'UAE Dirham', flag: '🇦🇪' },
  SAR: { name: 'Saudi Riyal', flag: '🇸🇦' },
  PKR: { name: 'Pakistani Rupee', flag: '🇵🇰' },
  BDT: { name: 'Bangladeshi Taka', flag: '🇧🇩' },
  NGN: { name: 'Nigerian Naira', flag: '🇳🇬' },
  MXN: { name: 'Mexican Peso', flag: '🇲🇽' },
  BRL: { name: 'Brazilian Real', flag: '🇧🇷' },
  ZAR: { name: 'South African Rand', flag: '🇿🇦' },
  KRW: { name: 'South Korean Won', flag: '🇰🇷' },
  THB: { name: 'Thai Baht', flag: '🇹🇭' },
};

export default function CurrencyPairPage() {
  const params = useParams();
  const pair = params.pair as string;

  // Parse the pair from URL (e.g., "usd-to-inr")
  const match = pair?.match(/^([a-z]{3})-to-([a-z]{3})$/);
  
  if (!match) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Invalid Currency Pair</h1>
          <p className="text-gray-600 dark:text-gray-300">Please check the URL and try again.</p>
        </div>
      </div>
    );
  }

  const from = match[1].toUpperCase();
  const to = match[2].toUpperCase();

  const fromCurrency = currencyData[from];
  const toCurrency = currencyData[to];

  if (!fromCurrency || !toCurrency) {
    return (
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Currency Not Found</h1>
          <p className="text-gray-600 dark:text-gray-300">One or both currencies are not supported.</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-gray-900 dark:via-primary-950 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="text-5xl md:text-6xl">{fromCurrency.flag}</span>
              <svg
                className="w-8 h-8 text-primary-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
              <span className="text-5xl md:text-6xl">{toCurrency.flag}</span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
              {from} to {to} Converter
            </h1>
            <p className="text-xl text-primary-100 max-w-2xl mx-auto">
              Live {fromCurrency.name} to {toCurrency.name} exchange rate
            </p>
            <p className="text-sm text-primary-200 mt-2">
              Powered by Frankfurter API
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Ad */}
        <div className="max-w-4xl mx-auto mb-8">
          <AdBanner slot={`${from.toLowerCase()}-${to.toLowerCase()}-top`} className="w-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Converter - NOW WITH LIVE API */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-6 md:p-8">
              <PairConverter
                fromCode={from}
                toCode={to}
                fromName={fromCurrency.name}
                toName={toCurrency.name}
                fromFlag={fromCurrency.flag}
                toFlag={toCurrency.flag}
              />
            </div>

            {/* Mid-content Ad */}
            <AdInContent slot={`${from.toLowerCase()}-${to.toLowerCase()}-mid`} />

            {/* Currency Info */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                About {fromCurrency.name} and {toCurrency.name}
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{fromCurrency.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{from}</h3>
                      <p className="text-sm text-gray-500">{fromCurrency.name}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The {fromCurrency.name} ({from}) is a major global currency used in international trade 
                    and finance. Exchange rates for {from} are influenced by economic factors, 
                    monetary policy, and market conditions.
                  </p>
                </div>

                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-4xl">{toCurrency.flag}</span>
                    <div>
                      <h3 className="font-semibold text-gray-900 dark:text-white">{to}</h3>
                      <p className="text-sm text-gray-500">{toCurrency.name}</p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The {toCurrency.name} ({to}) plays an important role in regional and international 
                    markets. Its value relative to other currencies reflects economic conditions 
                    and investor sentiment.
                  </p>
                </div>
              </div>
            </div>

            {/* FAQ Section */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Frequently Asked Questions
              </h2>
              
              <div className="space-y-4">
                <div className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    What is the current {from} to {to} exchange rate?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    The exchange rate is fetched live from the Frankfurter API. Use the converter above 
                    to see the current rate. Rates fluctuate throughout the day based on market conditions.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    How do I convert {fromCurrency.name} to {toCurrency.name}?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Use our live currency converter above. Simply enter the amount in {from}, 
                    and the converted amount in {to} will display instantly using the current exchange rate.
                  </p>
                </div>
                
                <div className="border-b border-gray-200 dark:border-gray-700 last:border-0 pb-4 last:pb-0">
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Is it a good time to exchange {from} for {to}?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Exchange rates fluctuate constantly based on economic factors. Consider consulting 
                    with a financial advisor for large transactions or timing decisions.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Why does the {from} to {to} rate change?
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm">
                    Exchange rates change due to various factors including economic indicators, 
                    interest rates, inflation, political stability, and market speculation.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Data Source */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Data Source
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">
                Exchange rates are provided by the Frankfurter API, which sources data from the European Central Bank.
              </p>
              <a 
                href="https://www.frankfurter.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
              >
                Learn more →
              </a>
            </div>

            {/* Related Conversions */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Related Conversions
              </h3>
              <div className="space-y-2">
                {['USD', 'EUR', 'GBP'].filter(c => c !== from && c !== to).map((currency) => (
                  <a
                    key={currency}
                    href={`/${from.toLowerCase()}-to-${currency.toLowerCase()}/`}
                    className="flex items-center justify-between p-3 bg-gray-50 dark:bg-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 transition-colors"
                  >
                    <span className="text-gray-900 dark:text-white">
                      {from} to {currency}
                    </span>
                    <svg
                      className="w-4 h-4 text-gray-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
