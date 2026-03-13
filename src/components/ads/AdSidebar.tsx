'use client';

import { cn } from '@/lib/utils';

interface AdSidebarProps {
  slot: string;
  className?: string;
}

export const AdSidebar: React.FC<AdSidebarProps> = ({ 
  slot, 
  className 
}) => {
  return (
    <div 
      className={cn(
        'ad-sidebar bg-gray-100 dark:bg-gray-800 rounded-lg flex flex-col items-center justify-center overflow-hidden',
        'w-full max-w-[300px] min-h-[600px]',
        className
      )}
    >
      {/* AdSense placeholder */}
      <div className="ad-placeholder text-center p-4 w-full h-full">
        <p className="text-xs text-gray-400 uppercase tracking-wider">Advertisement</p>
        <div className="mt-2 bg-gray-200 dark:bg-gray-700 rounded flex items-center justify-center w-full flex-1 min-h-[550px]">
          <span className="text-gray-400 text-sm">Google AdSense<br/>300x600</span>
        </div>
      </div>
      
      {/* Actual AdSense code - uncomment when AdSense is set up */}
      {/*
      <ins
        className="adsbygoogle"
        style={{ display: 'block', width: '300px', height: '600px' }}
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

export default AdSidebar;
