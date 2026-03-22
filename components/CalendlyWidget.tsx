"use client";
import { useEffect } from "react";

// ──────────────────────────────────────────────────────────────────────────────
// INSTRUCTIONS DE CONFIGURATION :
// 1. Créez un compte gratuit sur https://calendly.com
// 2. Créez un type d'événement "Séance Découverte Gratuite - 30 min"
// 3. Remplacez YOUR_CALENDLY_USERNAME ci-dessous par votre identifiant Calendly
// ──────────────────────────────────────────────────────────────────────────────
const CALENDLY_URL = "https://calendly.com/odieye";

export default function CalendlyWidget() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://assets.calendly.com/assets/external/widget.js";
    script.async = true;
    document.head.appendChild(script);
    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <div
        className="calendly-inline-widget"
        data-url={`${CALENDLY_URL}?hide_event_type_details=1&hide_gdpr_banner=1&primary_color=c9a84c`}
        style={{ minWidth: "320px", height: "630px" }}
      />
    </div>
  );
}
