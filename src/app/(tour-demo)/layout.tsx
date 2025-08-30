'use client';
import { HeaderLogo } from '@/components/layout/header/header';

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <HeaderLogo className="absolute top-6 left-6 z-[9999]" />
      {children}
    </div>
  );
}
