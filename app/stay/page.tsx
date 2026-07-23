import Image from "next/image";
import Navigation from "@/components/Navigation";
import ImageGallery from "@/components/ImageGallery";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "Stay - HLAM Retreat",
  description: "Book your retreat at HLAM. Two beautiful houses with stunning views in the heart of nature.",
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
              <p className="text-lg text-charcoal/70">The Larger House • Two Floors • Panoramic Views</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <div className="space-y-4 mb-6">
                  <h3 className="text-terracotta font-serif text-xl">Accommodations</h3>
                  <ul className="space-y-2 text-charcoal">
                    <li className="flex gap-2"><span className="text-sage">✓</span> 3 Bedrooms</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Double bed (Primary)</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Twin bed (Secondary)</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Single bed</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Full Kitchen</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Multiple Bathrooms</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-terracotta font-serif text-xl">Highlights</h3>
                  <ul className="space-y-2 text-charcoal text-sm">
                    <li className="flex gap-2"><span className="text-terracotta">★</span> Expansive Terrace with Olive Grove Views</li>
                    <li className="flex gap-2"><span className="text-terracotta">★</span> Sitting Room with Fireplace</li>
                    <li className="flex gap-2"><span className="text-terracotta">★</span> Private Viewing Tower</li>
                    <li className="flex gap-2"><span className="text-terracotta">★</span> Surrounded by Forest & Nature</li>
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
              <p className="text-lg text-charcoal/70">The Cosy House • One Level • Intimate Setting</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="space-y-4 mb-6">
                  <h3 className="text-terracotta font-serif text-xl">Accommodations</h3>
                  <ul className="space-y-2 text-charcoal">
                    <li className="flex gap-2"><span className="text-sage">✓</span> 4 Rooms</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Multiple Bedrooms</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Full Kitchen</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Cosy Living Area</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Shaded Porch</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Bathroom</li>
                  </ul>
                </div>

              </div>

              <ImageGallery house="mala" />
            </div>
          </div>

          {/* Perfect For — shared across the whole retreat */}
          <div className="border-t border-sage/20 pt-16">
            <h3 className="text-terracotta font-serif text-2xl mb-8 text-center">Perfect For</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 text-center">
              <div className="bg-sage/5 p-6 rounded-lg">
                <p className="text-terracotta text-2xl mb-2">★</p>
                <p className="text-charcoal">Families &amp; Small Groups</p>
              </div>
              <div className="bg-sage/5 p-6 rounded-lg">
                <p className="text-terracotta text-2xl mb-2">★</p>
                <p className="text-charcoal">Wellness &amp; Yoga Retreats</p>
              </div>
              <div className="bg-sage/5 p-6 rounded-lg">
                <p className="text-terracotta text-2xl mb-2">★</p>
                <p className="text-charcoal">Couples on Extended Stays</p>
              </div>
              <div className="bg-sage/5 p-6 rounded-lg">
                <p className="text-terracotta text-2xl mb-2">★</p>
                <p className="text-charcoal">Peaceful Nature Immersion</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Retreat Inquiry */}
      <section className="py-20 bg-sage/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-8">Book Your Retreat</h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Tell us about your vision. Groups welcome. We'll work with you to create the perfect experience.
          </p>
          <WhatsAppCTA />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 HLAM. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
