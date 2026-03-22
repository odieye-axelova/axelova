export default function BlogPage() {
  const articles = [
    { title: "Les 5 erreurs fatales dans la planification MS Project", cat: "Outils", date: "Bientôt", emoji: "📅" },
    { title: "Power BI pour PMO : construire un dashboard de pilotage en 2h", cat: "Outils", date: "Bientôt", emoji: "📊" },
    { title: "Comment développer son leadership en contexte de projet africain", cat: "Leadership", date: "Bientôt", emoji: "🌍" },
    { title: "PMP® en 2026 : tout ce que vous devez savoir pour réussir", cat: "Certification", date: "Bientôt", emoji: "🎓" },
    { title: "Les 7 compétences du chef de projet d'excellence", cat: "Management", date: "Bientôt", emoji: "⭐" },
    { title: "Coaching et gestion de projet : un duo gagnant pour les dirigeants", cat: "Coaching", date: "Bientôt", emoji: "🎯" },
  ];

  return (
    <>
      <section className="relative pt-32 pb-20 bg-hero-pattern">
        <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">Ressources gratuites</p>
          <h1 className="font-heading text-5xl font-bold text-white mb-4">Blog & Articles</h1>
          <p className="text-gray-300 text-xl max-w-xl mx-auto">
            Des contenus pratiques sur le management de projet, le leadership et les outils professionnels.
          </p>
        </div>
      </section>

      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-4">
            <div className="inline-flex items-center gap-2 bg-gold-50 text-gold-700 px-5 py-2.5 rounded-full text-sm font-medium border border-gold-200">
              🔔 Premiers articles en cours de rédaction — Revenez bientôt !
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {articles.map((a) => (
              <div key={a.title} className="card p-6 opacity-70 cursor-default">
                <div className="text-3xl mb-4">{a.emoji}</div>
                <span className="text-xs bg-navy-50 text-navy-600 px-2.5 py-1 rounded-full font-medium">{a.cat}</span>
                <h3 className="font-heading text-lg font-bold text-navy-800 mt-3 mb-2 leading-snug">{a.title}</h3>
                <p className="text-gray-400 text-xs">{a.date}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
