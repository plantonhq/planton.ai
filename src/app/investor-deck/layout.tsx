import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Investor Deck - Planton Cloud',
  description:
    'Seed stage investor deck for Planton Cloud - Vercel for Backend Infrastructure',
};

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function InvestorDeckLayout({ children }: { children: React.ReactNode }) {
  return <div className={`min-h-screen ${inter.className}`}>{children}</div>;
}
