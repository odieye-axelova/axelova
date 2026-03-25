"use client";
import { useEffect } from "react";

// ──────────────────────────────────────────────────────────────────────────────
// Cal.com — Séance Découverte — Coaching Personnalisé
// URL publique : https://cal.com/axelova/seance-decouverte
// ──────────────────────────────────────────────────────────────────────────────
const CAL_LINK = "axelova/seance-decouverte";

export default function CalWidget() {
  useEffect(() => {
    // Initialisation du script Cal.com
    (function (C: any, A: string, L: string) {
      const p = function (a: any, ar: any) { a.q.push(ar); };
      const d = C.document;
      C.Cal =
        C.Cal ||
        function () {
          const cal = C.Cal;
          const ar = arguments;
          if (!cal.loaded) {
            cal.ns = {};
            cal.q = cal.q || [];
            d.head.appendChild(d.createElement("script")).src = A;
            cal.loaded = true;
          }
          if (ar[0] === L) {
            const api = function () { p(api, arguments); };
            const namespace = ar[1];
            api.q = api.q || [];
            typeof namespace === "string"
              ? ((cal.ns[namespace] = api) && p(api, ar))
              : p(cal, ar);
            return;
          }
          p(cal, ar);
        };
    })(window, "https://app.cal.com/embed/embed.js", "init");

    const Cal = (window as any).Cal;
    Cal("init", "seance-decouverte", { origin: "https://cal.com" });

    Cal.ns["seance-decouverte"]("inline", {
      elementOrSelector: "#cal-inline-widget",
      config: { layout: "month_view" },
      calLink: CAL_LINK,
    });

    Cal.ns["seance-decouverte"]("ui", {
      hideEventTypeDetails: false,
      layout: "month_view",
    });
  }, []);

  return (
    <div className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm">
      <div
        id="cal-inline-widget"
        style={{ width: "100%", height: "630px", overflow: "scroll" }}
      />
    </div>
  );
}
