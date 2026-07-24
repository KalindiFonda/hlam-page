import Image from "next/image";
import Navigation from "@/components/Navigation";
import ImageGallery from "@/components/ImageGallery";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "Smještaj - Hlam",
  description: "Rezervirajte boravak na Hlamu. Dvije kuće s prekrasnim pogledom u srcu prirode.",
};

export default function StayHr() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Hero */}
      <section className="pt-32 pb-20 relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/vela_entrace_upstairs_pretty.jpeg"
            alt="Prostori za odmor"
            fill
            className="object-cover object-top"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="relative z-10 text-center max-w-2xl px-4">
          <h1 className="text-5xl md:text-6xl text-white mb-6 drop-shadow-lg">
            Vaš odmor vas čeka
          </h1>
          <p className="text-xl md:text-2xl text-white/90 font-light drop-shadow">
            Dvije jedinstvene kuće. Beskrajna priroda. Vaše utočište.
          </p>
        </div>
      </section>

      {/* Kuće */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Vela */}
          <div className="mb-20">
            <div className="mb-8">
              <h2 className="text-sage mb-2">Vela</h2>
              <p className="text-lg text-charcoal/70">Veća kuća • Dva kata • Puno kutaka za opuštanje i druženje</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start mb-8">
              <div>
                <div className="space-y-4 mb-6">
                  <h3 className="text-terracotta font-serif text-xl">Smještaj</h3>
                  <ul className="space-y-2 text-charcoal">
                    <li className="flex gap-2"><span className="text-sage">✓</span> 3 spavaće sobe</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Bračni krevet (glavna soba)</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Soba s dva odvojena kreveta</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Jednokrevetna soba</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> 2 kuhinje s dnevnim boravkom</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> 2 kupaonice</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Dva trijema i velika terasa</li>
                  </ul>
                </div>

                <div className="space-y-4">
                  <h3 className="text-terracotta font-serif text-xl">Istaknuto</h3>
                  <ul className="space-y-2 text-charcoal text-sm">
                    <li className="flex gap-2"><span className="text-terracotta">★</span> Prostrana terasa s pogledom na maslinik</li>
                    <li className="flex gap-2"><span className="text-terracotta">★</span> Dnevni boravak s kaminom</li>
                  </ul>
                </div>
              </div>

              <ImageGallery house="vela" />
            </div>
          </div>

          <div className="border-t border-sage/20 pt-20 mb-20">
            {/* Mala */}
            <div className="mb-8">
              <h2 className="text-sage mb-2">Mala</h2>
              <p className="text-lg text-charcoal/70">Ugodna kuća • Jedna etaža • Uz vidikovac</p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <div className="space-y-4 mb-6">
                  <h3 className="text-terracotta font-serif text-xl">Smještaj</h3>
                  <ul className="space-y-2 text-charcoal">
                    <li className="flex gap-2"><span className="text-sage">✓</span> 4 spavaće sobe</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Kuhinja</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Ugodan dnevni boravak</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Trijem</li>
                    <li className="flex gap-2"><span className="text-sage">✓</span> Kupaonica</li>
                  </ul>
                </div>
              </div>

              <ImageGallery house="mala" />
            </div>
          </div>

          {/* Idealno za */}
          <div className="border-t border-sage/20 pt-16">
            <h3 className="text-terracotta font-serif text-2xl mb-8 text-center">Idealno za</h3>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 text-center">
              {[
                "Obitelji i grupe",
                "Parove",
                "Wellness i yoga retreate",
                "Mirno uranjanje u prirodu",
                "Stomatološke aranžmane",
                "Kućne ljubimce",
              ].map((label) => (
                <div key={label} className="bg-sage/5 p-6 rounded-lg">
                  <p className="text-terracotta text-2xl mb-2">★</p>
                  <p className="text-charcoal">{label}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 max-w-2xl mx-auto text-center space-y-3">
              <p className="text-lg text-charcoal/80">
                Rezervirajte cijelo imanje ili samo jednu kuću. Vela i Mala udaljene su više od 100 metara, svaka sa svojom privatnošću.
              </p>
              <p className="text-charcoal/60">
                Okruženi šumom i prirodom sa svih strana.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Imanje i priroda */}
      <section className="py-20 bg-cream">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-sage mb-3">Imanje i priroda</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Maslinik, viseća mreža u hladu, vidikovac i jadranski zalasci sunca: krajolik koji okružuje obje kuće.
            </p>
          </div>
          <ImageGallery house="grounds" />
        </div>
      </section>

      {/* Aktivnosti i okolica */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-sage mb-3">Aktivnosti i okolica</h2>
            <p className="text-lg text-charcoal/70 max-w-2xl mx-auto">
              Pješačke i biciklističke staze kreću ravno s imanja. More i plaže su na kratkoj vožnji, uz lokalne kušaonice vina i brojne restorane na otoku. Zračna luka udaljena je 40 minuta vožnje.
            </p>
          </div>
          <ImageGallery house="activities" />
        </div>
      </section>

      {/* Rezervacija */}
      <section id="contact" className="py-20 bg-sage/5 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-sage mb-8">Rezervirajte svoj boravak</h2>
          <p className="text-lg text-charcoal/70 mb-8">
            Recite nam svoju viziju. Grupe su dobrodošle. Zajedno ćemo stvoriti savršeno iskustvo.
          </p>
          <p className="mb-6 text-sm text-charcoal/60">
            Nudimo i stomatološke aranžmane. Javite nam se za detalje.
          </p>
          <p className="mb-6">
            <a href="tel:+385992147068" className="text-xl font-serif text-terracotta hover:text-sage">+385 99 214 7068</a>
          </p>
          <WhatsAppCTA
            message="Pozdrav! Zanima me smještaj na Hlamu."
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
