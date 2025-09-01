import type { Metadata } from 'next';
import { Work_Sans } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/theme';
import { GoogleAnalytics } from '@next/third-parties/google';

const workSans = Work_Sans({
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-work-sans',
});

export const metadata: Metadata = {
  title: 'Planton Cloud',
  description: 'Planton Cloud',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-screen">
      {process.env.NODE_ENV === 'production' && <GoogleAnalytics gaId="G-VWZNWQPEJ0" />}

      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200&display=optional"
        />
      </head>
      <body className={`${workSans.variable} antialiased h-screen bg-cover bg-center bg-black`}>
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
