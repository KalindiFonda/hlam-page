import Image from "next/image";
import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ClickableImage from "@/components/ClickableImage";

export const metadata = {
  title: "Dental Retreat Packages - Hlam",
  description: "Combine dental care at a trusted clinic in Punat with a restful stay in nature at Hlam, on the island of Krk.",
};

export default function Dental() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Header — photo hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/dental_jasenka.jpg"
            alt=""
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-12">
          <h1 className="text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">Dental Retreat Packages</h1>
          <p className="text-lg text-white/90 drop-shadow">
            Take care of your smile, then recover in nature.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <ClickableImage
                src="/images/dental_office_big.jpg"
                alt="Modern dental office at Dental Matanic in Punat"
                width={800}
                height={533}
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div>
              <h2 className="text-sage mb-4">Dentistry &amp; a Stay in Nature</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Hlam works together with Ordinacija dentalne medicine Matanić, a family dental practice in Punat, open since 2008 and part of a family tradition of more than 20 years.
              </p>
              <p className="text-lg leading-relaxed">
                Combine your dental treatment with a quiet stay at Hlam, just above the town. Come for your smile, stay for the olive groves.
              </p>
            </div>
          </div>

          {/* Package */}
          <div className="bg-sage/5 p-8 md:p-12 rounded-lg mb-16">
            <h2 className="text-sage font-serif text-3xl mb-6 text-center">The Package</h2>
            <ul className="space-y-4 text-charcoal max-w-2xl mx-auto">
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Initial consultation and X-ray at the clinic in Punat</li>
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Personal treatment plan with your dentist</li>
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Complimentary tartar cleaning</li>
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Accommodation at Hlam, minutes from the clinic</li>
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Time to rest and recover in nature between appointments</li>
            </ul>
          </div>

          {/* Services + photos */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-sage mb-4">Services</h2>
              <ul className="space-y-2 text-charcoal text-lg">
                <li className="flex gap-2"><span className="text-terracotta">·</span> Conservative dentistry</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Endodontics</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Periodontics</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Oral surgery</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Prosthodontics</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> X-ray imaging</li>
              </ul>
              <p className="text-charcoal/70 mt-6">
                Spoken languages: Croatian, English, Italian, and Slovenian.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/dental_sitting.jpg"
                alt="Patient at the dental clinic"
                width={399}
                height={266}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/dental_happy.jpg"
                alt="Happy patient after treatment"
                width={399}
                height={266}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/dental_show.jpg"
                alt="Dentist explaining treatment"
                width={399}
                height={266}
                className="w-full h-auto rounded-lg col-span-2"
              />
            </div>
          </div>

          <p className="text-center text-charcoal/70">
            More about the clinic at{" "}
            <a
              href="https://www.zobozdravnik-krk.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sage font-medium hover:text-terracotta"
            >
              zobozdravnik-krk.com
            </a>
          </p>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-20 bg-sage/5 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-6">Interested?</h2>
          <p className="text-lg text-charcoal/70 mb-6">
            Tell us what you need and we will arrange your treatment and your stay together.
          </p>
          <p className="mb-6">
            <a href="tel:+385992147068" className="text-xl font-serif text-terracotta hover:text-sage">+385 99 214 7068</a>
          </p>
          <WhatsAppCTA message="Hi Hlam! I'm interested in a dental retreat package." />
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
