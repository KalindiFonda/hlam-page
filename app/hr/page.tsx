import Image from "next/image";
import Link from "next/link";
import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import GoogleReviewChip from "@/components/GoogleReviewChip";

export const metadata = {
  title: "Hlam - Utočište među maslinama na otoku Krku",
  description: "Odmor u prirodi na otoku Krku. Smještaj, retreati te domaći sir i maslinovo ulje.",
};

export default function HomeHr() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vela_front_olive_view.jpg"
            alt="Pogled kroz sjenoviti trijem na maslinik na Hlamu"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Utočište među maslinama
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow mb-8">
            Uronite u prirodu.
            <br />
            Odmorite se, povežite i otkrijte iznova.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/hr/stay"
              className="inline-block whitespace-nowrap border-2 border-white !text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              Planirajte svoj boravak
            </Link>
            <Link
              href="/hr/cheese_and_oil"
              className="inline-block whitespace-nowrap border-2 border-white !text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              Kušajte naše proizvode
            </Link>
            <Link
              href="/hr/dental"
              className="inline-block whitespace-nowrap border-2 border-white !text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition"
            >
              Stomatološki aranžmani
            </Link>
          </div>
        </div>
      </section>

      {/* O Hlamu */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-sage mb-6">O Hlamu</h2>
              <p className="text-lg mb-4 leading-relaxed">
                Smješten u srcu prirode na otoku Krku, tik iznad Punta, Hlam je odredište za autentične odmore, obiteljska okupljanja i gastronomska iskustva.
              </p>
              <p className="text-lg mb-6 leading-relaxed">
                Okružene maslinama i mediteranskom šumom, naše dvije kuće nude savršen bijeg. Uz sunčevu energiju i skupljenu kišnicu, život ovdje prati ritam prirode: jednostavno, tiho i blizu zemlje.
              </p>
              <Link
                href="/hr/stay"
                className="inline-block text-sage font-medium hover:text-terracotta transition"
              >
                Istražite naše prostore →
              </Link>
            </div>
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-sage/10 p-6 rounded-lg text-center">
                <p className="text-terracotta font-serif text-4xl mb-2">2</p>
                <p className="text-sage font-medium">Kuće</p>
                <p className="text-xs text-charcoal/60 mt-2">(Vela i Mala)</p>
              </div>
              <div className="bg-terracotta/10 p-6 rounded-lg text-center">
                <p className="text-terracotta font-serif text-4xl mb-2">7</p>
                <p className="text-sage font-medium">Soba</p>
                <p className="text-xs text-charcoal/60 mt-2">Lijepo uređene</p>
              </div>
              <div className="bg-olive/10 p-6 rounded-lg text-center">
                <p className="text-olive font-serif text-4xl mb-2">♻</p>
                <p className="text-sage font-medium">Obnovljivo</p>
                <p className="text-xs text-charcoal/60 mt-2">Sunce i kišnica</p>
              </div>
              <div className="bg-sage/10 p-6 rounded-lg text-center">
                <p className="text-terracotta font-serif text-4xl mb-2">🧀</p>
                <p className="text-sage font-medium">Domaće</p>
                <p className="text-xs text-charcoal/60 mt-2">Sir i ulje</p>
              </div>
              <div className="bg-olive/10 p-6 rounded-lg text-center">
                <p className="text-olive font-serif text-4xl mb-2">🌳</p>
                <p className="text-sage font-medium">Prostrano imanje</p>
                <p className="text-xs text-charcoal/60 mt-2">Privatno, s puno prostora</p>
              </div>
              <div className="bg-terracotta/10 p-6 rounded-lg text-center">
                <p className="text-terracotta font-serif text-4xl mb-2">🌿</p>
                <p className="text-sage font-medium">Uronjeni u prirodu</p>
                <p className="text-xs text-charcoal/60 mt-2">Šuma i maslinik svuda oko nas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Iz naše sirane */}
      <section className="py-20 bg-olive/5">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <Image
                src="/images/cheese_tower.jpg"
                alt="Naslagani sirevi Hlam pod maslinama"
                width={500}
                height={400}
                className="w-full h-72 object-cover object-[50%_30%] rounded-lg shadow-sm"
              />
            </div>
            <div>
              <h2 className="text-sage mb-4">Iz naše sirane</h2>
              <p className="text-lg mb-6 leading-relaxed">
                Ne nudimo samo smještaj. Proizvodimo domaći sir i ekstra djevičansko maslinovo ulje, ovdje na imanju, omiljene među mještanima i gostima.
              </p>
              <Link
                href="/hr/cheese_and_oil"
                className="inline-block text-sage font-medium hover:text-terracotta transition"
              >
                Otkrijte sir i ulje →
              </Link>
            </div>
          </div>

          {/* Recenzija */}
          <div className="max-w-2xl mx-auto mt-12">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <p className="text-terracotta text-sm mb-3">★★★★★</p>
              <p className="text-lg text-charcoal/80 italic leading-relaxed">
                "Izvrsni sirevi (možete ih kušati prije kupnje); dugo zreli, s lavandom, kaduljom, paprom i tartufima. Ulje s tartufima je također odlično! Bravo!"
              </p>
              <p className="text-sm font-medium text-sage mt-4">— Recenzija gosta</p>
            </div>
          </div>
        </div>
      </section>

      {/* Kontakt */}
      <section id="contact" className="py-20 bg-white scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-6">Spremni za odmor? Javite nam se</h2>
          <p className="text-lg text-charcoal/80 mb-3">
            Bilo da planirate obiteljski odmor, wellness retreat ili romantični bijeg, Hlam vas čeka.
          </p>
          <p className="text-sm text-charcoal/60 mb-1">
            Nudimo i stomatološke aranžmane.{" "}
            <Link href="/hr/dental" className="text-sage hover:text-terracotta">
              Saznajte više →
            </Link>
          </p>
          <p className="text-sm text-charcoal/60 mb-8">
            Imamo trgovinu sira i ulja.{" "}
            <Link href="/hr/cheese_and_oil" className="text-sage hover:text-terracotta">
              Dođite kušati →
            </Link>
          </p>
          <div className="mb-8 space-y-2">
            <p>
              <a href="tel:+385992147068" className="text-xl font-serif text-terracotta hover:text-sage">+385 99 214 7068</a>
            </p>
            <p>
              <a href="mailto:example@example.com" className="text-charcoal hover:text-terracotta">example@example.com</a>
            </p>
          </div>
          <p className="text-lg text-charcoal/70 mb-8">
            Pitanja? Rado ćemo vam pomoći isplanirati savršen boravak.
          </p>
          <WhatsAppCTA
            message="Pozdrav! Zanima me vaša ponuda."
            label="Pošaljite poruku na WhatsApp"
            variant="white"
          />

          <div className="mt-12 pt-12 border-t border-sage/20 grid md:grid-cols-2 gap-8 text-center">
            <div>
              <p className="text-sage font-medium mb-2">Telefon</p>
              <a href="tel:+385992147068" className="text-charcoal hover:text-terracotta">+385 99 214 7068</a>
            </div>
            <div>
              <p className="text-sage font-medium mb-2">Lokacija</p>
              <p className="text-charcoal">Hlam · Punat, otok Krk<br />Hrvatska</p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <GoogleReviewChip lang="hr" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 Hlam. Sva prava pridržana.</p>
          <p className="text-xs opacity-50 mt-4">Odmor • Sir • Ulje • Priroda</p>
        </div>
      </footer>
    </div>
  );
}
