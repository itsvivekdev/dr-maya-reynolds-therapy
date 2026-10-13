'use client';

import Link from 'next/link';

const NAVIGATE = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'My Office', href: '/my-office' },
  { label: 'FAQs', href: '/faqs' },
  { label: 'Contact', href: '/contact' },
];

const SPECIALTIES = [
  'Anxiety',
  'Panic',
  'Trauma',
  'Complex Trauma',
  'Burnout',
  'Perfectionism',
];

const CONTACT_LINES = [
  '123th Street 45 W',
  'Santa Monica, CA 90401',
];

const LEGAL = ['Terms', 'Privacy Policy', 'Disclaimer'];


const heading = 'mb-4 text-[15px] font-normal uppercase tracking-[0.08em] text-ink';
const link = 'transition-colors duration-300 hover:text-mauve';
const body = 'text-base font-light leading-[27px] text-body';

export default function Footer() {
  return (
    <footer className="font-sans">
     
      <div className="bg-mist">
        <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-12 px-6 py-16 md:grid-cols-2 lg:px-16 xl:grid-cols-[1fr_140px_191px_260px] xl:gap-x-16 xl:pb-36 xl:pl-[92px] xl:pr-[53px] xl:pt-[68px]">
          
          <div>
            <Link href="/" className="mb-6 flex flex-col lg:mb-9">
              <span className="font-serif text-4xl font-light leading-tight text-ink lg:text-[48px]">
                Maya Reynolds
              </span>
              <span className="mt-1 text-[0.8rem] uppercase tracking-[0.35em] text-mauve lg:text-[0.95rem]">
                Clinical Psychology
              </span>
            </Link>
            <p className="max-w-[330px] text-[18px] font-light leading-[1.67] text-body">
              I want to make getting started simple. You’re welcome to visit my office in Santa Monica or meet online from anywhere in California, whichever works best for you.
            </p>
          </div>

        
          <nav aria-label="Footer">
            <h3 className={heading}>Navigate</h3>
            <ul className={`flex flex-col ${body}`}>
              {NAVIGATE.map(({ label, href }) => (
                <li key={label}>
                  <Link href={href} className={link}>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          
          <div>
            <h3 className={heading}>Specialties</h3>
            <ul className={`flex flex-col ${body}`}>
              {SPECIALTIES.map((name) => (
                <li key={name}>
                  <Link href="#" className={link}>
                    {name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="max-w-[260px]">
            <h3 className={heading}>Contact</h3>
            <div className={`flex flex-col gap-4 ${body}`}>
              <address className="not-italic">
                {CONTACT_LINES.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </address>
              <p className="italic">Serving Santa Monica and clients across California, in person and online.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-tide">
        <div className="mx-auto max-w-[1440px] px-6 py-3 text-sm font-light text-mist lg:px-16 xl:pl-[92px]">
          {LEGAL.map((item) => (
            <span key={item}>
              <Link href="#" className="transition-opacity hover:opacity-80">
                {item}
              </Link>
              {' | '}
            </span>
          ))}
          Website by Walker Strategy Co.
        </div>
      </div>
    </footer>
  );
}