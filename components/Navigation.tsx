import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed w-full top-0 z-50 bg-cream/95 backdrop-blur-sm border-b border-sage/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <Link href="/" className="text-2xl font-serif font-bold text-sage hover:text-terracotta transition">
          HLAM
        </Link>
        <ul className="flex gap-8 text-sm font-medium">
          <li><Link href="/" className="hover:text-terracotta transition">Home</Link></li>
          <li><Link href="/stay" className="hover:text-terracotta transition">Stay</Link></li>
          <li><Link href="/cheese" className="hover:text-terracotta transition">Cheese</Link></li>
        </ul>
      </div>
    </nav>
  );
}
