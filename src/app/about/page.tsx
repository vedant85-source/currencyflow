import { Metadata } from 'next';
import { AdBanner } from '@/components/ads/AdBanner';
import { StructuredData } from '@/components/seo/StructuredData';

export const metadata: Metadata = {
  title: 'About Us – CurrencyFlow',
  description: 'Learn about CurrencyFlow, your trusted source for real-time currency conversion and exchange rate information.',
  alternates: {
    canonical: 'https://currencyflow.vercel.app/about/',
  },
};

export default function AboutPage() {
  return (
    <>
      <StructuredData type="organization" />

      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-gray-900 dark:via-primary-950 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            About CurrencyFlow
          </h1>
          <p className="text-primary-100 text-center max-w-2xl mx-auto">
            Your trusted source for real-time currency conversion and exchange rate information.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AdBanner slot="about-top" className="w-full mb-12" />

        <div className="prose dark:prose-invert max-w-none">
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              At CurrencyFlow, our mission is to make currency conversion simple, accurate, and accessible 
              to everyone. Whether you&apos;re a traveler planning your next trip, a business owner managing 
              international transactions, or simply curious about exchange rates, we provide the tools 
              and information you need.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe that everyone deserves access to reliable financial information, which is why 
              our currency converter is completely free to use. No registration required, no hidden fees—just 
              accurate exchange rates when you need them.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              What We Offer
            </h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Real-Time Conversion
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Convert between 150+ currencies with up-to-date exchange rates updated throughout the day.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-accent-100 dark:bg-accent-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-accent-600 dark:text-accent-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Historical Charts
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Track exchange rate trends over time with our interactive charts and make informed decisions.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Accurate Data
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Our exchange rates are sourced from reliable financial data providers for maximum accuracy.
                </p>
              </div>

              <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-sm">
                <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  Mobile Friendly
                </h3>
                <p className="text-gray-600 dark:text-gray-300 text-sm">
                  Access CurrencyFlow on any device. Our responsive design works perfectly on desktop, tablet, and mobile.
                </p>
              </div>
            </div>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Our Data Sources
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              CurrencyFlow uses data from reputable financial institutions and market data providers. 
              Our exchange rates are updated regularly to ensure accuracy and reliability.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              Please note that while we strive to provide the most accurate information possible, 
              exchange rates can vary between providers. Rates shown on CurrencyFlow are for informational 
              purposes and may differ from rates offered by banks, currency exchanges, or other financial institutions.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              We&apos;d love to hear from you! If you have questions, feedback, or suggestions, 
              please don&apos;t hesitate to reach out to us.
            </p>
            <a
              href="/contact/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-600 hover:bg-primary-700 text-white font-medium rounded-lg transition-colors"
            >
              Contact Us
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </section>
        </div>
      </div>
    </>
  );
}
