import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "AXELOVA | Coaching · Formation · Conseil en Management de Projet",
  description:
    "AXELOVA vous accompagne dans l'excellence de votre leadership et la maîtrise des outils de gestion de projet. Coaching certifié, formations MS Project & Power BI, conseil stratégique — pour les professionnels d'Afrique francophone et du monde.",
  keywords: [
    "coaching leadership Afrique",
    "formation MS Project",
    "formation Power BI",
    "gestion de projet Sénégal",
    "PMO consultant Afrique",
    "coaching professionnel Dakar",
    "AXELOVA",
  ],
  openGraph: {
    title: "AXELOVA | Coaching · Formation · Conseil",
    description: "L'excellence au service de votre leadership et de vos projets.",
    url: "https://axelova.com",
    siteName: "AXELOVA",
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr">
      <body className="bg-white text-gray-800 font-sans">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
