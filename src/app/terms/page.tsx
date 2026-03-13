import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service – CurrencyFlow',
  description: 'Read CurrencyFlow\'s terms of service to understand the rules and regulations for using our website.',
  alternates: {
    canonical: 'https://currencyflow.vercel.app/terms/',
  },
};

export default function TermsPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Terms of Service
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Agreement to Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            By accessing or using CurrencyFlow (&quot;the Service&quot;), you agree to be bound by these 
            Terms of Service. If you disagree with any part of the terms, you may not access the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Description of Service
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            CurrencyFlow is a free online currency converter that provides real-time exchange rates 
            and historical data. Our service includes:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>Currency conversion between 150+ currencies</li>
            <li>Historical exchange rate charts</li>
            <li>Currency information and market data</li>
            <li>Educational content about currency exchange</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Accuracy of Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            While we strive to provide accurate and up-to-date information, we make no representations 
            or warranties of any kind about the completeness, accuracy, reliability, suitability, or 
            availability of the exchange rates or related information.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            <strong>Important Disclaimer:</strong> Exchange rates displayed on CurrencyFlow are for 
            informational purposes only. They may not reflect the exact rates offered by banks, 
            currency exchanges, or other financial institutions. Always verify rates with your 
            financial provider before making any transactions.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Use of the Service
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            You agree to use the Service only for lawful purposes and in accordance with these Terms. 
            You agree not to:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>Use the Service in any way that violates applicable laws or regulations</li>
            <li>Attempt to interfere with the proper working of the Service</li>
            <li>Access or use the Service through automated means without our permission</li>
            <li>Copy, modify, or create derivative works based on the Service</li>
            <li>Use the Service for any commercial purpose without our consent</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Intellectual Property
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            The Service and its original content, features, and functionality are owned by CurrencyFlow 
            and are protected by international copyright, trademark, patent, trade secret, and other 
            intellectual property laws.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            You may not reproduce, distribute, modify, create derivative works of, publicly display, 
            publicly perform, republish, download, store, or transmit any of the material on our Service, 
            except as generally permitted by the functionality of the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Third-Party Links
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our Service may contain links to third-party websites or services that are not owned or 
            controlled by CurrencyFlow. We have no control over and assume no responsibility for the 
            content, privacy policies, or practices of any third-party websites or services.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Disclaimer of Warranties
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            THE SERVICE IS PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS. CURRENCYFLOW MAKES NO 
            WARRANTIES, EXPRESSED OR IMPLIED, AND HEREBY DISCLAIMS ALL WARRANTIES, INCLUDING WITHOUT 
            LIMITATION:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT</li>
            <li>WARRANTIES THAT THE SERVICE WILL BE UNINTERRUPTED, TIMELY, SECURE, OR ERROR-FREE</li>
            <li>WARRANTIES REGARDING THE ACCURACY OR RELIABILITY OF EXCHANGE RATES</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Limitation of Liability
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            IN NO EVENT SHALL CURRENCYFLOW, ITS DIRECTORS, EMPLOYEES, PARTNERS, AGENTS, SUPPLIERS, 
            OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
            DAMAGES, INCLUDING WITHOUT LIMITATION, LOSS OF PROFITS, DATA, USE, GOODWILL, OR OTHER 
            INTANGIBLE LOSSES, RESULTING FROM:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>YOUR ACCESS TO OR USE OF OR INABILITY TO ACCESS OR USE THE SERVICE</li>
            <li>ANY CONDUCT OR CONTENT OF ANY THIRD PARTY ON THE SERVICE</li>
            <li>ANY CONTENT OBTAINED FROM THE SERVICE</li>
            <li>UNAUTHORIZED ACCESS, USE, OR ALTERATION OF YOUR TRANSMISSIONS OR CONTENT</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Indemnification
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            You agree to defend, indemnify, and hold harmless CurrencyFlow and its licensees and licensors, 
            and their employees, contractors, agents, officers, and directors, from and against any and all 
            claims, damages, obligations, losses, liabilities, costs or debt, and expenses arising from your 
            use of the Service.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Termination
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may terminate or suspend your access to the Service immediately, without prior notice or 
            liability, for any reason whatsoever, including without limitation if you breach the Terms.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Governing Law
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            These Terms shall be governed and construed in accordance with the laws, without regard to 
            its conflict of law provisions. Our failure to enforce any right or provision of these Terms 
            will not be considered a waiver of those rights.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Changes to Terms
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We reserve the right, at our sole discretion, to modify or replace these Terms at any time. 
            We will provide notice of any changes by posting the new Terms on this page and updating the 
            &quot;Last updated&quot; date. Your continued use of the Service after any changes constitutes acceptance 
            of the new Terms.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about these Terms, please contact us through our{' '}
            <a href="/contact/" className="text-primary-600 dark:text-primary-400 hover:underline">
              contact page
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
