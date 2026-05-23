import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#000000] text-[#ffffff] font-sans flex flex-col items-center justify-center px-6">
      <div className="max-w-[600px] w-full border border-[#5e5e5e] rounded-[2px] bg-[#1a1a1a] p-8 md:p-12 relative flex flex-col items-start shadow-2xl">
        <div className="absolute top-0 left-0 w-full h-[4px] bg-[#76b900]" />
        
        <h1 className="text-[64px] md:text-[80px] font-bold leading-[1] tracking-tighter text-[#76b900] mb-4">
          404
        </h1>
        
        <h2 className="text-[24px] md:text-[32px] font-bold leading-[1.25] text-[#ffffff] mb-4">
          Page Not Found
        </h2>
        
        <p className="text-[16px] leading-[1.67] text-[rgba(255,255,255,0.7)] mb-8 max-w-[400px]">
          The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
        </p>

        <Link
          href="/"
          className="bg-[#76b900] text-[#ffffff] hover:bg-[#5a8d00] font-bold text-[16px] leading-[1.25] px-[24px] py-[11px] h-[44px] rounded-[2px] inline-flex items-center justify-center transition-colors border border-[#76b900]"
        >
          <ArrowLeft className="mr-2 h-4 w-4" />
          Return Home
        </Link>
      </div>
    </div>
  );
}
