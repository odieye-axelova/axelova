import Link from "next/link";
import ContactForm from "@/components/ContactForm";
import CalendlyWidget from "@/components/CalendlyWidget";

const offres = [
  {
    icon: "👤",
    title: "Coaching Individuel",
    duration: "Programme 3 mois",
    sessions: "10 séances × 60 min",
    price: "Sur devis",
    desc: "Un accompagnement personnalisé pour clarifier votre vision, renforcer votre leadership et atteindre vos objectifs stratégiques. Idéal pour dirigeants, DGA, chefs de programmes.",
    features: [
      "Diagnostic initial complet (2h)",
      "10 séances individuelles en visio ou présentiel",
      "Support entre séances (messagerie dédiée)",
      "Outils et ressources personnalisés",
      "Bilan final avec plan d'action à 12 mois",
    ],
  },
  {
    icon: "👥",
    title: "Programme Groupe",
    duration: "8 semaines",
    sessions: "8 séances collectives",
    price: "À partir de 500 €",
    desc: "Développez votre leadership dans une dynamique de groupe inspirante. Partage d'expériences, intelligence collective, transformation durable.",
    features: [
      "Groupe de 6 à 12 participants",
      "8 séances de groupe en visio (90 min)",
      "Exercices pratiques entre séances",
      "Accès à la communauté AXELOVA",
      "Suivi individuel optionnel",
    ],
  },
  {
    icon: "🏢",
    title: "Coaching d'Équipe",
    duration: "Demi-journée ou journée",
    sessions: "Session sur-mesure",
    price: "Sur devis",
    desc: "Renforcez la cohésion, la communication et la performance de votre équipe de direction ou de gestion de projets.",
    features: [
      "Diagnostic préalable de l'équipe",
      "Session de cohésion (présentiel recommandé)",
      "Outils de collaboration et communication",
      "Plan d'action collectif",
      "Suivi à 30 et 60 jours",
    ],
  },
];

const approach = [
  { step: "01", title: "Découverte", desc: "Une séance gratuite de 30 min pour comprendre votre situation, vos objectifs et valider l'adéquation de l'accompagnement." },
  { step: "02", title: "Diagnostic", desc: "Exploration approfondie de votre contexte, vos forces, vos défis et la définition de vos objectifs de coaching." },
  { step: "03", title: "Transformation", desc: "Des séances structurées alliant questionnement puissant, outils de coaching certifiés et exercices pratiques concrets." },
  { step: "04", title: "Intégration", desc: "Ancrage des apprentissages dans votre réalité professionnelle quotidienne et construction d'un plan d'action durable." },
];

export default function CoachingPage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative pt-32 pb-20 bg-hero-pattern overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-gold-400 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Coaching Professionnel Certifié
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Devenez le leader<br />que vous portez en vous
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
            Un coaching ancré dans la réalité africaine et internationale, porté par 22 ans
            d&apos;expérience terrain dans des environnements à haute exigence.
          </p>
          <div className="flex flex-wrap gap-4">
            <a href="#reserver" className="btn-primary text-base px-8 py-4">
              Séance découverte gratuite
            </a>
            <a href="#offres" className="btn-outline text-base px-8 py-4">
              Voir les programmes
            </a>
          </div>
        </div>
      </section>

      {/* ── MON APPROCHE ── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Ma démarche</p>
            <h2 className="section-title">Un coaching qui transforme vraiment</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Certifié coach professionnel (Beautiful Soul — Foundation), j&apos;allie rigueur méthodologique,
              intelligence émotionnelle et connaissance profonde des enjeux du développement en Afrique.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {approach.map((a) => (
              <div key={a.step} className="relative">
                <div className="text-6xl font-heading font-bold text-gray-100 mb-3 leading-none">{a.step}</div>
                <h3 className="font-heading text-lg font-bold text-navy-800 mb-2">{a.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DIFFÉRENCIATEUR ── */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">Ce qui fait la différence</p>
          <h2 className="font-heading text-3xl font-bold text-white mb-8">
            Un coach qui a vécu ce que vous vivez
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
            {[
              { icon: "🎓", title: "Double expertise", desc: "La combinaison unique d'une certification de coaching et de 22 ans de leadership opérationnel dans des projets de développement international." },
              { icon: "🌍", title: "Contexte africain", desc: "Je comprends les pressions spécifiques des managers africains : parties prenantes multiples, bailleurs exigeants, contraintes politiques." },
              { icon: "⚡", title: "Orientation résultats", desc: "Chaque séance génère des prises de conscience concrètes et des actions mesurables. Pas de théorie sans application terrain." },
            ].map((item) => (
              <div key={item.title} className="bg-navy-800 rounded-2xl p-6 border border-navy-700">
                <div className="text-3xl mb-3">{item.icon}</div>
                <h3 className="text-white font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── OFFRES ── */}
      <section className="py-24 bg-gray-50" id="offres">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Programmes</p>
            <h2 className="section-title">Choisissez votre format</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {offres.map((o, i) => (
              <div
                key={o.title}
                className={`card p-8 ${i === 0 ? "ring-2 ring-gold-400 ring-offset-2" : ""}`}
              >
                {i === 0 && (
                  <div className="inline-block bg-gold-gradient text-navy-900 text-xs font-bold px-3 py-1 rounded-full mb-4 uppercase tracking-wide">
                    Recommandé
                  </div>
                )}
                <div className="text-3xl mb-4">{o.icon}</div>
                <h3 className="font-heading text-xl font-bold text-navy-800 mb-1">{o.title}</h3>
                <p className="text-gray-400 text-xs mb-1">{o.duration} · {o.sessions}</p>
                <p className="text-gold-500 font-bold text-lg mb-4">{o.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{o.desc}</p>
                <ul className="space-y-2 mb-8">
                  {o.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm text-gray-600">
                      <span className="text-gold-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {f}
                    </li>
                  ))}
                </ul>
                <a href="#reserver" className={i === 0 ? "btn-primary w-full justify-center" : "btn-outline w-full justify-center"}>
                  Réserver
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── RÉSERVATION ── */}
      <section className="py-24 bg-white" id="reserver">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Passons à l&apos;action</p>
            <h2 className="section-title">Réservez votre séance découverte</h2>
            <p className="text-gray-500 mt-4 max-w-lg mx-auto">
              60 minutes gratuites pour explorer votre situation et valider ensemble si notre collaboration est la bonne pour vous. Sans engagement.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Calendly */}
            <div>
              <h3 className="font-heading text-xl font-bold text-navy-800 mb-2">
                📅 Choisissez un créneau
              </h3>
              <p className="text-gray-500 text-sm mb-6">Réservez directement dans mon agenda en ligne.</p>
              <CalendlyWidget />
            </div>

            {/* Formulaire */}
            <div>
              <h3 className="font-heading text-xl font-bold text-navy-800 mb-2">
                ✉️ Envoyez un message
              </h3>
              <p className="text-gray-500 text-sm mb-6">Préférez-vous qu&apos;on vous rappelle ? Décrivez votre situation.</p>
              <ContactForm context="coaching" />
            </div>
          </div>

          {/* WhatsApp CTA */}
          <div className="mt-12 text-center">
            <p className="text-gray-500 text-sm mb-4">Vous préférez une réponse immédiate ?</p>
            <a
              href="https://wa.me/221XXXXXXXXX?text=Bonjour%2C+je+souhaite+en+savoir+plus+sur+le+coaching+AXELOVA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white
                         font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
            >
              <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Discutons sur WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
