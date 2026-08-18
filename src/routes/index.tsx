import { createFileRoute } from "@tanstack/react-router";

import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { SignupCta } from "@/components/landing/SignupCta";
import {
  Faq,
  Features,
  Footer,
  HowItWorks,
  SocialSection,
  TrustBar,
} from "@/components/landing/Sections";

const title = "Marketing Manager — Gestión de redes sociales con IA";
const description =
  "Genera contenido con agentes de IA y publícalo con un clic en Instagram, LinkedIn, Facebook, Threads y YouTube. Comienza gratis.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "Marketing Manager",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          description,
          offers: { "@type": "Offer", price: "0", priceCurrency: "EUR" },
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <TrustBar />
        <Features />
        <HowItWorks />
        <SocialSection />
        <Faq />
        <SignupCta />
      </main>
      <Footer />
    </div>
  );
}
