import Link from 'next/link';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
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
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <header>
          <Link href="/">
            <span>AI-Reformen</span>
          </Link>
          <nav>
            <Link href="/om-oss">Om oss</Link>
            <Link href="/fragor-och-svar">Frågor och svar</Link>
            <Link href="/ai-resurser">AI-resurser</Link>
            <Link href="/press">Press</Link>
          </nav>
        </header>
        <main id="main">{children}</main>
        <footer>
          <p>
            <span>AI-Reformen</span>
            <span>2025</span>
          </p>
        </footer>
      </body>
    </html>
  );
}
