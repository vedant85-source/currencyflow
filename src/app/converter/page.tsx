'use client';

import { LiveConverter } from '@/components/converter/LiveConverter';
import { AdBanner } from '@/components/ads/AdBanner';
import { AdInContent } from '@/components/ads/AdInContent';

export default function ConverterPage() {
  return (
    <>
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-gray-900 dark:via-primary-950 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            Currency Converter
          </h1>
          <p className="text-primary-100 text-center max-w-2xl mx-auto">
            Convert between 150+ currencies with real-time exchange rates from Frankfurter API.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Ad */}
        <div className="max-w-4xl mx-auto mb-8">
          <AdBanner slot="converter-top" className="w-full" />
        </div>

        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Main Converter */}
          <div className="lg:col-span-2">
            <LiveConverter initialFrom="USD" initialTo="EUR" initialAmount={100} />
            
            {/* Features */}
            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">150+ Currencies</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Support for major and exotic currencies worldwide.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Live Rates</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">Real-time rates from Frankfurter API.</p>
              </div>
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm text-center">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Free & Private</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">No registration required.</p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* How to Convert */}
            <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                How to Convert
              </h3>
              <ol className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-xs font-semibold">
                    1
                  </span>
                  Enter the amount you want to convert
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-xs font-semibold">
                    2
                  </span>
                  Select the source currency
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-xs font-semibold">
                    3
                  </span>
                  Select the target currency
                </li>
                <li className="flex gap-3">
                  <span className="flex-shrink-0 w-6 h-6 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex items-center justify-center text-xs font-semibold">
                    4
                  </span>
                  View the converted amount instantly
                </li>
              </ol>
            </div>

            {/* API Info */}
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
                Learn more about Frankfurter →
              </a>
            </div>
          </div>
        </div>

        {/* Mid-content Ad */}
        <div className="max-w-4xl mx-auto mt-12">
          <AdInContent slot="converter-mid" />
        </div>

        {/* FAQ Section */}
        <div className="max-w-3xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                How accurate are the exchange rates?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Our exchange rates are sourced directly from the Frankfurter API, which uses data from the European Central Bank. 
                Rates are updated regularly throughout the day for maximum accuracy.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                How often are rates updated?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Exchange rates are fetched in real-time from the API every time you make a conversion or change currencies.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Is CurrencyFlow free to use?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                Yes, CurrencyFlow is completely free to use. We provide real-time currency conversion at no cost.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                Which currencies are supported?
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-sm">
                We support 150+ currencies including all major currencies like USD, EUR, GBP, JPY, INR, AUD, CAD, and many more.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
