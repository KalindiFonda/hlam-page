import Image from "next/image";
import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "Cheese & Oil - HLAM",
  description: "Artisanal cheese and olive oil from Sirana Hlam. Produced with care on the island of Krk.",
};

export default function Cheese() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cheese_police.png"
            alt="Artisanal cheese"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/25" />
        </div>
        <div className="relative z-10 text-center max-w-3xl px-4">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg font-serif">
            Sirana Hlam
          </h1>
          <p className="text-xl md:text-2xl text-white/95 font-light drop-shadow mb-4">
            Artisanal Cheese & Olive Oil
          </p>
          <p className="text-lg text-white/90 drop-shadow">
            Crafted with tradition. Rooted in nature.
          </p>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal leading-relaxed">
              SIRANA HLAM produces exceptional artisanal cheese using high-quality milk and time-honored techniques, rooted in traditional Croatian dairy practices. Each batch reflects the rich flavours of the Adriatic coast and the Mediterranean forest surrounding our property.
            </p>
          </div>

          {/* Cheese Showcase with Close-ups */}
          <div className="mb-16 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-center text-sage font-serif text-3xl mb-8">Our Cheeses</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <Image
                  src="/images/cheese_closeup.png"
                  alt="Artisanal cheese close-up"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-charcoal leading-relaxed">
                  Each wheel of cheese is crafted with precision and care. Our cheeses are made from the finest local milk, using techniques passed down through generations.
                </p>
                <p className="text-lg text-charcoal leading-relaxed">
                  The rich, complex flavours come from the unique terroir of Krk—the mineral-rich soil, the ancient olive trees, and the pure Mediterranean air.
                </p>
                <p className="text-lg text-charcoal/70 italic">
                  "Taste the difference that dedication to craft makes."
                </p>
              </div>
            </div>
          </div>

          {/* Cheese Varieties */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-sage/5 p-8 rounded-lg hover:shadow-md transition">
              <h3 className="text-terracotta font-serif text-2xl mb-4">Hard Cheese</h3>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                Our signature hard cheese—aromatic and complex. A divine alternative to Pecorino and Parmesan. Perfect on pasta or as part of a carefully curated cheese board.
              </p>
              <p className="text-sm text-sage font-medium">
                ✓ Made fresh · ✓ Artisanal · ✓ Award-quality
              </p>
            </div>

            <div className="bg-sage/5 p-8 rounded-lg hover:shadow-md transition">
              <h3 className="text-terracotta font-serif text-2xl mb-4">Sage Cheese</h3>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                Infused with local sage from our surrounding forest. Herbaceous and refined, this cheese is absolutely divine on its own or paired with fresh bread.
              </p>
              <p className="text-sm text-sage font-medium">
                ✓ Herbal notes · ✓ Subtle elegance · ✓ Unforgettable
              </p>
            </div>

            <div className="bg-sage/5 p-8 rounded-lg hover:shadow-md transition">
              <h3 className="text-terracotta font-serif text-2xl mb-4">Truffle Cheese</h3>
              <p className="text-charcoal/80 mb-4 leading-relaxed">
                A luxurious blend featuring the earthy richness of truffle. The perfect indulgence for special occasions and those seeking the extraordinary.
              </p>
              <p className="text-sm text-sage font-medium">
                ✓ Luxurious · ✓ Earthy & rich · ✓ Special moments
              </p>
            </div>
          </div>

          {/* Guest Review */}
          <div className="bg-white border-l-4 border-terracotta p-8 rounded-r-lg mb-16 shadow-sm">
            <p className="text-lg text-charcoal italic mb-4 leading-relaxed">
              "The hard cheese tastes better and is more aromatic on pasta than Pecorino or Parmesan. A great alternative and a refreshing change. The other cheeses with sage and truffle flavour are divine. I buy them every summer and save them for New Year's Eve for my friends. They're the first to eat up all the cheese from this creamery. For me, it's absolutely perfect."
            </p>
            <p className="text-sm font-medium text-sage">— Guest Review</p>
            <div className="flex gap-1 mt-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-terracotta">★</span>
              ))}
            </div>
          </div>

          {/* Olive Oil */}
          <div className="bg-olive/10 p-12 rounded-lg mb-16">
            <h2 className="text-olive font-serif text-3xl mb-6">Premium Olive Oil</h2>
            <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
              Produced from ancient olive trees surrounding our property, our oils are pressed using traditional methods. Rich, aromatic, and deeply rooted in place—each bottle tells the story of generations of care and connection to this land.
            </p>
            <p className="text-charcoal/70">
              For current availability and pricing, please reach out via the form below.
            </p>
          </div>

          {/* Availability Note */}
          <div className="bg-cream border-2 border-sage/30 p-8 rounded-lg text-center mb-16">
            <p className="text-charcoal/80 mb-3">
              We produce limited quantities to maintain quality. Seasonal availability varies.
            </p>
            <p className="text-sm text-sage font-medium">
              Get in touch to check what's available and discuss ordering.
            </p>
          </div>
        </div>
      </section>

      {/* Order Section */}
      <section className="py-20 bg-sage/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-8">Order Cheese & Oil</h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Interested in tasting our cheeses or ordering our olive oil? Get in touch with us.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 HLAM. All rights reserved.</p>
          <p className="text-xs opacity-50 mt-4">Sirana Hlam · Punat, Krk, Croatia</p>
        </div>
      </footer>
    </div>
  );
}
