import Link from "next/link";

const formations = [
  {
    icon: "📅",
    title: "MS Project Avancé pour Chefs de Projet",
    level: "Intermédiaire → Avancé",
    duration: "15h · Asynchrone",
    price: "149 €",
    desc: "Maîtrisez MS Project de A à Z pour planifier, suivre et piloter vos projets avec précision. Exemples tirés de projets réels africains.",
    modules: ["Paramétrage avancé du projet", "Gestion des ressources et budgets", "Suivi et courbe S", "Rapports et tableaux de bord", "Cas pratiques projets infrastructure"],
    status: "coming",
  },
  {
    icon: "📊",
    title: "Power BI pour PMO & Chefs de Projet",
    level: "Débutant → Intermédiaire",
    duration: "12h · Asynchrone",
    price: "129 €",
    desc: "Créez des tableaux de bord de pilotage percutants pour votre PMO. Transformez vos données Excel et MS Project en visualisations décisionnelles.",
    modules: ["Connexion et nettoyage des données", "Modèle de données DAX", "Visualisations avancées", "Dashboard PMO complet", "Publication et partage"],
    status: "coming",
  },
  {
    icon: "🎓",
    title: "Bootcamp Préparation PMP®",
    level: "Professionnel",
    duration: "6 semaines · Live + Replay",
    price: "350 €",
    desc: "Préparez et réussissez votre certification PMP® avec 35 PDU incluses. Formateur certifié avec 22 ans d'expérience terrain.",
    modules: ["Toutes les 5 domaines de performance PMBOK® 7", "35 PDU certifiantes incluses", "Simulateurs d'examens illimités", "Sessions live hebdomadaires", "Accès à vie aux replays"],
    status: "coming",
  },
];

export default function FormationPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative pt-32 pb-20 bg-hero-pattern overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 right-20 w-80 h-80 rounded-full bg-gold-400 blur-3xl" />
        </div>
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Formations Professionnelles
          </p>
          <h1 className="font-heading text-5xl md:text-6xl font-bold text-white leading-tight mb-6 max-w-3xl">
            Maîtrisez les outils<br />
            <span className="text-gold-400">qui font la différence</span>
          </h1>
          <p className="text-gray-300 text-xl max-w-2xl leading-relaxed mb-10">
            Des formations pratiques, contextualisées à la réalité africaine, dispensées par un expert
            certifié avec 22 ans de terrain.
          </p>
          <div className="inline-flex items-center gap-3 bg-gold-500/20 border border-gold-500/30 text-gold-300 px-6 py-3 rounded-full text-sm font-medium">
            🔔 Formations en cours de préparation — Inscrivez-vous pour être notifié en priorité
          </div>
        </div>
      </section>

      {/* FORMATIONS */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Catalogue</p>
            <h2 className="section-title">Nos formations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {formations.map((f) => (
              <div key={f.title} className="card p-8 relative overflow-hidden">
                {f.status === "coming" && (
                  <div className="absolute top-4 right-4 bg-navy-100 text-navy-600 text-xs font-semibold px-3 py-1 rounded-full">
                    Bientôt
                  </div>
                )}
                <div className="text-3xl mb-4">{f.icon}</div>
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs bg-gold-50 text-gold-700 px-2.5 py-1 rounded-full font-medium">{f.level}</span>
                  <span className="text-xs text-gray-400">{f.duration}</span>
                </div>
                <h3 className="font-heading text-lg font-bold text-navy-800 mb-2 leading-snug">{f.title}</h3>
                <p className="text-gold-500 font-bold text-xl mb-4">{f.price}</p>
                <p className="text-gray-500 text-sm leading-relaxed mb-5">{f.desc}</p>
                <ul className="space-y-1.5 mb-6">
                  {f.modules.map((m) => (
                    <li key={m} className="flex items-start gap-2 text-xs text-gray-600">
                      <span className="text-gold-400 font-bold mt-0.5 flex-shrink-0">✓</span>
                      {m}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact?sujet=formation"
                  className="btn-outline w-full justify-center text-sm"
                >
                  M&apos;inscrire en avant-première
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA NEWSLETTER */}
      <section className="py-20 bg-navy-900">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <h2 className="font-heading text-3xl font-bold text-white mb-4">
            Soyez notifié en premier
          </h2>
          <p className="text-gray-400 mb-8">
            Laissez votre email pour recevoir une notification dès l&apos;ouverture des inscriptions
            et bénéficier du tarif early bird (–30%).
          </p>
          <form className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="votre@email.com"
              className="flex-1 px-4 py-3 rounded-xl border border-navy-700 bg-navy-800 text-white placeholder-gray-500 focus:border-gold-400 focus:ring-2 focus:ring-gold-400/20 outline-none text-sm"
            />
            <button type="submit" className="btn-primary px-6 py-3 whitespace-nowrap text-sm">
              Je m&apos;inscris
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
