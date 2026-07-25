import Image from "next/image";
import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";
import ClickableImage from "@/components/ClickableImage";
import GoogleReviewChip from "@/components/GoogleReviewChip";

export const metadata = {
  title: "Sir i ulje - Hlam",
  description: "Domaći sir i maslinovo ulje iz Sirane Hlam. Proizvedeno s pažnjom na otoku Krku.",
};

export default function CheeseHr() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/cheese_police.jpg"
            alt="Domaći sir"
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
            Domaći sir i maslinovo ulje
          </p>
          <p className="text-lg text-white/90 drop-shadow">
            Izrađeno s tradicijom. Ukorijenjeno u prirodi.
          </p>
        </div>
      </section>

      {/* O sirani */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none mb-12">
            <p className="text-lg text-charcoal leading-relaxed">
              Sirana Hlam proizvodi sir i maslinovo ulje u Puntu na otoku Krku. Specijalizirani smo za tradicionalne hrvatske mliječne proizvode: sir od kvalitetnog mlijeka, uz ponudu vrhunskih maslinovih ulja, kao odraz bogate poljoprivredne baštine ovoga kraja.
            </p>
            <p className="text-lg text-charcoal leading-relaxed mt-4">
              Posjetitelji su dobrodošli na kušanje i upoznavanje s procesom proizvodnje, zanimljiva postaja za sve koji istražuju hrvatsku gastronomiju.
            </p>
          </div>

          {/* Naši sirevi */}
          <div className="mb-16 bg-white p-8 rounded-lg shadow-sm">
            <h2 className="text-center text-sage font-serif text-3xl mb-8">Naši sirevi</h2>
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <ClickableImage
                  src="/images/cheese_closeup.jpg"
                  alt="Domaći sir izbliza"
                  width={500}
                  height={400}
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="space-y-6">
                <p className="text-lg text-charcoal leading-relaxed">
                  Sir radimo u malim serijama od kvalitetnog mlijeka, po tradicionalnim hrvatskim receptima.
                </p>
                <p className="text-lg text-charcoal leading-relaxed">
                  Neke kolute ostavljamo prirodne, druge aromatiziramo kaduljom ili tartufima, a zatim ih pustimo da zriju dok nisu spremni.
                </p>
              </div>
            </div>
          </div>

          {/* Sir za svakoga */}
          <div className="mb-16 grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 order-2 md:order-1">
              <h2 className="text-sage font-serif text-3xl">Sir za svačiji ukus</h2>
              <p className="text-lg text-charcoal leading-relaxed">
                Od mladog do starog, od prirodnog do aromatiziranog: postoji sir za svaki stol.
              </p>
              <ul className="space-y-2 text-charcoal text-lg">
                <li className="flex gap-2"><span className="text-terracotta">·</span> Tvrdi sir</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Klasični</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Kadulja</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Lavanda</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Papar</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> Tartufi</li>
                <li className="flex gap-2"><span className="text-terracotta">·</span> …i više</li>
              </ul>
              <p className="text-charcoal/70 leading-relaxed">
                Mladi · Zreli · Stari
              </p>
            </div>
            <div className="order-1 md:order-2">
              <ClickableImage
                src="/images/cheese_tower.jpg"
                alt="Naslagani sirevi Hlam na dasci pod maslinama"
                width={500}
                height={760}
                className="w-full h-auto rounded-lg shadow-sm mx-auto max-w-sm"
              />
            </div>
          </div>

          {/* Recenzije */}
          <div className="grid md:grid-cols-2 gap-8 items-stretch mb-16">
            <div className="flex flex-col gap-4">
              <ClickableImage
                src="/images/chese_offer.jpg"
                alt="Sirevi Sir Hlam s etiketom, proizvod Hrvatske"
                width={500}
                height={760}
                className="w-full h-full object-cover object-top rounded-lg shadow-sm"
              />
              <div className="text-center mt-8">
                <GoogleReviewChip lang="hr" />
              </div>
            </div>
            <div className="flex flex-col justify-center gap-6">
              <div className="bg-white border-l-4 border-terracotta p-8 rounded-r-lg shadow-sm">
                <p className="text-terracotta text-sm mb-3">★★★★★</p>
                <p className="text-lg text-charcoal italic leading-relaxed">
                  "Tvrdi sir je na tjestenini ukusniji i aromatičniji od pecorina ili parmezana. Odlična alternativa i osvježavajuća promjena. Ostali sirevi s kaduljom i tartufima su božanstveni. Kupujem ih svako ljeto i čuvam za doček Nove godine za prijatelje. Prvi pojedu sav sir iz ove sirane. Za mene je apsolutno savršen."
                </p>
              </div>
              <div className="bg-white border-l-4 border-terracotta p-8 rounded-r-lg shadow-sm">
                <p className="text-terracotta text-sm mb-3">★★★★★</p>
                <p className="text-lg text-charcoal italic leading-relaxed">
                  "Nazvali smo unaprijed, što je sve olakšalo. Vlasnik je vrlo ljubazan, da vam kušati sve sireve, a sir je mirisao i bio nevjerojatno ukusan."
                </p>
              </div>
            </div>
          </div>

          {/* Ulja */}
          <div className="bg-olive/10 p-12 rounded-lg mb-16">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-olive font-serif text-3xl mb-6">Ekstra djevičansko maslinovo ulje i ulje s tartufima</h2>
                <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                  Proizvedena od maslina koje okružuju naše imanje, ulja se prešaju tradicionalnim metodama. Bogata, aromatična i duboko ukorijenjena u ovaj kraj. Svaka boca priča priču o generacijama brige i povezanosti s ovom zemljom.
                </p>
                <p className="text-lg text-charcoal/80 mb-4 leading-relaxed">
                  Uz ekstra djevičansko maslinovo ulje radimo i ulje s tartufima, omiljeno među gostima.
                </p>
              </div>
              <ClickableImage
                src="/images/two_oils.jpg"
                alt="Boce ekstra djevičanskog maslinovog ulja i ulja s tartufima"
                width={500}
                height={840}
                className="w-full h-auto rounded-lg shadow-sm mx-auto max-w-xs"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Posjetite nas */}
      <section id="contact" className="py-20 bg-sage/5 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-6">Posjetite nas</h2>
          <p className="text-lg text-charcoal/70 mb-4">
            Svratite u siranu u Puntu na Krku i kušajte naše sireve i maslinovo ulje, izravno s izvora.
          </p>
          <p className="text-lg text-charcoal/70 mb-6">
            Za dostupnost i cijene javite nam se izravno.
          </p>
          <p className="text-lg text-charcoal mb-2">
            Za rezervaciju kušanja nazovite:
          </p>
          <a
            href="tel:+385992147068"
            className="inline-block text-2xl font-serif text-terracotta hover:text-sage mb-2"
          >
            +385 99 214 7068
          </a>
          <p className="mb-8">
            <a href="mailto:example@example.com" className="text-charcoal hover:text-terracotta">example@example.com</a>
          </p>

          <div className="mb-8">
            <WhatsAppCTA
              message="Pozdrav! Zanimaju me vaši sirevi i maslinovo ulje."
              label="Pošaljite poruku na WhatsApp"
            />
          </div>

          <div className="pt-8 border-t border-sage/20">
            <p className="text-sage font-medium mb-2">Posjetite nas</p>
            <p className="text-charcoal mb-4">Sirana Hlam · Ul. 17. travnja 3<br />51521 Punat, Krk, Hrvatska</p>
            <GoogleReviewChip lang="hr" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-charcoal text-cream py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm opacity-70">© 2026 Hlam. Sva prava pridržana.</p>
          <p className="text-xs opacity-50 mt-4">Sirana Hlam · Punat, Krk, Hrvatska</p>
        </div>
      </footer>
    </div>
  );
}
