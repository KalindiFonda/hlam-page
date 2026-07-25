'use client';

import { usePathname } from 'next/navigation';

export default function FloatingContact() {
  const pathname = usePathname() ?? '/';
  const isHr = pathname === '/hr' || pathname.startsWith('/hr/');

  return (
    <a
      href="#contact"
      aria-label={isHr ? 'Kontakt' : 'Contact us'}
      className="fixed bottom-6 right-6 z-50 flex md:hidden items-center justify-center w-14 h-14 rounded-full bg-sage !text-white shadow-lg hover:bg-sage/90 hover:shadow-xl transition"
    >
      {/* chat bubble icon */}
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.86 9.86 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    </a>
  );
}
