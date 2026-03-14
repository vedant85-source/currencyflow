import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  verification: { google: 'rJmZOgAbc9n6NyN0xbLh5XolVdA2dH1FgNKoUwKFleo' },
  title: 'CurrencyFlow – Real-Time Global Currency Converter',
  description: 'Convert currencies instantly with live exchange rates. View historical trends, interactive charts, and currency information on CurrencyFlow.',
  keywords: ['currency converter', 'exchange rates', 'forex', 'money conversion', 'live rates', 'currency exchange'],
  authors: [{ name: 'CurrencyFlow' }],
  creator: 'CurrencyFlow',
  publisher: 'CurrencyFlow',
  robots: 'index, follow',
  openGraph: {
    title: 'CurrencyFlow – Real-Time Global Currency Converter',
    description: 'Convert currencies instantly with live exchange rates. View historical trends and interactive charts.',
    type: 'website',
    locale: 'en_US',
    siteName: 'CurrencyFlow',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'CurrencyFlow – Real-Time Global Currency Converter',
    description: 'Convert currencies instantly with live exchange rates.',
  },
  viewport: 'width=device-width, initial-scale=1',
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.className} min-h-screen bg-gray-50 dark:bg-gray-950`}>
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
