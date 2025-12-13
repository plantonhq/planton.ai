import { Metadata } from 'next';
import './investor-deck.css';

export const metadata: Metadata = {
  title: 'Planton Cloud - Investor Deck',
  description: 'Building India\'s second globally loved developer tool',
  openGraph: {
    title: 'Planton Cloud - Investor Deck',
    description: 'DevOps automation for every software company, from India to the world',
    type: 'website',
  },
};

export default function InvestorDeckLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
