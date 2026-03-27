import Link from "next/link";

/* ──────────────────────────────────────────────────────────────────────────────
   AXELOVA — Page Conseil en Management de Projet
   Positionnement haut de gamme · Afrique francophone & international
   Pas de tarifs · Pas de référence MCC · CTA : nous contacter
────────────────────────────────────────────────────────────────────────────── */

const expertises = [
  {
    icon: "🏛️",
    title: "Mise en place de PMO",
    desc: "Conception et déploiement de bureaux de management de projet (PMO) adaptés à la structure et aux ambitions de votre organisation. Gouvernance, outils, processus et montée en compétences des équipes.",
  },
  {
    icon: "📐",
    title: "Management de Programmes Complexes",
    desc: "Pilotage de programmes multi-composantes à forts enjeux financiers et institutionnels. Coordination des parties prenantes, gestion des risques, reporting de performance et conformité aux exigences des bailleurs.",
  },
  {
    icon: "🔍",
    title: "Audit & Diagnostic de Projets",
    desc: "Évaluation indépendante de la santé de vos projets ou programmes : délais, coûts, qualité, gouvernance. Identification des points de blocage et recommandations concrètes pour la remise sur rails.",
  },
  {
    icon: "📋",
    title: "Conformité & Procédures Bailleurs",
    desc: "Accompagnement dans la maîtrise des procédures et exigences des organisations et bailleurs internationaux. Préparation aux audits, fiduciaires, revues de performance et évaluations externes.",
  },
  {
    icon: "🎓",
    title: "Renforcement de Capacités",
    desc: "Programmes de développement des compétences en gestion de projet pour les équipes projet et les cadres. Formation sur les référentiels PMI, PRINCE2, MSP et les outils de pilotage (MS Project, Power BI).",
  },
  {
    icon: "🌍",
    title: "Accompagnement Stratégique",
    desc: "Conseil en structuration de portefeuille de projets, alignement stratégique des investissements et optimisation des ressources. Une vision d'ensemble pour maximiser la valeur créée.",
  },
];

const differentiateurs = [
  {
    icon: "⭐",
    title: "22+ ans d'expérience terrain",
    desc: "Une expertise forgée sur des projets d'envergure en Afrique et à l'international, avec des résultats mesurables.",
  },
  {
    icon: "🏆",
    title: "Certifications internationales",
    desc: "PMP®, PRINCE2®, MSP®, PMO-CP® — des standards reconnus mondialement, appliqués à la réalité africaine.",
  },
  {
    icon: "🤝",
    title: "Approche sur-mesure",
    desc: "Pas de solutions génériques. Chaque mission est pensée spécifiquement selon votre contexte, vos contraintes et vos objectifs.",
  },
  {
    icon: "📈",
    title: "Orienté résultats",
    desc: "Des recommandations concrètes et actionnables. Notre valeur se mesure à la performance réelle de vos projets.",
  },
];

const secteurs = [
  "Développement & Infrastructures",
  "Eau, Assainissement & Environnement",
  "Énergie & Transition Énergétique",
  "Agriculture & Développement Rural",
  "Santé & Protection Sociale",
  "Éducation & Formation Professionnelle",
  "Gouvernance & Réformes Institutionnelles",
  "Numérique & Transformation Digitale",
];

export default function ConseilPage() {
  return (
    <>

      {/* ── BANNIÈRE LANCEMENT ────────────────────────────────────────────────── */}
      

      {/* ── HERO ─────────────────────────────────────────────────────────────── */}
      <section className="bg-hero-pattern text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-navy-950/40" />
        <div className="relative max-w-6xl mx-auto px-4 text-left">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">
            Conseil en Management de Projet & Programmes
          </p>
          <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transformez vos projets<br />
            en <span className="text-gold-400">succès mesurables</span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mb-10 leading-relaxed">
            AXELOVA accompagne les organisations africaines et internationales dans la structuration,
            le pilotage et la performance de leurs projets et programmes à forts enjeux.
          </p>
          <div className="inline-flex items-center gap-3 bg-gold-500/20 border border-gold-500/30 text-gold-300 px-6 py-3 rounded-full text-sm font-medium mb-8">
            🚀 Activité de conseil en cours de lancement — <Link href="/contact" className="underline underline-offset-2 hover:text-gold-200 transition-colors">Prenez contact dès maintenant</Link>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Discutons de votre projet
            </Link>
            <a href="#expertises" className="btn-outline text-base px-8 py-3.5">
              Nos domaines d&apos;expertise
            </a>
          </div>
        </div>
      </section>

      {/* ── STATS ────────────────────────────────────────────────────────────── */}
      <section className="bg-navy-800 py-10 border-b border-navy-700">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "22+", label: "Années d'expérience" },
              { value: "100M$+", label: "Projets pilotés" },
              { value: "5+", label: "Certifications PM" },
              { value: "3+", label: "Pays d'intervention" },
            ].map((s) => (
              <div key={s.label}>
                <div className="font-heading text-3xl font-bold text-gold-400 mb-1">{s.value}</div>
                <div className="text-gray-400 text-sm">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── DOMAINES D'EXPERTISE ─────────────────────────────────────────────── */}
      <section id="expertises" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Nos domaines d&apos;expertise</h2>
            <p className="section-subtitle">
              Des missions de conseil ciblées, menées avec la rigueur des standards internationaux
              et une connaissance approfondie des réalités africaines.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((e) => (
              <div key={e.title} className="card hover:border-gold-300 hover:-translate-y-1 transition-all duration-200">
                <div className="text-4xl mb-4">{e.icon}</div>
                <h3 className="font-heading font-bold text-navy-900 text-lg mb-3">{e.title}</h3>
                <p className="text-gray-600 leading-relaxed text-sm">{e.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SECTEURS ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="section-title">Secteurs d&apos;intervention</h2>
            <p className="section-subtitle">
              Une expertise transversale au service des projets de développement et des organisations publiques et privées.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {secteurs.map((s) => (
              <span
                key={s}
                className="bg-white border border-navy-200 text-navy-700 rounded-full px-5 py-2.5 text-sm font-medium shadow-sm hover:border-gold-400 hover:text-gold-600 transition-colors cursor-default"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ── POURQUOI AXELOVA ─────────────────────────────────────────────────── */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="section-title">Pourquoi choisir AXELOVA ?</h2>
            <p className="section-subtitle">
              Une combinaison rare de rigueur méthodologique, d&apos;expérience de terrain et de proximité culturelle.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {differentiateurs.map((d) => (
              <div key={d.title} className="text-center p-6 rounded-2xl bg-navy-50 border border-navy-100 hover:border-gold-300 transition-colors">
                <div className="text-4xl mb-4">{d.icon}</div>
                <h3 className="font-heading font-bold text-navy-900 mb-3">{d.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{d.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── APPROCHE ─────────────────────────────────────────────────────────── */}
      <section className="py-20 bg-navy-900 text-white">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Notre <span className="text-gold-400">approche</span>
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Chaque mission suit une démarche structurée, transparente et orientée vers vos résultats.
            </p>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Écoute & Diagnostic", desc: "Compréhension approfondie de votre contexte, enjeux, contraintes et objectifs avant toute recommandation." },
              { step: "02", title: "Conception", desc: "Élaboration d'une approche sur-mesure, avec un plan d'action clair, des livrables définis et un calendrier réaliste." },
              { step: "03", title: "Mise en œuvre", desc: "Accompagnement opérationnel de votre équipe avec transfert de compétences systématique tout au long de la mission." },
              { step: "04", title: "Consolidation", desc: "Suivi des résultats, ajustements nécessaires et capitalisation des acquis pour garantir la pérennité des changements." },
            ].map((a) => (
              <div key={a.step} className="relative p-6 rounded-xl border border-navy-700 hover:border-gold-500/50 transition-colors">
                <div className="font-heading text-5xl font-bold text-gold-400/20 absolute top-4 right-4">{a.step}</div>
                <div className="font-heading text-gold-400 font-bold text-sm mb-2">{a.step}</div>
                <h3 className="font-heading font-bold text-white text-lg mb-3">{a.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA FINAL ────────────────────────────────────────────────────────── */}
      <section className="py-24 bg-gradient-to-br bg-navy-900">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="w-16 h-16 rounded-2xl bg-gold-500/20 border border-gold-500/30 flex items-center justify-center text-3xl mx-auto mb-6">
            💼
          </div>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-4">
            Un projet ou un programme à structurer ?
          </h2>
          <p className="text-gray-300 text-lg mb-8 leading-relaxed">
            Partagez-nous votre contexte et discutons ensemble de la façon dont AXELOVA
            peut vous accompagner vers les résultats que vous visez.
          </p>
          <div className="bg-navy-800/50 border border-navy-600 rounded-2xl p-6 mb-8 text-left">
            <p className="text-gold-400 font-semibold text-sm mb-3">✦ Ce que nous vous proposons</p>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li className="flex gap-2"><span className="text-gold-400 mt-0.5">→</span> Un premier échange de cadrage sans engagement</li>
              <li className="flex gap-2"><span className="text-gold-400 mt-0.5">→</span> Une proposition adaptée à vos besoins et votre contexte</li>
              <li className="flex gap-2"><span className="text-gold-400 mt-0.5">→</span> Une mission portée par un expert senior, pas externalisée</li>
              <li className="flex gap-2"><span className="text-gold-400 mt-0.5">→</span> Un transfert de compétences intégré à chaque étape</li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-start">
            <Link href="/contact" className="btn-primary text-base px-8 py-3.5">
              Nous contacter
            </Link>
            <Link href="/coaching" className="btn-outline text-base px-8 py-3.5">
              Découvrir le coaching
            </Link>
          </div>
        </div>
      </section>

    </>
  );
}
