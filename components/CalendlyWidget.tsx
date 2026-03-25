"use client";

// ──────────────────────────────────────────────────────────────────────────────
// Cal.com — Séance Découverte — Coaching Personnalisé
// URL : https://cal.com/axelova/seance-decouverte
// ──────────────────────────────────────────────────────────────────────────────

export default function CalWidget() {
  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <iframe
        src="https://cal.com/axelova/seance-decouverte?embed=true&hideEventTypeDetails=false&layout=month_view"
        style={{ width: "100%", height: "630px", border: "none" }}
        title="Réserver une séance découverte AXELOVA"
      />
    </div>
  );
}
