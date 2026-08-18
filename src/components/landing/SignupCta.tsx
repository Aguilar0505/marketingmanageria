import { useState, type FormEvent } from "react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function SignupCta() {
  const [form, setForm] = useState({ nombre: "", email: "", password: "" });

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    toast.success("Cuenta lista para crearse", {
      description: `Te contactaremos en ${form.email} para activar tu prueba gratuita.`,
    });
    setForm({ nombre: "", email: "", password: "" });
  }

  return (
    <section id="registro" className="scroll-mt-20 px-5 py-24">
      <div className="bg-brand mx-auto max-w-5xl rounded-3xl p-[1px] shadow-[var(--shadow-glow)]">
        <div className="grid gap-10 rounded-[calc(1.5rem-1px)] bg-card px-6 py-12 sm:px-12 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="text-3xl font-semibold sm:text-4xl">Publica más en menos tiempo</h2>
            <p className="mt-4 text-muted-foreground">
              Prueba Marketing Manager y deja que la IA haga el trabajo pesado.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="nombre">Nombre</Label>
              <Input
                id="nombre"
                name="nombre"
                autoComplete="name"
                required
                value={form.nombre}
                onChange={(e) => setForm({ ...form, nombre: e.target.value })}
                placeholder="Tu nombre"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Correo electrónico</Label>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder="tu@empresa.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="password">Contraseña</Label>
              <Input
                id="password"
                name="password"
                type="password"
                autoComplete="new-password"
                minLength={8}
                required
                value={form.password}
                onChange={(e) => setForm({ ...form, password: e.target.value })}
                placeholder="Mínimo 8 caracteres"
              />
            </div>
            <Button type="submit" variant="hero" size="xl" className="w-full">
              Comenzar gratis
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}