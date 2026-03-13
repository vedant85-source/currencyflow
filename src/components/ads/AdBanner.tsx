'use client';

import { cn } from '@/lib/utils';

interface AdBannerProps {
  slot: string;
  className?: string;
  style?: React.CSSProperties;
}

export const AdBanner: React.FC<AdBannerProps> = ({ 
  slot, 
  className,
  style 
}) => {
  return (
    <div 
      className={cn(
        'ad-container bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden',
        className
      )}
      style={style}
    >
      {/* AdSense placeholder */}
      <div className="ad-placeholder text-center p-4">
        <p className="text-xs text-gray-400 uppercase tracking-wider">Advertisement</p>
        <div 
          className="mt-2 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center"
          style={{ width: '100%', height: 'calc(100% - 30px)', minHeight: '90px' }}
        >
          <span className="text-gray-400 text-sm">Google AdSense</span>
        </div>
      </div>
      
      {/* Actual AdSense code - uncomment when AdSense is set up */}
      {/*
      <ins
        className="adsbygoogle"
        style={{ display: 'block', ...style }}
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
        data-ad-format="auto"
        data-full-width-responsive="true"
      />
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      */}
    </div>
  );
};

export default AdBanner;
