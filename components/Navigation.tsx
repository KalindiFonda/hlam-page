'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname() ?? '/';
  const isHr = pathname === '/hr' || pathname.startsWith('/hr/');

  const links = isHr
    ? [
        { href: '/hr', label: 'Početna' },
        { href: '/hr/stay', label: 'Smještaj' },
        { href: '/hr/cheese_and_oil', label: 'Sir i ulje' },
        { href: '/hr/dental', label: 'Stomatologija' },
      ]
    : [
        { href: '/', label: 'Home' },
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
        <Link href={isHr ? '/hr' : '/'} className="text-2xl font-serif font-bold text-sage hover:text-terracotta transition">
          Hlam
        </Link>
        <ul className="flex items-center gap-4 sm:gap-8 text-sm font-medium">
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
      </div>
    </nav>
  );
}
