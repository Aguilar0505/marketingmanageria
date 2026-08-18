import {
  AudioLines,
  Bot,
  Building2,
  MessageSquareText,
  Send,
  ShieldCheck,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "./Reveal";
import { socialNetworks } from "./SocialIcons";

const features = [
  {
    Icon: Bot,
    title: "Agentes de IA personalizables",
    text: "Crea agentes con modelo Gemini (2.0 Flash, 2.0 Pro, 2.5 Flash, 2.5 Pro, 3.5 Flash), temperatura ajustable y system prompt propio para el tono de marca.",
  },
  {
    Icon: MessageSquareText,
    title: "Chat que genera contenido",
    text: 'Escribe una petición como "Crea un post para Instagram sobre [tema]" y el agente genera contenido estructurado, listo para revisar.',
  },
  {
    Icon: Send,
    title: "Publicación en 5 redes con un clic",
    text: "Revisa, aprueba y publica en Instagram, LinkedIn, Facebook, Threads y YouTube desde un mismo panel.",
  },
  {
    Icon: AudioLines,
    title: "Audio a contenido listo para publicar",
    text: "Sube un audio y el sistema lo transcribe con Faster-Whisper, genera texto e imágenes con IA (Claude + Pollinations) y deja el contenido listo.",
  },
  {
    Icon: ShieldCheck,
    title: "Revisor editorial con IA",
    text: "Un agente revisor aprueba o rechaza el contenido antes de publicarse.",
  },
  {
    Icon: Building2,
    title: "Gestión de varias empresas",
    text: "Agrupa marca, colores, buyer persona, objetivos y redes sociales por empresa o cliente.",
  },
];

const steps = [
  { title: "Crea tu empresa y define tu marca", text: "Colores, buyer persona y objetivos en un solo lugar." },
  { title: "Conecta tus redes sociales", text: "Autorización OAuth segura para las 7 plataformas." },
  { title: "Chatea con el agente de IA", text: "Pide el contenido que necesitas y recíbelo estructurado." },
  { title: "Revisa y publica con un clic", text: "El revisor aprueba y el post sale a todas tus redes." },
];

const faqs = [
  {
    q: "¿Necesito conocimientos técnicos para usarlo?",
    a: "No. Conectas tus redes con OAuth, escribes lo que necesitas en el chat y publicas. Todo desde el navegador.",
  },
  {
    q: "¿En qué redes puedo publicar?",
    a: "Instagram, Facebook, LinkedIn, Threads y YouTube, desde un mismo panel.",
  },
  {
    q: "¿Puedo gestionar varias marcas o clientes?",
    a: "Sí. Cada empresa tiene su marca, colores, buyer persona, objetivos y cuentas conectadas por separado.",
  },
  {
    q: "¿Qué pasa con el contenido antes de publicarse?",
    a: "Un agente revisor editorial lo aprueba o lo rechaza. Tú siempre tienes la última palabra.",
  },
  {
    q: "¿Puedo convertir un podcast o una nota de voz en publicaciones?",
    a: "Sí. Subes el audio, se transcribe automáticamente y la IA genera el texto y las imágenes del post.",
  },
];

export function TrustBar() {
  return (
    <section className="border-y border-border/60 bg-secondary/20 py-6">
      <p className="mx-auto max-w-6xl px-5 text-center text-sm tracking-wide text-muted-foreground">
        Gestión para agencias, emprendedores y equipos de marketing
      </p>
    </section>
  );
}

export function Features() {
  return (
    <section id="funciones" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">
          Todo el flujo de contenido, <span className="text-gradient">en un solo lugar</span>
        </h2>
        <p className="mt-4 text-muted-foreground">
          Del brief a la publicación sin cambiar de herramienta.
        </p>
      </Reveal>

      <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map(({ Icon, title, text }, i) => (
          <Reveal as="li" key={title} delay={i * 60}>
            <article className="h-full rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] transition-transform duration-300 hover:-translate-y-1 hover:border-primary/50">
              <span className="bg-brand inline-flex size-10 items-center justify-center rounded-xl text-primary-foreground">
                <Icon className="size-5" aria-hidden="true" />
              </span>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{text}</p>
            </article>
          </Reveal>
        ))}
      </ul>

      <Reveal className="mt-12 flex justify-center">
        <Button asChild variant="hero" size="xl">
          <a href="#registro">Comenzar gratis</a>
        </Button>
      </Reveal>
    </section>
  );
}

export function HowItWorks() {
  return (
    <section
      id="como-funciona"
      className="surface-glow scroll-mt-20 border-y border-border/60 py-24"
    >
      <div className="mx-auto max-w-6xl px-5">
        <Reveal className="max-w-2xl">
          <h2 className="text-3xl font-semibold sm:text-4xl">Cómo funciona</h2>
          <p className="mt-4 text-muted-foreground">Cuatro pasos. Menos de diez minutos.</p>
        </Reveal>

        <ol className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, i) => (
            <Reveal as="li" key={step.title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-border bg-card/70 p-6">
                <span className="text-gradient font-display text-4xl font-bold">0{i + 1}</span>
                <h3 className="mt-4 text-base font-semibold">{step.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{step.text}</p>
              </div>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}

export function SocialSection() {
  return (
    <section id="redes-sociales" className="mx-auto max-w-6xl scroll-mt-20 px-5 py-24">
      <Reveal className="max-w-2xl">
        <h2 className="text-3xl font-semibold sm:text-4xl">Publica en 5 redes</h2>
        <p className="mt-4 text-muted-foreground">
          Un contenido, adaptado al formato de cada plataforma.
        </p>
      </Reveal>

      <ul className="mt-12 grid grid-cols-2 gap-4 sm:grid-cols-4 lg:grid-cols-7">
        {socialNetworks.map(({ name, Icon, detail }, i) => (
          <Reveal as="li" key={name} delay={i * 50}>
            <div className="flex h-full flex-col items-center gap-2 rounded-2xl border border-border bg-card p-5 text-center transition-colors hover:border-accent/60">
              <Icon className="size-7 text-foreground" />
              <span className="text-sm font-medium">{name}</span>
              <span className="text-xs text-muted-foreground">{detail}</span>
            </div>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

export function Faq() {
  return (
    <section id="faq" className="border-t border-border/60 py-24">
      <div className="mx-auto max-w-3xl px-5">
        <Reveal>
          <h2 className="text-3xl font-semibold sm:text-4xl">Preguntas frecuentes</h2>
        </Reveal>
        <Reveal className="mt-8">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`item-${i}`}>
                <AccordionTrigger className="text-left text-base">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}

export function Footer() {
  const columns = [
    { title: "Producto", links: ["Funciones", "Precios", "Redes"] },
    { title: "Compañía", links: ["Sobre nosotros", "Contacto"] },
    { title: "Legal", links: ["Términos", "Privacidad"] },
  ];

  return (
    <footer className="border-t border-border/60 bg-card/40">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <div className="flex items-center gap-2 font-display font-semibold">
            <span className="bg-brand size-7 rounded-lg" aria-hidden="true" />
            Marketing Manager
          </div>
          <p className="mt-3 text-sm text-muted-foreground">Resultados.</p>
        </div>
        {columns.map((col) => (
          <div key={col.title}>
            <h3 className="text-sm font-semibold">{col.title}</h3>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#registro" className="transition-colors hover:text-foreground">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="border-t border-border/60 py-6">
        <p className="mx-auto max-w-6xl px-5 text-xs text-muted-foreground">
          © {new Date().getFullYear()} Marketing Manager. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}