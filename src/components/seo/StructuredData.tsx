'use client';

import Head from 'next/head';

interface StructuredDataProps {
  type: 'website' | 'organization' | 'currencyConverter' | 'blogPosting' | 'faq';
  data?: Record<string, any>;
}

export const StructuredData: React.FC<StructuredDataProps> = ({ type, data = {} }) => {
  const getStructuredData = () => {
    const baseUrl = 'https://currencyflow.vercel.app';
    
    switch (type) {
      case 'website':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebSite',
          name: 'CurrencyFlow',
          url: baseUrl,
          description: 'Real-time global currency converter with live exchange rates and historical charts.',
          potentialAction: {
            '@type': 'SearchAction',
            target: `${baseUrl}/search?q={search_term_string}`,
            'query-input': 'required name=search_term_string',
          },
        };
        
      case 'organization':
        return {
          '@context': 'https://schema.org',
          '@type': 'Organization',
          name: 'CurrencyFlow',
          url: baseUrl,
          logo: `${baseUrl}/logo.png`,
          description: 'Free online currency converter with real-time exchange rates.',
          sameAs: [
            'https://twitter.com/currencyflow',
            'https://facebook.com/currencyflow',
          ],
        };
        
      case 'currencyConverter':
        return {
          '@context': 'https://schema.org',
          '@type': 'WebApplication',
          name: `Currency Converter - ${data.from || 'USD'} to ${data.to || 'EUR'}`,
          applicationCategory: 'FinanceApplication',
          operatingSystem: 'Any',
          offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'USD',
          },
          description: `Convert ${data.from || 'USD'} to ${data.to || 'EUR'} with live exchange rates.`,
          url: `${baseUrl}/${(data.from || 'usd').toLowerCase()}-to-${(data.to || 'eur').toLowerCase()}`,
        };
        
      case 'blogPosting':
        return {
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: data.title,
          description: data.excerpt,
          author: {
            '@type': 'Organization',
            name: 'CurrencyFlow Team',
          },
          datePublished: data.date,
          dateModified: data.date,
          publisher: {
            '@type': 'Organization',
            name: 'CurrencyFlow',
            logo: {
              '@type': 'ImageObject',
              url: `${baseUrl}/logo.png`,
            },
          },
          mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/blog/${data.slug}`,
          },
        };
        
      case 'faq':
        return {
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: data.questions?.map((q: any) => ({
            '@type': 'Question',
            name: q.question,
            acceptedAnswer: {
              '@type': 'Answer',
              text: q.answer,
            },
          })) || [],
        };
        
      default:
        return {};
    }
  };

  const structuredData = getStructuredData();
  
  if (Object.keys(structuredData).length === 0) return null;

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
    </Head>
  );
};

export default StructuredData;
