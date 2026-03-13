# CurrencyFlow

A modern, production-ready currency converter web application built with Next.js, TypeScript, and Tailwind CSS.

![CurrencyFlow Screenshot](screenshot.png)

## Features

- **Real-time Currency Conversion**: Convert between 150+ currencies with live exchange rates
- **Historical Charts**: Track exchange rate trends with interactive charts
- **Programmatic SEO**: Auto-generated pages for thousands of currency pairs
- **Dark Mode**: Full dark mode support with system preference detection
- **Mobile Responsive**: Optimized for all devices
- **Fast Performance**: Built with Next.js for optimal loading speeds
- **AdSense Ready**: Pre-configured ad placements for monetization
- **Conversion History**: Save recent conversions to local storage

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Charts**: Recharts
- **Icons**: Lucide React
- **API**: Frankfurter API (free exchange rate data)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/currencyflow.git
cd currencyflow
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Import your repository on [Vercel](https://vercel.com)
3. Deploy with one click

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

### Environment Variables

Create a `.env.local` file for local development:

```env
# Optional: Add your own exchange rate API key
# EXCHANGE_RATE_API_KEY=your_api_key
```

## Project Structure

```
src/
├── app/                    # Next.js app router pages
│   ├── [pair]/            # Dynamic currency pair pages
│   ├── blog/              # Blog pages
│   ├── about/             # About page
│   ├── contact/           # Contact page
│   ├── converter/         # Main converter page
│   ├── charts/            # Historical charts page
│   ├── privacy/           # Privacy policy
│   ├── terms/             # Terms of service
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # React components
│   ├── ads/              # AdSense placeholder components
│   ├── charts/           # Chart components
│   ├── converter/        # Converter components
│   ├── seo/              # SEO components
│   ├── Header.tsx        # Navigation header
│   └── Footer.tsx        # Footer
├── data/                 # Static data
│   ├── currencies.ts     # Currency definitions
│   ├── popularPairs.ts   # Popular currency pairs
│   └── blogPosts.ts      # Blog content
├── hooks/                # Custom React hooks
│   ├── useCurrency.ts    # Currency conversion hook
│   ├── useHistory.ts     # Conversion history hook
│   ├── useRates.ts       # Exchange rates hook
│   └── useTheme.ts       # Dark mode hook
├── lib/                  # Utility functions
│   ├── api.ts            # API integration
│   └── utils.ts          # Helper functions
└── types/                # TypeScript types
    └── index.ts          # Type definitions
```

## SEO Features

- **Dynamic Meta Tags**: Each page has unique title and description
- **Open Graph**: Social media preview cards
- **Structured Data**: JSON-LD schema markup
- **Canonical URLs**: Prevents duplicate content issues
- **Sitemap**: Auto-generated for search engines
- **Programmatic Pages**: Thousands of currency pair pages for long-tail SEO

## Adding Google AdSense

1. Sign up for [Google AdSense](https://www.google.com/adsense)
2. Get your publisher ID (`ca-pub-XXXXXXXXXXXXXXXX`)
3. Update the ad components in `src/components/ads/`
4. Uncomment the AdSense code and replace with your publisher ID
5. Add AdSense verification meta tag to `src/app/layout.tsx`

Example:
```tsx
// In src/components/ads/AdBanner.tsx
<ins
  className="adsbygoogle"
  style={{ display: 'block' }}
  data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
  data-ad-slot="1234567890"
  data-ad-format="auto"
  data-full-width-responsive="true"
/>
```

## Custom Domain

To use a custom domain with Vercel:

1. Buy a domain from a registrar (Namecheap, GoDaddy, etc.)
2. Go to your Vercel project settings
3. Add your custom domain
4. Update DNS records as instructed by Vercel
5. Wait for SSL certificate to be issued

## API Rate Limits

The free Frankfurter API has the following limits:
- No authentication required
- Fair use policy applies
- For high-volume usage, consider caching responses

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```ts
colors: {
  primary: {
    // Your brand colors
  },
  accent: {
    // Your accent colors
  },
}
```

### Currencies

Add or remove currencies in `src/data/currencies.ts`:

```ts
export const currencies: Currency[] = [
  { code: 'USD', name: 'US Dollar', symbol: '$', flag: '🇺🇸' },
  // Add your currencies here
];
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Disclaimer

Exchange rates provided by CurrencyFlow are for informational purposes only. They may not reflect the exact rates offered by banks, currency exchanges, or other financial institutions. Always verify rates with your financial provider before making transactions.

## Support

For support, email support@currencyflow.app or open an issue on GitHub.

---

Built with ❤️ by the CurrencyFlow Team
