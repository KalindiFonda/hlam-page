import Navigation from "@/components/Navigation";
import WhatsAppCTA from "@/components/WhatsAppCTA";

export const metadata = {
  title: "House Rules - Hlam",
  description: "House rules for staying at Hlam, an off-grid property in nature on the island of Krk.",
};

const rulesEn = [
  "The house has no municipal connection for electricity or water. We have solar power for lighting, and we collect rainwater, so please use sparingly. Electricity use is limited: lighting, the fridge, and smaller appliances (computers, phones, screens).",
  "For the water heater and larger appliances, the generator must be switched on.",
  "The property is fenced. The entrance gate should always be kept closed (so animals don't get in). The same goes for house doors and windows when we're not there.",
  "Otherwise, look after everything as if it were your own.",
  "When leaving, if there are multiple cars, you can lock the keys into the lockers so you don't carry them with you. Just make sure the gate is locked.",
  "Pets are welcome.",
];

const rulesHr = [
  "Kuća nema gradski priključak za struju ni vodu, nego imamo solarnu energiju za svjetlo, a vodu skupljamo od kiše, pa vas molimo da trošite štedljivo. Potrošnja struje je ograničena, samo za svjetlo, frižider i manje potrošače (računala, telefone).",
  "Za bojler i veće potrošače mora se uklopiti agregat.",
  "Imanje je ograđeno, pa porton mora uvijek biti zatvoren (da ne ulaze životinje), isto vrijedi i za vrata i prozore kuće kad nas nema.",
  "Ostalo čuvajte kao da je vaše.",
  "Kod odlaska, ako ima više auta, ključeve možete zaključati u ormariće da ih ne nosite sa sobom. Samo treba provjeriti da je porton zaključan.",
  "Kućni ljubimci su dobrodošli.",
];

export default function HouseRules() {
  return (
    <div className="bg-cream text-charcoal">
      <Navigation />

      {/* Header */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl text-sage mb-4">House Rules · Kućna pravila</h1>
          <p className="text-lg text-charcoal/70">
            A few things to know about staying off-grid, in nature.
          </p>
        </div>
      </section>

      {/* Rules */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-8 items-start">
            {/* English */}
            <div className="bg-sage/5 p-8 rounded-lg">
              <h2 className="text-sage font-serif text-2xl mb-4">House Rules</h2>
              <p className="text-charcoal mb-6 leading-relaxed">
                Welcome to Krk &amp; Hlam, and our property in nature among forest animals and the sheep and cows.
              </p>
              <ul className="space-y-4 text-charcoal">
                {rulesEn.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span className="text-sage shrink-0">✓</span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal/70 mt-6">For anything, contact us.</p>
            </div>

            {/* Croatian */}
            <div className="bg-olive/5 p-8 rounded-lg">
              <h2 className="text-sage font-serif text-2xl mb-4">Kućna pravila</h2>
              <p className="text-charcoal mb-6 leading-relaxed">
                Dobrodošli na Krk i na Hlam. Nalazite se na imanju u prirodi, među šumskim životinjama te ovcama i kravama.
              </p>
              <ul className="space-y-4 text-charcoal">
                {rulesHr.map((rule) => (
                  <li key={rule} className="flex gap-3">
                    <span className="text-sage shrink-0">✓</span>
                    <span className="leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
              <p className="text-charcoal/70 mt-6">Za bilo što nazovite.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-16 bg-sage/5 scroll-mt-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-lg text-charcoal/70 mb-6">
            Questions about your stay? · Pitanja o boravku?
          </p>
          <WhatsAppCTA message="Hi Hlam! I have a question about the house rules." />
          <p className="mt-6">
            <a href="tel:+385992147068" className="text-charcoal hover:text-terracotta">+385 99 214 7068</a>
          </p>
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
