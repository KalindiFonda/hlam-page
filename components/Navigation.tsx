'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navigation() {
  const pathname = usePathname() ?? '/';
  const isHr = pathname === '/hr' || pathname.startsWith('/hr/');
  const [open, setOpen] = useState(false);

  const links = isHr
    ? [
        { href: '/hr/stay', label: 'Smještaj' },
        { href: '/hr/cheese_and_oil', label: 'Sir i ulje' },
        { href: '/hr/dental', label: 'Stomatologija' },
      ]
    : [
        { href: '/stay', label: 'Stay' },
        { href: '/cheese_and_oil', label: 'Cheese & Oil' },
        { href: '/dental', label: 'Dental' },
      ];

  // Map the current page to its counterpart in the other language.
  // House rules is a single bilingual page, so it maps to itself.
  const toggleHref = pathname === '/house-rules'
    ? '/house-rules'
    : isHr
      ? pathname.replace(/^\/hr\/?/, '/') || '/'
      : pathname === '/' ? '/hr' : `/hr${pathname}`;

  return (
    <nav className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link
          href={isHr ? '/hr' : '/'}
          onClick={() => setOpen(false)}
          className="text-2xl font-serif font-bold text-sage hover:text-terracotta transition"
        >
          Hlam
        </Link>

        {/* Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="hover:text-terracotta transition">{l.label}</Link>
            </li>
          ))}
          <li>
            <Link
              href={toggleHref}
              className="border border-sage/40 rounded-full px-3 py-1 text-xs hover:border-terracotta hover:text-terracotta transition"
            >
              {isHr ? 'EN' : 'HR'}
            </Link>
          </li>
          <li>
            <a
              href="#contact"
              className="bg-sage !text-white px-4 py-2 rounded-lg hover:bg-sage/90 transition"
            >
              {isHr ? 'Kontakt' : 'Contact Us'}
            </a>
          </li>
        </ul>

        {/* Mobile: language chip + hamburger */}
        <div className="flex md:hidden items-center gap-3">
          <Link
            href={toggleHref}
            onClick={() => setOpen(false)}
            className="border border-sage/40 rounded-full px-3 py-1 text-xs hover:border-terracotta hover:text-terracotta transition"
          >
            {isHr ? 'EN' : 'HR'}
          </Link>
          <button
            type="button"
            onClick={() => setOpen(!open)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            className="p-2 text-sage hover:text-terracotta transition"
          >
            {open ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden bg-cream border-b border-sage/20 shadow-lg">
          <ul className="px-4 py-4 space-y-1 text-base font-medium">
            {links.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-3 px-2 rounded-lg hover:bg-sage/10 transition"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="block text-center bg-sage !text-white px-4 py-3 rounded-lg hover:bg-sage/90 transition"
              >
                {isHr ? 'Kontakt' : 'Contact Us'}
              </a>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
}
