import Image from "next/image";
import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ClickableImage from "@/components/ClickableImage";

export const metadata = {
  title: "Stomatološki aranžmani - Hlam",
  description: "Spojite stomatološku skrb u provjerenoj ordinaciji u Puntu s odmorom u prirodi na Hlamu, na otoku Krku.",
};

export default function DentalHr() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Zaglavlje — foto hero */}
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
          <h1 className="text-4xl md:text-5xl text-white mb-4 drop-shadow-lg">Stomatološki aranžmani</h1>
          <p className="text-lg text-white/90 drop-shadow">
            Pobrinite se za svoj osmijeh, a zatim se odmorite u prirodi.
          </p>
        </div>
      </section>

      {/* Uvod */}
      <section className="py-16 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <ClickableImage
                src="/images/dental_office_big.jpg"
                alt="Moderna stomatološka ordinacija Dental Matanić u Puntu"
                width={800}
                height={533}
                className="w-full h-auto rounded-lg shadow-sm"
              />
            </div>
            <div>
              <h2 className="text-sage mb-4">Stomatologija i boravak u prirodi</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Hlam surađuje s Ordinacijom dentalne medicine Matanić, obiteljskom praksom u Puntu, otvorenom 2008. godine, uz obiteljsku tradiciju dužu od 20 godina.
              </p>
              <p className="text-lg leading-relaxed">
                Spojite stomatološki tretman s mirnim boravkom na Hlamu, tik iznad mjesta. Dođite radi osmijeha, ostanite radi maslinika.
              </p>
            </div>
          </div>

          {/* Aranžman */}
          <div className="bg-sage/5 p-8 md:p-12 rounded-lg mb-16">
            <h2 className="text-sage font-serif text-3xl mb-6 text-center">Aranžman</h2>
            <ul className="space-y-4 text-charcoal max-w-2xl mx-auto">
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Prvi pregled i RTG snimka u ordinaciji u Puntu</li>
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Osobni plan liječenja s vašim stomatologom</li>
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Besplatno čišćenje zubnog kamenca</li>
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Smještaj na Hlamu, nekoliko minuta od ordinacije</li>
              <li className="flex gap-3"><span className="text-sage shrink-0">✓</span> Vrijeme za odmor i oporavak u prirodi između termina</li>
            </ul>
          </div>

          {/* Usluge + fotografije */}
          <div className="grid md:grid-cols-2 gap-10 items-center mb-16">
            <div>
              <h2 className="text-sage mb-4">Usluge</h2>
              <ul className="space-y-2 text-charcoal text-lg">
                <li className="flex gap-2"><span className="text-terracotta">·</span> Konzervativna stomatologija</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Endodoncija</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Parodontologija</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Oralna kirurgija</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Protetika</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> RTG snimanje</li>
              </ul>
              <p className="text-charcoal/70 mt-6">
                Govorimo hrvatski, engleski, talijanski i slovenski.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/dental_sitting.jpg"
                alt="Pacijent u stomatološkoj ordinaciji"
                width={399}
                height={266}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/dental_happy.jpg"
                alt="Zadovoljan pacijent nakon tretmana"
                width={399}
                height={266}
                className="w-full h-auto rounded-lg"
              />
              <Image
                src="/images/dental_show.jpg"
                alt="Stomatolog objašnjava tretman"
                width={399}
                height={266}
                className="w-full h-auto rounded-lg col-span-2"
              />
            </div>
          </div>

          <p className="text-center text-charcoal/70">
            Više o ordinaciji na{" "}
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

      {/* Kontakt */}
      <section id="contact" className="py-20 bg-sage/5 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-6">Zainteresirani?</h2>
          <p className="text-lg text-charcoal/70 mb-6">
            Recite nam što trebate i zajedno ćemo dogovoriti tretman i boravak.
          </p>
          <p className="mb-2">
            <a href="tel:+385992147068" className="text-xl font-serif text-terracotta hover:text-sage">+385 99 214 7068</a>
          </p>
          <p className="mb-6">
            <a href="mailto:example@example.com" className="text-charcoal hover:text-terracotta">example@example.com</a>
          </p>
          <WhatsAppCTA
            message="Pozdrav! Zanima me stomatološki aranžman."
            label="Pošaljite poruku na WhatsApp"
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 Hlam. Sva prava pridržana.</p>
        </div>
      </footer>
    </div>
  );
}
