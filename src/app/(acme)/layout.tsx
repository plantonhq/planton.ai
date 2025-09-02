import { Manrope } from 'next/font/google';
import SiteHeader from '@/components/acme/SiteHeader';
import SiteFooter from '@/components/acme/SiteFooter';
import './acme.css';
import { HeaderLogo } from '@/components/layout/header/header';

const manrope = Manrope({
  weight: ['400', '500', '600', '700', '800'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
});

export default function AcmeLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className={`${manrope.variable} relative`}>
      <HeaderLogo className="fixed top-[23px] left-8 z-50" />
      <SiteHeader />
      <main>{children}</main>
      <SiteFooter />
    </div>
  );
}
