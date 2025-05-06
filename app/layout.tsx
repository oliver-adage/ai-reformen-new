import type { Metadata } from 'next';
import { Analytics } from '@vercel/analytics/next';
import Link from 'next/link';
import { Gabarito } from 'next/font/google';
import './globals.css';
import Logo from '@/components/Logo';

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
    <html lang="en">
      <body className={`${gabarito.variable} antialiased`}>
        <header className="bg-blue px-5 py-4 md:px-8 md:py-5">
          <div className="flex items-center justify-between">
            <Link className="text-white" href="/">
              <Logo className="h-4 w-auto md:h-6" />
            </Link>
          </div>
        </header>
        <main id="main">{children}</main>
        <footer className="bg-yellow px-5 py-4 md:px-8 md:py-5 flex justify-between items-end">
          <div>
            <p className="text-sm">© AI-Reformen {new Date().getFullYear()}</p>
          </div>
          <p className="text-sm ">
            Byggd av{' '}
            <a href="https://compileit.com" className="underline">
              Compileit
            </a>
          </p>
        </footer>
        <Analytics />
      </body>
    </html>
  );
}
