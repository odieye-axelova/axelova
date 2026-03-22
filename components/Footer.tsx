import Link from "next/link";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-navy-950 text-gray-400">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-gold-400 to-gold-600 flex items-center justify-center font-heading font-bold text-navy-900">
                A
              </div>
              <span className="font-heading font-bold text-xl text-white">
                AXEL<span className="text-gold-400">OVA</span>
              </span>
            </div>
            <p className="text-sm leading-relaxed">
              L&apos;excellence au service de votre leadership et de vos projets.
              Coaching · Formation · Conseil.
            </p>
            <p className="text-xs mt-4 text-gray-500">Dakar, Sénégal · Monde Francophone</p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="/coaching" className="hover:text-gold-400 transition-colors">Coaching Individuel</Link></li>
              <li><Link href="/formation" className="hover:text-gold-400 transition-colors">Formation MS Project</Link></li>
              <li><Link href="/formation" className="hover:text-gold-400 transition-colors">Formation Power BI</Link></li>
              <li><Link href="/blog" className="hover:text-gold-400 transition-colors">Ressources Gratuites</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-widest">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@axelova.com" className="hover:text-gold-400 transition-colors">
                  contact@axelova.com
                </a>
              </li>
              <li>
                <a href="https://wa.me/221XXXXXXXXX" className="hover:text-gold-400 transition-colors">
                  WhatsApp
                </a>
              </li>
              <li>
                <a href="https://linkedin.com/in/" className="hover:text-gold-400 transition-colors">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-navy-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          <p>© {year} AXELOVA. Tous droits réservés.</p>
          <div className="flex gap-4">
            <Link href="/mentions-legales" className="hover:text-gold-400 transition-colors">Mentions légales</Link>
            <Link href="/confidentialite" className="hover:text-gold-400 transition-colors">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
