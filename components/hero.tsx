"use client";

import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useTheme } from "next-themes";

export default function Hero() {
  const { theme } = useTheme();

  return (
    <section
      id="home"
      className="w-full py-12 md:py-24 lg:py-32 xl:py-36 bg-background transition-colors duration-300"
    >
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
          <motion.div
            className="flex flex-col justify-center space-y-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="space-y-2">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
                Olá, eu sou
                <span className="block text-primary">Ilberto Canuto</span>
              </h1>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Transformando ideias em experiências digitais excepcionais.
                Especialista em desenvolvimento web moderno e soluções completas
                de ponta a ponta.
              </p>
            </div>
            <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <Button className="neo-brutalism-primary" asChild>
                <Link href="#contact">Entre em contato</Link>
              </Button>
              <Button variant="outline" className="neo-brutalism" asChild>
                <Link href="#projects">Ver projetos</Link>
              </Button>
            </div>
            <div className="flex gap-4 mt-6">
              <Link
                href="https://github.com/canutoilberto"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="neo-brutalism h-12 w-12"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
              </Link>
              <Link
                href="https://www.linkedin.com/in/ilberto-canuto-469422212/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="ghost"
                  size="icon"
                  className="neo-brutalism h-12 w-12"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </Link>
              <Link href="mailto:canutoilberto@gmail.com">
                <Button
                  variant="ghost"
                  size="icon"
                  className="neo-brutalism h-12 w-12"
                >
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Button>
              </Link>
            </div>
          </motion.div>
          <motion.div
            className="flex items-center justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative h-[350px] w-[350px] sm:h-[400px] sm:w-[400px] lg:h-[450px] lg:w-[450px]">
              <div
                className={`absolute top-0 left-0 h-full w-full rounded-full opacity-20 blur-3xl ${
                  theme === "dark" ? "bg-primary" : "bg-secondary"
                }`}
              ></div>
              <div className="relative h-full w-full neo-brutalism-blue rounded-full overflow-hidden">
                <img
                  src="/neno.png"
                  alt="Desenvolvedor Fullstack"
                  className="object-cover h-full w-full"
                />
              </div>
            </div>
          </motion.div>
        </div>
        <div className="flex justify-center mt-12">
          <Button
            variant="ghost"
            size="icon"
            className="neo-brutalism animate-bounce h-12 w-12"
            asChild
          >
            <Link href="#about">
              <ArrowDown className="h-6 w-6" />
              <span className="sr-only">Rolar para baixo</span>
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
