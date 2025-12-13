import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

export const metadata: Metadata = {
  title: 'Investor Deck - Planton Cloud',
  description:
    'Seed round investor deck for Planton Cloud - DevOps in a Box platform',
};

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function InvestorDeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={`isolate ${inter.className}`}>{children}</div>;
}
