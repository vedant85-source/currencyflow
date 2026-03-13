'use client';

import { useState, useRef, useEffect } from 'react';
import { currencies } from '@/data/currencies';
import { cn } from '@/lib/utils';

interface CurrencySelectorProps {
  value: string;
  onChange: (currency: string) => void;
  label?: string;
  className?: string;
}

export const CurrencySelector: React.FC<CurrencySelectorProps> = ({
  value,
  onChange,
  label,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [search, setSearch] = useState('');
  const dropdownRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  
  const selectedCurrency = currencies.find(c => c.code === value);
  
  const filteredCurrencies = currencies.filter(
    c =>
      c.code.toLowerCase().includes(search.toLowerCase()) ||
      c.name.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
        setSearch('');
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const handleSelect = (code: string) => {
    onChange(code);
    setIsOpen(false);
    setSearch('');
  };

  return (
    <div className={cn('relative', className)} ref={dropdownRef}>
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
          {label}
        </label>
      )}
      
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'w-full flex items-center gap-3 px-4 py-3',
          'bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-600',
          'rounded-lg hover:border-primary-500 dark:hover:border-primary-400',
          'transition-colors duration-200',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent'
        )}
      >
        <span className="text-2xl">{selectedCurrency?.flag}</span>
        <div className="flex-1 text-left">
          <span className="font-semibold text-gray-900 dark:text-white">{value}</span>
          <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
            {selectedCurrency?.name}
          </span>
        </div>
        <svg
          className={cn(
            'w-5 h-5 text-gray-400 transition-transform duration-200',
            isOpen && 'transform rotate-180'
          )}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </button>

      {isOpen && (
        <div
          className={cn(
            'absolute z-50 w-full mt-1',
            'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700',
            'rounded-lg shadow-lg overflow-hidden'
          )}
        >
          <div className="p-2 border-b border-gray-200 dark:border-gray-700">
            <div className="relative">
              <input
                ref={inputRef}
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search currency..."
                className={cn(
                  'w-full pl-9 pr-4 py-2',
                  'bg-gray-100 dark:bg-gray-700 border-0 rounded-md',
                  'text-gray-900 dark:text-white placeholder-gray-500',
                  'focus:outline-none focus:ring-2 focus:ring-primary-500'
                )}
              />
              <svg
                className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
          </div>
          
          <div className="max-h-60 overflow-y-auto">
            {filteredCurrencies.length === 0 ? (
              <div className="px-4 py-3 text-gray-500 dark:text-gray-400 text-center">
                No currencies found
              </div>
            ) : (
              filteredCurrencies.map((currency) => (
                <button
                  key={currency.code}
                  type="button"
                  onClick={() => handleSelect(currency.code)}
                  className={cn(
                    'w-full flex items-center gap-3 px-4 py-2.5',
                    'hover:bg-gray-100 dark:hover:bg-gray-700',
                    'transition-colors duration-150',
                    value === currency.code && 'bg-primary-50 dark:bg-primary-900/20'
                  )}
                >
                  <span className="text-xl">{currency.flag}</span>
                  <div className="flex-1 text-left">
                    <span className={cn(
                      'font-medium',
                      value === currency.code
                        ? 'text-primary-600 dark:text-primary-400'
                        : 'text-gray-900 dark:text-white'
                    )}>
                      {currency.code}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm ml-2">
                      {currency.name}
                    </span>
                  </div>
                  {value === currency.code && (
                    <svg
                      className="w-5 h-5 text-primary-600 dark:text-primary-400"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  )}
                </button>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CurrencySelector;
