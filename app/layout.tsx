import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Link from 'next/link';
import { Gabarito } from 'next/font/google';
import './globals.css';
import Logo from '@/components/Logo';
import GoogleAnalytics from '@/components/GoogleAnalytics';

const gabarito = Gabarito({
  variable: '--font-gabarito-sans',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: {
    template: '%s | AI-Reformen',
    default: 'AI-Reformen',
  },
  description: '',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="sv">
      <head>
        <GoogleAnalytics measurementId="G-LK7F0PZ2PY" />
      </head>
      <body className={`${gabarito.variable} antialiased`}>
        {/* Top blue ribbon with logo + navigation */}
        <header className="bg-blue px-5 py-4 md:px-8 md:py-5">
          <div className="flex items-center justify-between gap-4">
            <Link className="text-white" href="/">
              <Logo className="h-4 w-auto md:h-6" />
            </Link>

            {/* Desktop navigation */}
            <nav className="hidden md:flex items-center gap-6 text-white text-sm md:text-base">
              <Link href="/" className="hover:underline">
                Hem
              </Link>
              <Link href="/om-oss" className="hover:underline">
                Om oss
              </Link>
              <Link href="/nyheter" className="hover:underline">
                Nyheter
              </Link>
              <Link href="/finansiering" className="hover:underline">
                Finansiering
              </Link>
              <Link href="/partners" className="hover:underline">
                Partners
              </Link>
              <Link href="/faq" className="hover:underline">
                FAQ
              </Link>
            </nav>
          </div>
        </header>

        <main id="main">{children}</main>

        <footer className="bg-yellow px-5 py-4 md:px-8 md:py-5 flex justify-between items-end">
          <div>
            <p className="text-sm">© AI-Reformen {new Date().getFullYear()}</p>
          </div>
        </footer>

        <Analytics />
      </body>
    </html>
  );
}
