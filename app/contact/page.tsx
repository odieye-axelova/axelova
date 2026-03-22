import ContactForm from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <>
      <section className="relative pt-32 pb-20 bg-hero-pattern">
        <div className="max-w-6xl mx-auto px-4 relative z-10 text-center">
          <p className="text-gold-400 font-semibold text-sm uppercase tracking-widest mb-4">Parlons-nous</p>
          <h1 className="font-heading text-5xl font-bold text-white mb-4">Contactez AXELOVA</h1>
          <p className="text-gray-300 text-xl max-w-xl mx-auto">
            Une question, un projet, une envie de collaboration ? Je vous réponds sous 24h.
          </p>
        </div>
      </section>

      <section className="py-24 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Infos contact */}
            <div className="lg:col-span-1 space-y-6">
              <h2 className="font-heading text-2xl font-bold text-navy-800">Restons en contact</h2>
              <p className="text-gray-500 text-sm leading-relaxed">
                Disponible pour des échanges par email, WhatsApp ou via le formulaire.
                Je réponds à toutes les demandes sérieuses sous 24 heures ouvrées.
              </p>
              {[
                { icon: "✉️", label: "Email", value: "contact@axelova.com", href: "mailto:contact@axelova.com" },
                { icon: "💬", label: "WhatsApp", value: "+221 XX XXX XX XX", href: "https://wa.me/221XXXXXXXXX" },
                { icon: "🌍", label: "Zone d'intervention", value: "Dakar · Monde francophone", href: null },
                { icon: "💼", label: "LinkedIn", value: "Ousseynou Dieye", href: "https://linkedin.com/in/" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 p-4 bg-white rounded-xl border border-gray-100">
                  <span className="text-2xl">{c.icon}</span>
                  <div>
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-0.5">{c.label}</p>
                    {c.href ? (
                      <a href={c.href} className="text-navy-700 font-medium text-sm hover:text-gold-500 transition-colors">
                        {c.value}
                      </a>
                    ) : (
                      <p className="text-navy-700 font-medium text-sm">{c.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Formulaire */}
            <div className="lg:col-span-2 bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
              <h2 className="font-heading text-2xl font-bold text-navy-800 mb-6">Envoyez un message</h2>
              <ContactForm context="general" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
