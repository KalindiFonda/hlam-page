import Image from "next/image";
import Navigation from "@/components/Navigation";
import ImageGallery from "@/components/ImageGallery";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "Stay - Hlam Retreat",
  description: "Book your retreat at Hlam. Two beautiful houses with stunning views in the heart of nature.",
};

export default function Stay() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vela_entrace_upstairs_pretty.jpeg"
            alt="Retreat spaces"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Your Retreat Awaits
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow">
            Two unique houses. Endless nature. Your sanctuary.
          </p>
        </div>
      </section>

      {/* Houses Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Vela - Bigger House */}
          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-sage mb-2">Vela</h2>
              <p className="text-lg text-charcoal/70">The Larger House • Two Floors • Plenty of Spots to Relax &amp; Hang Out</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <div className="space-y-4 mb-6">
                  <h3 className="text-terracotta font-serif text-xl">Accommodations</h3>
                  <ul className="space-y-2 text-charcoal">
                    <li className="flex gap-2"><span className="text-sage">✓</span> 3 Bedrooms</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Double bed (Primary)</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Room with two single beds</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Single bed</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> 2 Full Kitchens with Living Rooms</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> 2 Bathrooms</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Two Porches &amp; a Large Terrace</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-terracotta font-serif text-xl">Highlights</h3>
                  <ul className="space-y-2 text-charcoal text-sm">
                    <li className="flex gap-2"><span className="text-terracotta">★</span> Expansive Terrace with Olive Grove Views</li>
                    <li className="flex gap-2"><span className="text-terracotta">★</span> Sitting Room with Fireplace</li>
                  </ul>
                </div>
              </div>

              <ImageGallery house="vela" />
            </div>
          </div>

          <div className="border-t border-sage/20 pt-20 mb-20">
            {/* Mala - Smaller House */}
            <div className="mb-8">
              <h2 className="text-sage mb-2">Mala</h2>
              <p className="text-lg text-charcoal/70">The Cosy House • One Level</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="space-y-4 mb-6">
                  <h3 className="text-terracotta font-serif text-xl">Accommodations</h3>
                  <ul className="space-y-2 text-charcoal">
                    <li className="flex gap-2"><span className="text-sage">✓</span> 4 Bedrooms</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Full Kitchen</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Cosy Living Area</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Porch</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Bathroom</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Next to the Viewing Platform</li>
                  </ul>
                </div>

              </div>

              <ImageGallery house="mala" />
            </div>
          </div>

          {/* Perfect For — shared across the whole retreat */}
          <div className="border-t border-sage/20 pt-16">
            <h3 className="text-terracotta font-serif text-2xl mb-8 text-center">Perfect For</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                "Families",
                "Groups",
                "Wellness & Yoga Retreats",
                "Couples on Extended Stays",
                "Peaceful Nature Immersion",
              ].map((label) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-2 bg-sage/5 border border-sage/20 rounded-full px-6 py-3 text-charcoal"
                >
                  <span className="text-terracotta">★</span> {label}
                </span>
              ))}
            </div>

            <div className="mt-10 max-w-2xl mx-auto text-center space-y-3">
              <p className="text-lg text-charcoal/80">
                Book the whole estate — or just one house. Vela and Mala sit more than 50 metres apart, each with its own privacy.
              </p>
              <p className="text-charcoal/60">
                Surrounded by forest and nature on all sides.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Grounds & Nature Album */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-sage mb-3">The Grounds &amp; Nature</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Olive grove, a shaded hammock, and Adriatic sunsets — the landscape that surrounds both houses.
            </p>
          </div>
          <ImageGallery house="grounds" />

          {/* Viewing tower — photo placeholder */}
          <div className="mt-8 border-2 border-dashed border-sage/40 rounded-lg p-8 text-center bg-sage/5">
            <p className="text-3xl mb-2">🗼</p>
            <p className="text-sage font-medium mb-1">The Viewing Tower</p>
            <p className="text-sm text-charcoal/60">
              Climb above the treetops for views across the olive groves to the Adriatic. Photo coming soon.
            </p>
          </div>
        </div>
      </section>

      {/* Retreat Inquiry */}
      <section className="py-20 bg-sage/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-8">Book Your Stay</h2>
          <p className="text-lg text-charcoal/70 mb-4">
            Tell us about your vision. Groups welcome. We'll work with you to create the perfect experience.
          </p>
          <p className="text-charcoal/60 mb-8">
            Contact us for seasonal rates.
          </p>
          <WhatsAppCTA message="Hi Hlam! I'm interested in learning more about your accommodation." />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 Hlam. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
