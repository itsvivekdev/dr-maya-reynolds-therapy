"use client";

import {useState } from "react";
import Link from "next/link";

const NAV_ITEMS = [
  { label: "About", href: "#about" },
  {
    label: "Specialties",
    children: [
      { label: "Anxiety & Panic", href: "#specialties" },
      { label: "Trauma", href: "#specialties" },
      { label: "Burnout & Perfectionism", href: "#specialties" },
    ],
  },
  {
    label: "Methods",
    children: [
      { label: "CBT", href: "#methods" },
      { label: "EMDR", href: "#methods" },
      { label: "Mindfulness", href: "#methods" },
      { label: "Somatic Therapy", href: "#methods" },
    ],
  },
  { label: "Our Office", href: "#office" },
  { label: "FAQs", href: "#faqs" },
];


const linkStyle =
  "whitespace-nowrap text-[12px] uppercase tracking-[0.15em] transition-colors hover:text-mauve";
const dropdownLinkStyle =
  "relative inline-block whitespace-nowrap text-[12px] uppercase tracking-[0.15em] after:absolute after:-bottom-2 after:-left-3 after:-right-3 after:h-px after:bg-ink after:opacity-0 after:transition-opacity after:duration-300 hover:after:opacity-100";

const pillStyle =
  "inline-block rounded-[50%] border border-ink px-6 py-3.5 text-[12px] uppercase tracking-[0.15em] transition-colors duration-300 hover:bg-ink hover:text-fog";


const mobileLinkStyle =
  "flex items-center gap-2 text-left text-2xl uppercase tracking-widest transition-colors hover:text-mauve";

function Logo({ onClick }) {
  return (
    <Link href="/" onClick={onClick} className="flex flex-col">
      <span className="font-serif text-3xl font-light leading-tight lg:text-4xl">
        Maya Reynolds
      </span>
      <span className="mt-1 text-[0.7rem] uppercase tracking-[0.35em] text-mauve">
        Clinical Psychology
      </span>
    </Link>
  );
}

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null); 

  const closeMenu = () => {
    setIsOpen(false);
    setActiveIndex(null);
  };




  const activeItem = activeIndex !== null ? NAV_ITEMS[activeIndex] : null;

  return (
    
    <header className="relative z-10 flex items-start justify-between bg-fog px-6 py-4 font-sans text-ink lg:px-[5vw] lg:py-10">
      <Logo />

    
      <nav className="hidden items-center gap-10 lg:flex" aria-label="Main">
        {NAV_ITEMS.map((item) => (
          <div key={item.label} className="group relative">
            <Link href={item.href || "#"} className={linkStyle}>
              {item.label}
            </Link>

            {item.children && (
              <ul className="absolute right-0 top-full hidden flex-col items-end gap-4 bg-fog py-5 group-focus-within:flex group-hover:flex">
                {item.children.map((child) => (
                  <li key={child.label}>
                    <Link href={child.href} className={dropdownLinkStyle}>
                      {child.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}

        <Link href="#contact" className={pillStyle}>
          Contact
        </Link>
      </nav>

      <button
        aria-label="Open menu"
        onClick={() => setIsOpen(true)}
        className="flex flex-col gap-1.5 p-2 lg:hidden"
      >
        <span className="h-px w-6 bg-ink" />
        <span className="h-px w-6 bg-ink" />
        <span className="h-px w-6 bg-ink" />
      </button>

     
      <div
        className={`fixed inset-0 z-50 flex flex-col bg-fog p-6 text-ink transition-all duration-500 ${
          isOpen ? "visible translate-x-0" : "invisible translate-x-full"
        }`}
      >
        <div className="flex items-start justify-between">
          <Logo onClick={closeMenu} />
          <button aria-label="Close menu" onClick={closeMenu} className="text-xl">
            ✕
          </button>
        </div>

        <div className="flex flex-1 flex-col justify-center gap-6 overflow-y-auto">
          {activeItem ? (
            <>
              <button
                onClick={() => setActiveIndex(null)}
                className={`${mobileLinkStyle} mb-4 text-body`}
              >
                ‹ Back
              </button>
              {activeItem.children.map((child) => (
                <Link
                  key={child.label}
                  href={child.href}
                  onClick={closeMenu}
                  className={mobileLinkStyle}
                >
                  {child.label}
                </Link>
              ))}
            </>
          ) : (
            NAV_ITEMS.map((item, index) =>
              item.children ? (
                <button
                  key={item.label}
                  onClick={() => setActiveIndex(index)}
                  className={mobileLinkStyle}
                >
                  {item.label} <span className="text-3xl text-body">›</span>
                </button>
              ) : (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={closeMenu}
                  className={mobileLinkStyle}
                >
                  {item.label}
                </Link>
              )
            )
          )}
        </div>

        {!activeItem && (
          <Link
            href="#contact"
            onClick={closeMenu}
            className={`${pillStyle} self-start !px-7 !py-2.5 !text-[0.7rem]`}
          >
            Contact
          </Link>
        )}
      </div>
    </header>
  );
}