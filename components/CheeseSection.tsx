import ContactForm from './ContactForm';

export default function CheeseSection() {
  return (
    <div className="space-y-12">
      <div className="prose prose-lg max-w-none">
        <p className="text-lg text-charcoal leading-relaxed mb-6">
          SIRANA HLAM produces exceptional artisanal cheese using high-quality milk and time-honored techniques. Our selection reflects the rich flavours of the Adriatic coast and the Mediterranean forest.
        </p>
      </div>

      {/* Cheese Varieties */}
      <div className="grid md:grid-cols-3 gap-8 mb-12">
        <div className="bg-sage/5 p-6 rounded-lg">
          <h3 className="text-terracotta font-serif text-2xl mb-3">Hard Cheese</h3>
          <p className="text-charcoal/80 text-sm mb-3">
            Our signature hard cheese—aromatic and complex. A divine alternative to Pecorino and Parmesan. Perfect on pasta or as part of a carefully curated cheese board.
          </p>
          <p className="text-xs text-sage font-medium">✓ Made fresh · ✓ Artisanal · ✓ Award-quality</p>
        </div>

        <div className="bg-sage/5 p-6 rounded-lg">
          <h3 className="text-terracotta font-serif text-2xl mb-3">Sage Cheese</h3>
          <p className="text-charcoal/80 text-sm mb-3">
            Infused with local sage from our surrounding forest. Herbaceous and refined, this cheese is absolutely divine on its own or paired with fresh bread.
          </p>
          <p className="text-xs text-sage font-medium">✓ Herbal notes · ✓ Subtle elegance · ✓ Unforgettable</p>
        </div>

        <div className="bg-sage/5 p-6 rounded-lg">
          <h3 className="text-terracotta font-serif text-2xl mb-3">Truffle Cheese</h3>
          <p className="text-charcoal/80 text-sm mb-3">
            A luxurious blend featuring the earthy richness of truffle. The perfect indulgence for special occasions and those seeking the extraordinary.
          </p>
          <p className="text-xs text-sage font-medium">✓ Luxurious · ✓ Earthy & rich · ✓ Special occasions</p>
        </div>
      </div>

      {/* Testimonial */}
      <div className="bg-white border-l-4 border-terracotta p-8 rounded-r-lg">
        <p className="text-lg text-charcoal italic mb-4 leading-relaxed">
          "The hard cheese tastes better and is more aromatic on pasta than Pecorino or Parmesan. A great alternative and a refreshing change. The other cheeses with sage and truffle flavour are divine. I buy them every summer and save them for New Year's Eve for my friends. They're the first to eat up all the cheese from this creamery. For me, it's absolutely perfect."
        </p>
        <p className="text-sm font-medium text-sage">— Guest Review</p>
      </div>

      {/* Olive Oil */}
      <div className="bg-olive/10 p-8 rounded-lg">
        <h3 className="text-olive font-serif text-2xl mb-4">Premium Olive Oil</h3>
        <p className="text-charcoal/80 mb-4">
          Produced from ancient olive trees surrounding our property, our oils are pressed using traditional methods. Rich, aromatic, and deeply rooted in place.
        </p>
        <p className="text-sm text-charcoal/70">
          For current availability and pricing, please reach out via the form below.
        </p>
      </div>

      {/* Order Section */}
      <div className="bg-sage/5 p-8 rounded-lg">
        <h3 className="text-charcoal font-serif text-2xl mb-4">Order Cheese & Oil</h3>
        <p className="text-charcoal/70 mb-6">
          Interested in tasting our cheeses or ordering our olive oil? We'd love to tell you more about our products and discuss availability and shipping.
        </p>
        <ContactForm type="general" />
      </div>
    </div>
  );
}
