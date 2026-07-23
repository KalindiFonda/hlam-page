import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import GoogleReviewChip from "@/components/GoogleReviewChip";

export const metadata = {
  title: "Hlam Retreat - Olive Grove Sanctuary on Krk Island",
  description: "Luxury nature retreat on the island of Krk, Croatia. Vacation rentals, retreat spaces, and artisanal cheese & olive oil.",
};

export default function Home() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vela_front_olive_view.jpg"
            alt="View through the shaded pergola onto the olive grove at Hlam"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Olive Grove Sanctuary
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow mb-8">
            Immerse yourself in nature.
            <br />
            Retreat, connect, and rediscover.
          </p>
          <Link
            href="/stay"
            className="inline-block bg-sage text-white px-8 py-3 rounded-lg font-medium hover:bg-sage/90 transition"
          >
            Plan Your Stay
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sage mb-6">About Hlam</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Nestled in the heart of nature on the island of Krk, just above Punat, Hlam is a destination for authentic retreats, family getaways, and artisanal food experiences.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Surrounded by olive trees and Mediterranean forest, our two houses offer the perfect escape. Powered by the sun and supplied by collected rainwater, life here moves with the rhythm of nature—simple, quiet, and close to the land.
              </p>
              <Link
                href="/stay"
                className="inline-block text-sage font-medium hover:text-terracotta transition"
              >
                Explore Our Spaces →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-sage/10 p-6 rounded-lg text-center">
                <p className="text-terracotta font-serif text-4xl mb-2">2</p>
                <p className="text-sage font-medium">Houses</p>
                <p className="text-xs text-charcoal/60 mt-2">(Vela & Mala)</p>
              </div>
              <div className="bg-terracotta/10 p-6 rounded-lg text-center">
                <p className="text-terracotta font-serif text-4xl mb-2">7</p>
                <p className="text-sage font-medium">Rooms</p>
                <p className="text-xs text-charcoal/60 mt-2">Beautifully designed</p>
              </div>
              <div className="bg-olive/10 p-6 rounded-lg text-center">
                <p className="text-olive font-serif text-4xl mb-2">♻</p>
                <p className="text-sage font-medium">Renewable</p>
                <p className="text-xs text-charcoal/60 mt-2">Solar & Rainwater</p>
              </div>
              <div className="bg-sage/10 p-6 rounded-lg text-center">
                <p className="text-terracotta font-serif text-4xl mb-2">🧀</p>
                <p className="text-sage font-medium">Artisanal</p>
                <p className="text-xs text-charcoal/60 mt-2">Cheese & Oil</p>
              </div>
              <div className="bg-olive/10 p-6 rounded-lg text-center">
                <p className="text-olive font-serif text-4xl mb-2">🌳</p>
                <p className="text-sage font-medium">Expansive Grounds</p>
                <p className="text-xs text-charcoal/60 mt-2">Private, with space to roam</p>
              </div>
              <div className="bg-terracotta/10 p-6 rounded-lg text-center">
                <p className="text-terracotta font-serif text-4xl mb-2">🌿</p>
                <p className="text-sage font-medium">Nature Immersion</p>
                <p className="text-xs text-charcoal/60 mt-2">Forest & olive grove all around</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Cheese & Oil teaser */}
      <section className="py-20 bg-olive/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/images/cheese_tower.jpg"
                alt="A stack of Hlam cheese varieties beneath the olive trees"
                width={500}
                height={400}
                className="w-full h-72 object-cover object-top rounded-lg shadow-sm"
              />
            </div>
            <div>
              <h2 className="text-sage mb-4">From Our Sirana</h2>
              <p className="text-lg mb-6 leading-relaxed">
                We don't just host—we make. Artisanal cheese and extra virgin olive oil, produced right here and loved by locals and visitors alike.
              </p>
              <Link
                href="/cheese"
                className="inline-block text-sage font-medium hover:text-terracotta transition"
              >
                Discover Cheese &amp; Oil →
              </Link>
            </div>
          </div>

          {/* Guest voice */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-terracotta text-sm mb-3">★★★★★</p>
              <p className="text-lg text-charcoal/80 italic leading-relaxed">
                "Delicious cheeses (you can try them before buying); long-aged, with lavender, sage, pepper, and truffle. The truffle oil is also amazing! Bravo!"
              </p>
              <p className="text-sm font-medium text-sage mt-4">— Guest Review</p>
            </div>
          </div>
        </div>
      </section>

      {/* Ready to Retreat + Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-6">Ready to Retreat? Reach Out</h2>
          <p className="text-lg text-charcoal/80 mb-8">
            Whether you're planning a family getaway, wellness retreat, or romantic escape, Hlam awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link
              href="/stay"
              className="bg-sage text-white px-8 py-3 rounded-lg font-medium hover:bg-sage/90 transition"
            >
              Explore Accommodations
            </Link>
            <Link
              href="/cheese"
              className="bg-white text-sage border-2 border-sage px-8 py-3 rounded-lg font-medium hover:bg-sage/10 transition"
            >
              Taste Our Cheese
            </Link>
          </div>

          <p className="text-lg text-charcoal/70 mb-8">
            Questions? We'd love to help you plan your perfect stay.
          </p>
          <WhatsAppCTA />

          <div className="mt-12 pt-12 border-t border-sage/20 grid md:grid-cols-2 gap-8 text-center">
            <div>
              <p className="text-sage font-medium mb-2">Phone</p>
              <a href="tel:+385992147068" className="text-charcoal hover:text-terracotta">+385 99 214 7068</a>
            </div>
            <div>
              <p className="text-sage font-medium mb-2">Location</p>
              <p className="text-charcoal mb-4">Hlam · Punat, Island of Krk<br />Croatia</p>
              <GoogleReviewChip />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 Hlam. All rights reserved.</p>
          <p className="text-xs opacity-50 mt-4">Retreat • Cheese • Oil • Connection</p>
        </div>
      </footer>
    </div>
  );
}
