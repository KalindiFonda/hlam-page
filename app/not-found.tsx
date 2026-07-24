import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";

export default function NotFound() {
  return (
    <div className="bg-cream text-charcoal min-h-screen flex flex-col">
      <Navigation />

      <section className="flex-1 relative flex items-center justify-center overflow-hidden pt-16">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/olives_with_hammock.jpg"
            alt="A hammock beneath the olive trees"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>
        <div className="relative z-10 text-center max-w-xl px-4 py-24">
          <p className="text-7xl md:text-8xl font-serif text-white drop-shadow-lg mb-4">404</p>
          <h1 className="text-3xl md:text-4xl text-white mb-4 drop-shadow-lg">
            This page is on holiday
          </h1>
          <p className="text-lg text-white/90 drop-shadow mb-2">
            Last seen in a hammock somewhere among the olive trees. No one can find it.
          </p>
          <p className="text-white/80 drop-shadow mb-8 text-sm italic">
            Ova stranica je na odmoru. Nitko je ne može pronaći.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/"
              className="bg-sage !text-white px-8 py-3 rounded-lg font-medium hover:bg-sage/90 transition"
            >
              Back to Hlam
            </Link>
            <Link
              href="/stay"
              className="border-2 border-white !text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              Join it on holiday
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
