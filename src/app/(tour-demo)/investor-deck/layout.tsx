import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './investor-deck.css';

export const metadata: Metadata = {
  title: 'Investor Deck - Planton Cloud',
  description:
    'Planton Cloud Seed Stage Investment Deck - DevOps in a Box',
};

const inter = Inter({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
});

export default function InvestorDeckLayout({ children }: { children: React.ReactNode }) {
  return <div className={`isolate ${inter.className}`}>{children}</div>;
}
