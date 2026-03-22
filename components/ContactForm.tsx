"use client";
import { useState } from "react";

interface ContactFormProps {
  context?: "coaching" | "formation" | "general";
}

export default function ContactForm({ context = "general" }: ContactFormProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    subject: context === "coaching" ? "Coaching individuel" : context === "formation" ? "Formation" : "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");

    // ──────────────────────────────────────────────────────────────────────────
    // INTÉGRATION EMAIL :
    // Option 1 (recommandé) : Formspree — https://formspree.io (gratuit jusqu'à 50 soumissions/mois)
    //   1. Créez un compte sur formspree.io
    //   2. Créez un formulaire et copiez votre endpoint
    //   3. Remplacez l'URL ci-dessous par votre endpoint Formspree
    //
    // Option 2 : EmailJS — https://www.emailjs.com (gratuit jusqu'à 200 emails/mois)
    // ──────────────────────────────────────────────────────────────────────────
    try {
      const response = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          _subject: `AXELOVA — Nouveau message : ${form.subject}`,
        }),
      });
      if (response.ok) {
        setStatus("sent");
        setForm({ name: "", email: "", phone: "", subject: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (status === "sent") {
    return (
      <div className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
        <div className="text-4xl mb-4">✅</div>
        <h3 className="font-heading text-xl font-bold text-green-800 mb-2">Message envoyé !</h3>
        <p className="text-green-700 text-sm">
          Merci pour votre message. Je vous réponds dans les 24 heures ouvrées.
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-4 text-sm text-green-600 underline hover:no-underline"
        >
          Envoyer un autre message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Nom complet *</label>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            placeholder="Prénom Nom"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email *</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            placeholder="vous@email.com"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Téléphone / WhatsApp</label>
          <input
            type="tel"
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="+221 XX XXX XX XX"
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Sujet *</label>
          <select
            name="subject"
            value={form.subject}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm bg-white"
          >
            <option value="">Choisir...</option>
            <option value="Coaching individuel">Coaching individuel</option>
            <option value="Programme groupe">Programme groupe</option>
            <option value="Coaching d'équipe">Coaching d&apos;équipe</option>
            <option value="Formation MS Project">Formation MS Project</option>
            <option value="Formation Power BI">Formation Power BI</option>
            <option value="Autre">Autre demande</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Votre message *</label>
        <textarea
          name="message"
          value={form.message}
          onChange={handleChange}
          required
          rows={5}
          placeholder="Décrivez brièvement votre situation, vos objectifs et ce que vous attendez de cet accompagnement..."
          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-gold-400 focus:ring-2 focus:ring-gold-100 outline-none transition-all text-sm resize-none"
        />
      </div>

      {status === "error" && (
        <p className="text-red-600 text-sm bg-red-50 px-4 py-3 rounded-xl border border-red-200">
          Une erreur s&apos;est produite. Veuillez réessayer ou nous contacter directement par WhatsApp.
        </p>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="btn-primary w-full justify-center disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {status === "sending" ? (
          <>
            <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Envoi en cours...
          </>
        ) : (
          <>
            Envoyer mon message
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </>
        )}
      </button>

      <p className="text-xs text-gray-400 text-center">
        Vos données sont confidentielles et ne seront jamais partagées avec des tiers.
      </p>
    </form>
  );
}
