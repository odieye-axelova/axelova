# AXELOVA — Site Web Officiel

> Coaching · Formation · Conseil en Management de Projet

## 🚀 Déploiement rapide sur Vercel (5 minutes)

### Étape 1 — GitHub
```bash
git init
git add .
git commit -m "feat: initial AXELOVA website"
# Créez un repo sur github.com et copiez l'URL
git remote add origin https://github.com/VOTRE_USERNAME/axelova.git
git push -u origin main
```

### Étape 2 — Vercel
1. Allez sur [vercel.com](https://vercel.com) et connectez-vous avec GitHub
2. Cliquez **Add New Project** → importez votre repo `axelova`
3. Vercel détecte Next.js automatiquement → cliquez **Deploy**
4. Votre site est en ligne sur `axelova.vercel.app` en 2 minutes !

### Étape 3 — Connecter votre domaine axelova.com
1. Dans Vercel → votre projet → **Settings → Domains**
2. Ajoutez `axelova.com` et `www.axelova.com`
3. Vercel vous donne 2 enregistrements DNS
4. Dans Namecheap → **Manage Domains → Advanced DNS** :
   - Type `A` → `@` → IP fournie par Vercel
   - Type `CNAME` → `www` → valeur fournie par Vercel
5. Attendez 10-30 minutes → votre site est live sur axelova.com ! 🎉

---

## ⚙️ Configuration à faire AVANT le lancement

### 1. Calendly (prise de rendez-vous)
- Créez un compte sur [calendly.com](https://calendly.com) (gratuit)
- Créez un événement **"Séance Découverte - 30 min"**
- Dans `components/CalendlyWidget.tsx`, remplacez :
  ```
  YOUR_CALENDLY_USERNAME → votre identifiant Calendly
  ```

### 2. Formulaire de contact (Formspree)
- Créez un compte sur [formspree.io](https://formspree.io) (gratuit, 50 soumissions/mois)
- Créez un nouveau formulaire
- Dans `components/ContactForm.tsx`, remplacez :
  ```
  YOUR_FORM_ID → votre ID Formspree (ex: xwkgdpqr)
  ```

### 3. WhatsApp Business
- Dans tous les fichiers, remplacez :
  ```
  221XXXXXXXXX → votre numéro WhatsApp international (ex: 221771234567)
  ```
- Fichiers concernés : `WhatsAppButton.tsx`, `coaching/page.tsx`, `contact/page.tsx`, `Footer.tsx`

### 4. Email professionnel contact@axelova.com
- Dans Namecheap : **Email → Add Email Hosting** (2$/mois) OU
- **Google Workspace** : [workspace.google.com](https://workspace.google.com) (6€/mois, recommandé)
- Mettez à jour l'adresse dans `Footer.tsx` et `contact/page.tsx`

### 5. LinkedIn
- Dans `Footer.tsx` et `contact/page.tsx`, remplacez :
  ```
  https://linkedin.com/in/ → https://linkedin.com/in/votre-profil
  ```

---

## 🛠️ Développement local

```bash
npm install
npm run dev
# → http://localhost:3000
```

## 📁 Structure du projet

```
axelova/
├── app/
│   ├── layout.tsx          # Layout global (navbar, footer, WhatsApp)
│   ├── page.tsx            # Page d'accueil
│   ├── coaching/page.tsx   # Page coaching (Calendly + formulaire)
│   ├── formation/page.tsx  # Page formations (MS Project, Power BI, PMP)
│   ├── blog/page.tsx       # Blog & ressources
│   └── contact/page.tsx    # Page contact
├── components/
│   ├── Navbar.tsx          # Navigation responsive
│   ├── Footer.tsx          # Pied de page
│   ├── WhatsAppButton.tsx  # Bouton flottant WhatsApp
│   ├── CalendlyWidget.tsx  # Widget de réservation Calendly
│   └── ContactForm.tsx     # Formulaire de contact (Formspree)
├── vercel.json             # Config déploiement Vercel
└── tailwind.config.ts      # Palette Navy & Or AXELOVA
```

## 🎨 Palette de couleurs AXELOVA

| Couleur | Hex | Usage |
|---------|-----|-------|
| Navy 900 | `#0E1C35` | Fond principal, hero |
| Navy 800 | `#142849` | Cards, textes |
| Gold 500 | `#C9A84C` | Accents, CTA |
| Gold 400 | `#DDA83E` | Hover, highlights |
| White | `#FFFFFF` | Fond secondaire |

---

*AXELOVA — L'excellence au service de votre leadership et de vos projets.*
