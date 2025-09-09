import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './demo.css';

export const metadata: Metadata = {
  title: 'Platform Demo - Planton Cloud',
  description:
    'Interactive demo showcasing Planton Cloud DevOps platform features and capabilities',
};

const inter = Inter({
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
});

export default function DemoLayout({ children }: { children: React.ReactNode }) {
  return <div className={`isolate ${inter.className}`}>{children}</div>;
}
