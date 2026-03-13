import { Metadata } from 'next';
import Link from 'next/link';
import { getAllPosts } from '@/data/blogPosts';
import { AdBanner } from '@/components/ads/AdBanner';
import { cn } from '@/lib/utils';

export const metadata: Metadata = {
  title: 'Blog – Currency Exchange Insights & Tips',
  description: 'Learn about currency exchange, forex markets, and money conversion tips. Expert insights and guides on CurrencyFlow blog.',
  alternates: {
    canonical: 'https://currencyflow.vercel.app/blog/',
  },
};

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <>
      <div className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 dark:from-gray-900 dark:via-primary-950 dark:to-gray-900 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
            CurrencyFlow Blog
          </h1>
          <p className="text-primary-100 text-center max-w-2xl mx-auto">
            Expert insights on currency exchange, forex markets, and money conversion tips.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Top Ad */}
        <div className="max-w-4xl mx-auto mb-12">
          <AdBanner slot="blog-top" className="w-full" />
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {posts.map((post) => (
            <article
              key={post.slug}
              className={cn(
                'bg-white dark:bg-gray-800 rounded-2xl shadow-lg overflow-hidden',
                'hover:shadow-xl transition-shadow duration-300'
              )}
            >
              <div className="p-6">
                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs font-medium bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 line-clamp-2">
                  <Link
                    href={`/blog/${post.slug}/`}
                    className="hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                  >
                    {post.title}
                  </Link>
                </h2>

                {/* Excerpt */}
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Meta */}
                <div className="flex items-center justify-between text-sm text-gray-500 dark:text-gray-400">
                  <span>{post.author}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-US', { 
                    month: 'short', 
                    day: 'numeric', 
                    year: 'numeric' 
                  })}</span>
                </div>
              </div>

              {/* Read More */}
              <div className="px-6 pb-6">
                <Link
                  href={`/blog/${post.slug}/`}
                  className={cn(
                    'inline-flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium',
                    'hover:text-primary-700 dark:hover:text-primary-300 transition-colors'
                  )}
                >
                  Read More
                  <svg
                    className="w-4 h-4"
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
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Topics Section */}
        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white text-center mb-8">
            Browse by Topic
          </h2>
          
          <div className="flex flex-wrap justify-center gap-3">
            {['exchange rates', 'forex', 'education', 'tips', 'analysis', 'history'].map((topic) => (
              <a
                key={topic}
                href={`/blog/tag/${topic}/`}
                className={cn(
                  'px-4 py-2 bg-white dark:bg-gray-800 rounded-full',
                  'border border-gray-200 dark:border-gray-700',
                  'text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400',
                  'hover:border-primary-300 dark:hover:border-primary-700',
                  'transition-all duration-200'
                )}
              >
                {topic.charAt(0).toUpperCase() + topic.slice(1)}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
