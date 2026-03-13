import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy – CurrencyFlow',
  description: 'Read CurrencyFlow\'s privacy policy to understand how we handle your data.',
  alternates: {
    canonical: 'https://currencyflow.vercel.app/privacy/',
  },
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
        Privacy Policy
      </h1>

      <div className="prose dark:prose-invert max-w-none">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Last updated: {new Date().toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
        </p>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Introduction
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            CurrencyFlow (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
            This Privacy Policy explains how we collect, use, disclose, and safeguard your information 
            when you visit our website.
          </p>
          <p className="text-gray-600 dark:text-gray-300">
            Please read this privacy policy carefully. If you do not agree with the terms of this 
            privacy policy, please do not access the site.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Information We Collect
          </h2>
          
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Personal Data
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We do not require you to provide any personal information to use our currency converter. 
            However, if you contact us, we may collect:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>Email address</li>
            <li>Name (if provided)</li>
            <li>Any information you choose to include in your message</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Usage Data
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We may collect information about how you access and use our website, including:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>IP address</li>
            <li>Browser type and version</li>
            <li>Pages you visit</li>
            <li>Time and date of your visit</li>
            <li>Time spent on pages</li>
            <li>Device information</li>
          </ul>

          <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
            Cookies and Local Storage
          </h3>
          <p className="text-gray-600 dark:text-gray-300">
            We use cookies and browser local storage to enhance your experience. This includes 
            storing your theme preference (light/dark mode) and recent conversion history. 
            You can disable cookies in your browser settings, but this may affect some features.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            How We Use Your Information
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use the information we collect to:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>Provide and maintain our service</li>
            <li>Improve user experience</li>
            <li>Analyze usage patterns and trends</li>
            <li>Respond to your inquiries</li>
            <li>Detect and prevent technical issues</li>
          </ul>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Third-Party Services
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            We use third-party services that may collect information:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li><strong>Google Analytics:</strong> For website analytics and usage statistics</li>
            <li><strong>Google AdSense:</strong> For displaying advertisements (if enabled)</li>
            <li><strong>Exchange Rate APIs:</strong> For fetching current exchange rate data</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300">
            These third parties have their own privacy policies. We encourage you to review them.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Data Security
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We implement appropriate technical and organizational measures to protect your information. 
            However, no method of transmission over the Internet is 100% secure, and we cannot guarantee 
            absolute security.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Your Rights
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Depending on your location, you may have the right to:
          </p>
          <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2 mb-4">
            <li>Access your personal data</li>
            <li>Correct inaccurate data</li>
            <li>Request deletion of your data</li>
            <li>Object to data processing</li>
            <li>Data portability</li>
          </ul>
          <p className="text-gray-600 dark:text-gray-300">
            To exercise these rights, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Children&apos;s Privacy
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            Our service is not intended for use by children under the age of 13. We do not knowingly 
            collect personal information from children under 13. If you become aware that a child 
            has provided us with personal information, please contact us.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Changes to This Policy
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            We may update our Privacy Policy from time to time. We will notify you of any changes 
            by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 dark:text-gray-300">
            If you have any questions about this Privacy Policy, please contact us through our{' '}
            <a href="/contact/" className="text-primary-600 dark:text-primary-400 hover:underline">
              contact page
            </a>.
          </p>
        </section>
      </div>
    </div>
  );
}
