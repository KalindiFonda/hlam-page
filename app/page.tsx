import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "HLAM Retreat - Olive Grove Sanctuary on Krk Island",
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
            src="/images/vela_entrace_upstairs_pretty.jpeg"
            alt="Olive grove retreat"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Olive Grove Sanctuary
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow mb-8">
            Immerse yourself in nature. Retreat, connect, and rediscover.
          </p>
          <Link
            href="/stay"
            className="inline-block bg-sage text-white px-8 py-3 rounded-lg font-medium hover:bg-sage/90 transition"
          >
            Plan Your Retreat
          </Link>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sage mb-6">About HLAM</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Nestled in the heart of nature on the island of Krk, HLAM is a renowned destination for authentic retreats, family getaways, and artisanal food experiences.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Surrounded by ancient olive trees and Mediterranean forest, our two thoughtfully designed houses offer the perfect escape. Powered entirely by solar energy and sustained by rainwater collection, every detail reflects our commitment to sustainable living.
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
            </div>
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-20 bg-sage/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-6">Ready to Retreat?</h2>
          <p className="text-lg text-charcoal/80 mb-8">
            Whether you're planning a family getaway, wellness retreat, or romantic escape, HLAM awaits.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </section>

      {/* Quick Contact */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-8">Get in Touch</h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Questions? We'd love to help you plan your perfect retreat.
          </p>
          <WhatsAppCTA />

          <div className="mt-12 pt-12 border-t border-sage/20 grid md:grid-cols-2 gap-8 text-center">
            <div>
              <p className="text-sage font-medium mb-2">Phone</p>
              <a href="tel:+385991217068" className="text-charcoal hover:text-terracotta">+385 99 121 7068</a>
            </div>
            <div>
              <p className="text-sage font-medium mb-2">Location</p>
              <p className="text-charcoal">Ul. 17. travnja 3<br />51521 Punat, Krk<br />Croatia</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 HLAM. All rights reserved.</p>
          <p className="text-xs opacity-50 mt-4">Retreat • Cheese • Oil • Connection</p>
        </div>
      </footer>
    </div>
  );
}
