import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────────────────
   AXELOVA — Page d'accueil
   Navy & Or · Coaching · Formation · Conseil (à venir)
────────────────────────────────────────────────────────────────────────────── */

const services = [
  {
    icon: "🎯",
    title: "Coaching Individuel",
    desc: "Un accompagnement sur-mesure pour développer votre leadership, clarifier votre vision et atteindre vos objectifs professionnels avec méthode et profondeur.",
    href: "/coaching",
    cta: "Découvrir le coaching",
    available: true,
  },
  {
    icon: "📊",
    title: "Formation MS Project & Power BI",
    desc: "Maîtrisez les outils incontournables du chef de projet moderne. Des formations pratiques, contextualisées à la réalité africaine.",
    href: "/formation",
    cta: "Voir les formations",
    available: true,
  },
  {
    icon: "🌍",
    title: "Conseil en Management de Projet",
    desc: "Mise en place de PMO, accompagnement de programmes complexes, conformité aux procédures des bailleurs internationaux.",
    href: "#",
    cta: "Bientôt disponible",
    available: false,
  },
];

const stats = [
  { value: "22+", label: "Années d'expérience" },
  { value: "5+", label: "Certifications PM" },
  { value: "100M$+", label: "Projets pilotés" },
  { value: "3", label: "Pays d'intervention" },
];

const testimonials = [
  {
    text: "Une approche qui allie rigueur technique et intelligence émotionnelle. Exactement ce dont j'avais besoin pour franchir un cap dans ma carrière.",
    name: "M. K.",
    role: "Coordinateur de Projet, UEMOA",
  },
  {
    text: "La formation MS Project a transformé la façon dont mon équipe pilote nos projets. Concret, immédiatement applicable.",
    name: "A. D.",
    role: "Chef de Projet, Ministère des Finances",
  },
  {
    text: "Mon coach comprend vraiment les enjeux du développement international en Afrique. C'est rare et précieux.",
    name: "F. S.",
    role: "DGA, Agence d'Exécution de Projet",
  },
];

export default function Home() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative min-h-screen flex items-center bg-hero-pattern overflow-hidden">
        {/* Décoration dorée */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-5">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gold-400 blur-3xl" />
          <div className="absolute bottom-20 right-40 w-64 h-64 rounded-full bg-gold-300 blur-3xl" />
        </div>
        {/* Ligne décorative gauche */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-gold-500 to-transparent opacity-60" />

        <div className="max-w-6xl mx-auto px-4 py-32 relative z-10">
          <div className="max-w-3xl">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-5">
              Coaching · Formation · Conseil
            </p>
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6">
              Élevez votre{" "}
              <span className="text-gold-400">leadership</span>.
              <br />
              Maîtrisez vos{" "}
              <span className="text-gold-400">projets</span>.
            </h1>
            <p className="text-gray-300 text-xl leading-relaxed mb-10 max-w-2xl">
              AXELOVA accompagne les professionnels et dirigeants d'Afrique francophone
              et du monde vers l'excellence opérationnelle et le leadership transformationnel.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/coaching" className="btn-primary text-base px-8 py-4">
                Démarrer mon coaching
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
              <Link href="/formation" className="btn-outline text-base px-8 py-4">
                Voir les formations
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500">
          <span className="text-xs uppercase tracking-widest">Découvrir</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="bg-navy-900 py-14">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((s) => (
              <div key={s.label} className="text-center">
                <div className="font-heading text-4xl font-bold text-gold-400 mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-24 bg-white" id="services">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="section-subtitle">Ce que nous faisons</p>
            <h2 className="section-title">Trois piliers pour votre excellence</h2>
            <p className="text-gray-500 mt-4 max-w-xl mx-auto">
              Un écosystème de services complémentaires, conçus pour votre croissance professionnelle à court et long terme.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((s) => (
              <div
                key={s.title}
                className={`card p-8 ${!s.available ? "opacity-70" : ""}`}
              >
                <div className="text-4xl mb-5">{s.icon}</div>
                <h3 className="font-heading text-xl font-bold text-navy-800 mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{s.desc}</p>
                {s.available ? (
                  <Link
                    href={s.href}
                    className="text-gold-500 font-semibold text-sm flex items-center gap-1 hover:gap-3 transition-all"
                  >
                    {s.cta}
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                ) : (
                  <span className="text-gray-400 text-sm font-medium">{s.cta} →</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="py-24 bg-gray-50" id="a-propos">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            {/* Visual */}
            <div className="relative">
              <div className="w-full aspect-square max-w-md mx-auto bg-hero-pattern rounded-3xl flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 opacity-20">
                  <div className="absolute top-8 left-8 w-32 h-32 rounded-full bg-gold-400 blur-2xl" />
                  <div className="absolute bottom-8 right-8 w-24 h-24 rounded-full bg-gold-300 blur-2xl" />
                </div>
                <div className="relative z-10 text-center p-8">
                  <div className="font-heading text-6xl font-bold text-gold-400 mb-2">22</div>
                  <div className="text-white text-lg font-medium">ans d&apos;expérience</div>
                  <div className="text-gray-400 text-sm mt-2">en gestion de projets<br />d&apos;envergure internationale</div>
                </div>
              </div>
              {/* Badge certifications */}
              <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl p-4 max-w-xs">
                <p className="text-xs text-gray-500 mb-2 font-semibold uppercase tracking-wide">Certifications</p>
                <div className="flex flex-wrap gap-1.5">
                  {["PMP®", "PRINCE2®", "MSP", "PMO-CP®", "Scrum Master™", "Coach Certifié"].map((c) => (
                    <span key={c} className="text-xs bg-navy-50 text-navy-700 px-2.5 py-1 rounded-full font-medium border border-navy-100">
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div>
              <p className="section-subtitle">À propos</p>
              <h2 className="section-title mb-6">
                Un parcours d&apos;exception<br />au service de votre succès
              </h2>
              <p className="text-gray-600 leading-relaxed mb-5">
                Directeur de Programme (DGA) avec plus de 22 ans d&apos;expérience dans la gestion de projets
                d&apos;infrastructure et d&apos;énergie en Afrique, j&apos;ai piloté des programmes financés
                par la MCC, la Banque Mondiale, la BAD et l&apos;USAID, pour des valeurs cumulées de
                plusieurs centaines de millions de dollars.
              </p>
              <p className="text-gray-600 leading-relaxed mb-8">
                Certifié PMP®, PRINCE2®, MSP, PMO-CP®, Scrum Master™ et coach professionnel,
                j&apos;ai fondé AXELOVA pour mettre cette expertise rare au service des professionnels
                qui veulent exceller dans leurs projets et leur leadership.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link href="/coaching" className="btn-primary">
                  Travailler avec moi
                </Link>
                <Link href="/contact" className="text-navy-700 font-semibold text-sm flex items-center gap-1 hover:text-gold-500 transition-colors">
                  Me contacter →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section className="py-24 bg-navy-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-14">
            <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-3">Témoignages</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-white">Ce qu&apos;ils en disent</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((t) => (
              <div key={t.name} className="bg-navy-800 rounded-2xl p-8 border border-navy-700">
                <div className="text-gold-400 text-4xl mb-4">&ldquo;</div>
                <p className="text-gray-300 text-sm leading-relaxed mb-6 italic">{t.text}</p>
                <div className="border-t border-navy-700 pt-4">
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs">{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ── */}
      <section className="py-24 bg-gradient-to-br from-gold-500 to-gold-400">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <h2 className="font-heading text-4xl font-bold text-navy-900 mb-5">
            Prêt à passer au niveau supérieur ?
          </h2>
          <p className="text-navy-700 text-lg mb-10">
            Réservez une séance de découverte gratuite (30 min) et explorons ensemble comment AXELOVA peut transformer votre trajectoire professionnelle.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/coaching#reserver"
              className="inline-flex items-center gap-2 bg-navy-900 text-white font-semibold
                         px-8 py-4 rounded-full hover:bg-navy-800 transition-all duration-300 shadow-xl"
            >
              Réserver ma séance gratuite
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border-2 border-navy-800 text-navy-800
                         font-semibold px-8 py-4 rounded-full hover:bg-navy-900 hover:text-white
                         hover:border-navy-900 transition-all duration-300"
            >
              Poser une question
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
