'use client';

import { cn } from '@/lib/utils';

interface AdInContentProps {
  slot: string;
  className?: string;
}

export const AdInContent: React.FC<AdInContentProps> = ({ 
  slot, 
  className 
}) => {
  return (
    <div 
      className={cn(
        'ad-in-content my-8 bg-gray-100 dark:bg-gray-800 rounded-lg flex items-center justify-center overflow-hidden',
        'w-full min-h-[250px]',
        className
      )}
    >
      {/* AdSense placeholder */}
      <div className="ad-placeholder text-center p-4 w-full">
        <p className="text-xs text-gray-400 uppercase tracking-wider">Advertisement</p>
        <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center w-full min-h-[200px]">
          <span className="text-gray-400 text-sm">Google AdSense<br/>Responsive</span>
        </div>
      </div>
      
      {/* Actual AdSense code - uncomment when AdSense is set up */}
      {/*
      <ins
        className="adsbygoogle"
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-XXXXXXXXXXXXXXXX"
        data-ad-slot={slot}
      />
      <script>
        (adsbygoogle = window.adsbygoogle || []).push({});
      </script>
      */}
    </div>
  );
};

export default AdInContent;
