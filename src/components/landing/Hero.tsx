import { Sparkles } from "lucide-react";

import { Button } from "@/components/ui/button";
import mockup from "@/assets/app-mockup.jpg";

export function Hero() {
  return (
    <section id="inicio" className="surface-glow relative overflow-hidden pt-32 pb-20">
      <div className="mx-auto grid max-w-6xl items-center gap-12 px-5 lg:grid-cols-[1fr_1.1fr]">
        <div>
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-3 py-1 text-xs text-muted-foreground">
            <Sparkles className="size-3.5 text-accent" aria-hidden="true" />
            Agentes de IA para redes sociales
          </span>
          <h1 className="mt-6 text-4xl font-semibold leading-[1.05] sm:text-5xl lg:text-6xl">
            Gestiona tus redes sociales con <span className="text-gradient">IA</span>
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            Genera contenido con agentes de IA y publícalo con un clic en las 7 principales
            plataformas. Sin fricción.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl">
              <a href="#registro">Comenzar ahora</a>
            </Button>
            <Button asChild variant="outlineSoft" size="xl">
              <a href="#como-funciona">Ver cómo funciona</a>
            </Button>
          </div>
        </div>

        <div className="relative">
          <div
            className="bg-brand absolute -inset-6 rounded-[2rem] opacity-25 blur-3xl"
            aria-hidden="true"
          />
          <img
            src={mockup}
            width={1408}
            height={1008}
            alt="Panel de Marketing Manager con el chat de IA y la vista previa de publicaciones para Instagram y LinkedIn"
            className="relative rounded-2xl border border-border shadow-[var(--shadow-glow)]"
          />
        </div>
      </div>
    </section>
  );
}