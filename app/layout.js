import { Mulish, Cormorant_Garamond, Alex_Brush } from 'next/font/google';
import './globals.css';

const mulish = Mulish({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-mulish',
  display: 'swap',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-cormorant',
  display: 'swap',
});

const alexBrush = Alex_Brush({
  subsets: ['latin'],
  weight: ['400'],
  variable: '--font-alex-brush',
  display: 'swap',
});

export const metadata = {
  title: 'Dr. Maya Reynolds | Licensed Clinical Psychologist',
  description: 'Evidence-based therapy, counseling, and mental health support.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mulish.variable} ${cormorant.variable} ${alexBrush.variable}`}>
      <body suppressHydrationWarning className="font-sans antialiased bg-fog text-ink">
        {children}
      </body>
    </html>
  );
}