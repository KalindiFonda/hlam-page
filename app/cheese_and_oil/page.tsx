import Image from "next/image";
import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ClickableImage from "@/components/ClickableImage";
import GoogleReviewChip from "@/components/GoogleReviewChip";

export const metadata = {
  title: "Cheese & Oil - Hlam",
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
            src="/images/cheese_police.jpg"
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
              Sirana Hlam is a cheese and olive oil producer in Punat, on the island of Krk. We specialise in traditional Croatian dairy products: cheese made from high-quality milk, alongside a selection of premium olive oils, reflecting the rich agricultural heritage of the region.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mt-4">
              Visitors are welcome to join a tasting and learn about the artisanal processes behind our products, an engaging stop for anyone exploring Croatian gastronomy.
            </p>
          </div>

          {/* Cheese Showcase with Close-ups */}
          <div className="mb-16 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-center text-sage font-serif text-3xl mb-8">Our Cheeses</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ClickableImage
                  src="/images/cheese_closeup.jpg"
                  alt="Artisanal cheese close-up"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-charcoal leading-relaxed">
                  We make our cheese in small batches from high-quality milk, following traditional Croatian recipes.
                </p>
                <p className="text-lg text-charcoal leading-relaxed">
                  Some wheels we keep plain, others we flavour with sage or truffle, and then we age them until they're ready.
                </p>
              </div>
            </div>
          </div>

          {/* Variety Feature */}
          <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h2 className="text-sage font-serif text-3xl">A Cheese for Every Taste</h2>
              <p className="text-lg text-charcoal leading-relaxed">
                From mild to vintage, plain to herb-infused: there's a wheel for every table.
              </p>
              <ul className="space-y-2 text-charcoal text-lg">
                <li className="flex gap-2"><span className="text-terracotta">·</span> Hard cheese (tvrdi sir)</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Classic</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Sage</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Lavender</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Pepper</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Truffle</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> …and more</li>
              </ul>
              <p className="text-charcoal/70 leading-relaxed">
                Mild · Mature · Vintage
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ClickableImage
                src="/images/cheese_tower.jpg"
                alt="A stack of Hlam cheese varieties on a board beneath the olive trees"
                width={500}
                height={760}
                className="w-full h-auto rounded-lg shadow-sm mx-auto max-w-sm"
              />
            </div>
          </div>

          {/* Guest Review with branded product */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            <div className="flex flex-col gap-4">
              <ClickableImage
                src="/images/chese_offer.jpg"
                alt="Branded Sir Hlam cheese wheels, Product of Croatia"
                width={500}
                height={760}
                className="w-full h-full object-cover object-top rounded-lg shadow-sm"
              />
              <div className="text-center mt-8">
                <GoogleReviewChip />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="bg-white border-l-4 border-terracotta p-8 rounded-r-lg shadow-sm">
                <p className="text-terracotta text-sm mb-3">★★★★★</p>
                <p className="text-lg text-charcoal italic leading-relaxed">
                  "The hard cheese tastes better and is more aromatic on pasta than Pecorino or Parmesan. A great alternative and a refreshing change. The other cheeses with sage and truffle flavour are divine. I buy them every summer and save them for New Year's Eve for my friends. They're the first to eat up all the cheese from this creamery. For me, it's absolutely perfect."
                </p>
              </div>
              <div className="bg-white border-l-4 border-terracotta p-8 rounded-r-lg shadow-sm">
                <p className="text-terracotta text-sm mb-3">★★★★★</p>
                <p className="text-lg text-charcoal italic leading-relaxed">
                  "We called ahead which made it super easy. The owner is very lovely, lets you taste all the cheeses, and the cheese smelled and tasted incredible."
                </p>
              </div>
            </div>
          </div>

          {/* Olive Oil */}
          <div className="bg-olive/10 p-12 rounded-lg mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-olive font-serif text-3xl mb-6">Extra Virgin Olive Oil &amp; Truffle Oil</h2>
                <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                  Produced from olive trees surrounding our property, our oils are pressed using traditional methods. Rich, aromatic, and deeply rooted in place. Each bottle tells the story of generations of care and connection to this land.
                </p>
                <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                  Alongside the extra virgin olive oil, we also make a truffle oil, a guest favourite.
                </p>
              </div>
              <ClickableImage
                src="/images/two_oils.jpg"
                alt="Bottles of Hlam extra virgin olive oil and truffle oil"
                width={500}
                height={840}
                className="w-full h-auto rounded-lg shadow-sm mx-auto max-w-xs"
              />
            </div>
          </div>

        </div>
      </section>

      {/* Tasting & Visit Section */}
      <section id="contact" className="py-20 bg-sage/5 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-6">Come Visit Us</h2>
          <p className="text-lg text-charcoal/70 mb-4">
            Stop by the creamery in Punat, Krk to taste our cheeses and olive oil, straight from the source.
          </p>
          <p className="text-lg text-charcoal/70 mb-6">
            For current availability and pricing, get in touch with us directly.
          </p>
          <p className="text-lg text-charcoal mb-2">
            To book a tasting session, contact us on:
          </p>
          <a
            href="tel:+385992147068"
            className="inline-block text-2xl font-serif text-terracotta hover:text-sage mb-8"
          >
            +385 99 214 7068
          </a>

          <div className="mb-8">
            <WhatsAppCTA message="Hi Hlam! I'm interested in your cheese and olive oil." />
          </div>

          <div className="pt-8 border-t border-sage/20">
            <p className="text-sage font-medium mb-2">Visit Us</p>
            <p className="text-charcoal mb-4">Sirana Hlam · Ul. 17. travnja 3<br />51521 Punat, Krk, Croatia</p>
            <GoogleReviewChip />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 Hlam. All rights reserved.</p>
          <p className="text-xs opacity-50 mt-4">Sirana Hlam · Punat, Krk, Croatia</p>
        </div>
      </footer>
    </div>
  );
}
