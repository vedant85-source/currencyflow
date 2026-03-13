'use client';

import { useHistory } from '@/hooks/useHistory';
import { formatCurrency, formatTimestamp } from '@/lib/utils';
import { cn } from '@/lib/utils';

interface ConversionHistoryProps {
  className?: string;
}

export const ConversionHistory: React.FC<ConversionHistoryProps> = ({ className }) => {
  const { history, clearHistory } = useHistory();

  if (history.length === 0) {
    return null;
  }

  return (
    <div
      className={cn(
        'bg-white dark:bg-gray-800 rounded-2xl shadow-lg',
        'p-6',
        className
      )}
    >
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
          Recent Conversions
        </h3>
        <button
          onClick={clearHistory}
          className={cn(
            'text-sm text-red-500 hover:text-red-600',
            'transition-colors duration-200'
          )}
        >
          Clear
        </button>
      </div>

      <div className="space-y-3">
        {history.map((item) => (
          <div
            key={item.id}
            className={cn(
              'flex items-center justify-between',
              'p-3 bg-gray-50 dark:bg-gray-700 rounded-lg',
              'hover:bg-gray-100 dark:hover:bg-gray-600',
              'transition-colors duration-200'
            )}
          >
            <div className="flex-1">
              <div className="flex items-center gap-2 text-sm">
                <span className="font-medium text-gray-900 dark:text-white">
                  {formatCurrency(item.amount, item.from)}
                </span>
                <svg
                  className="w-4 h-4 text-gray-400"
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
                <span className="font-medium text-primary-600 dark:text-primary-400">
                  {formatCurrency(item.result, item.to)}
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Rate: 1 {item.from} = {item.rate.toFixed(4)} {item.to}
              </p>
            </div>
            <span className="text-xs text-gray-400 dark:text-gray-500">
              {formatTimestamp(item.timestamp)}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ConversionHistory;
