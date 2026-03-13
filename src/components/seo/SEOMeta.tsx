'use client';

import Head from 'next/head';
import { SEOMeta as SEOMetaType } from '@/types';

interface SEOMetaProps extends SEOMetaType {
  children?: React.ReactNode;
}

export const SEOMeta: React.FC<SEOMetaProps> = ({
  title,
  description,
  keywords = [],
  ogImage = 'https://currencyflow.vercel.app/og-image.jpg',
  canonical,
  children,
}) => {
  const siteName = 'CurrencyFlow';
  const fullTitle = title.includes(siteName) ? title : `${title} | ${siteName}`;
  const defaultKeywords = [
    'currency converter',
    'exchange rates',
    'forex',
    'money conversion',
    'live rates',
    'currency exchange',
  ];
  const allKeywords = [...defaultKeywords, ...keywords];

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={allKeywords.join(', ')} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />
      
      {/* Canonical URL */}
      {canonical && <link rel="canonical" href={canonical} />}
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      {canonical && <meta property="og:url" content={canonical} />}
      <meta property="og:image" content={ogImage} />
      
      {/* Twitter Card */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
      
      {/* Favicon */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      
      {/* Theme Color */}
      <meta name="theme-color" content="#1e40af" />
      
      {children}
    </Head>
  );
};

export default SEOMeta;
