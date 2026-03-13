import { Metadata } from 'next';
import Link from 'next/link';
import { LiveConverter } from '@/components/converter/LiveConverter';
import { AdBanner } from '@/components/ads/AdBanner';
import { AdInContent } from '@/components/ads/AdInContent';
import { popularPairs } from '@/data/popularPairs';
import { currencies, popularCurrencies } from '@/data/currencies';
import { getLatestRates } from '@/lib/api';
import { formatNumber, cn } from '@/lib/utils';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'CurrencyFlow – Real-Time Global Currency Converter',
  description: 'Convert currencies instantly with live exchange rates. View historical trends, interactive charts, and currency information on CurrencyFlow.',
  alternates: {
    canonical: 'https://currencyflow.vercel.app/',
  },
  openGraph: {
    title: 'CurrencyFlow – Real-Time Global Currency Converter',
    description: 'Convert currencies instantly with live exchange rates.',
    url: 'https://currencyflow.vercel.app/',
  },
};

async function getTopRates() {
  try {
    const data = await getLatestRates('USD');
    return data.rates;
  } catch {
    return {};
  }
}

export default async function HomePage() {
  const rates = await getTopRates();

  return (
    <>
      <StructuredData type="website" />
      <StructuredData type="organization" />

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-gray-900 dark:via-primary-950 dark:to-gray-900">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              CurrencyFlow
              <span className="block text-xl md:text-2xl lg:text-3xl font-normal text-primary-200 mt-2">
                Real-Time Global Currency Converter
              </span>
            </h1>
            <p className="text-lg md:text-xl text-primary-100 max-w-2xl mx-auto">
              Convert currencies instantly with live exchange rates from Frankfurter API. 
              Track historical trends and make informed decisions.
            </p>
          </div>

          {/* Top Ad Banner */}
          <div className="max-w-4xl mx-auto mb-8">
            <AdBanner slot="home-top-banner" className="w-full" />
          </div>

          {/* Main Converter - NOW WITH LIVE API */}
          <div className="max-w-2xl mx-auto">
            <LiveConverter initialFrom="USD" initialTo="EUR" initialAmount={1} />
          </div>
        </div>
      </section>

      {/* Popular Conversions Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Popular Currency Conversions
          </h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {popularPairs.slice(0, 10).map((pair) => (
              <Link
                key={`${pair.from}-${pair.to}`}
                href={`/${pair.from.toLowerCase()}-to-${pair.to.toLowerCase()}/`}
                className={cn(
                  'group p-4 bg-gray-50 dark:bg-gray-800 rounded-xl',
                  'hover:bg-primary-50 dark:hover:bg-primary-900/20',
                  'border border-gray-200 dark:border-gray-700',
                  'hover:border-primary-300 dark:hover:border-primary-700',
                  'transition-all duration-200'
                )}
              >
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl">{pair.fromFlag}</span>
                  <svg
                    className="w-4 h-4 text-gray-400 group-hover:text-primary-500 transition-colors"
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
                  <span className="text-2xl">{pair.toFlag}</span>
                </div>
                <p className="text-center font-semibold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400">
                  {pair.from} to {pair.to}
                </p>
                <p className="text-center text-sm text-gray-500 dark:text-gray-400">
                  {pair.fromName} to {pair.toName}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Mid-content Ad */}
      <div className="max-w-4xl mx-auto px-4">
        <AdInContent slot="home-mid-content" />
      </div>

      {/* Live Rates Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-4">
            Live Exchange Rates
          </h2>
          <p className="text-center text-gray-600 dark:text-gray-400 mb-12">
            Base currency: USD (Powered by Frankfurter API)
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {popularCurrencies.filter(c => c !== 'USD').map((code) => {
              const currency = currencies.find(c => c.code === code);
              const rate = rates[code];
              return (
                <div
                  key={code}
                  className={cn(
                    'p-4 bg-white dark:bg-gray-800 rounded-xl',
                    'border border-gray-200 dark:border-gray-700',
                    'shadow-sm'
                  )}
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{currency?.flag}</span>
                    <div>
                      <p className="font-semibold text-gray-900 dark:text-white">{code}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{currency?.name}</p>
                    </div>
                  </div>
                  <p className="text-lg font-bold text-primary-600 dark:text-primary-400">
                    {rate ? formatNumber(rate, 4) : 'Loading...'}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-950">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white text-center mb-12">
            Why Choose CurrencyFlow?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Real-Time Rates</h3>
              <p className="text-gray-600 dark:text-gray-300">Live exchange rates from Frankfurter API, updated throughout the day.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-accent-100 dark:bg-accent-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">150+ Currencies</h3>
              <p className="text-gray-600 dark:text-gray-300">Support for major and exotic currencies worldwide.</p>
            </div>
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">Free & Private</h3>
              <p className="text-gray-600 dark:text-gray-300">No registration required. Your data stays on your device.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Ad */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <AdBanner slot="home-bottom-banner" className="w-full" />
      </div>
    </>
  );
}
