"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { ExternalLink, Github } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const projects = [
    {
      title: "E-sports Center",
      description: "Plataforma focada nas principais notícias dos E-sports.",
      image: "/e-sports-center.png",
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "Vercel"],
      demoLink: "https://esports-agency.vercel.app/",
      repoLink: "https://github.com/canutoilberto/esports-agency",
    },
    {
      title: "Ink Steellers",
      description: "Site para um estúdio de Tatuagens.",
      image: "/ink-steellers.png",
      tags: ["Next.js", "TypeScript", "Vercel", "Tailwind CSS", "GSAP"],
      demoLink: "https://ink-steellers.vercel.app/",
      repoLink: "https://github.com/canutoilberto/ink",
    },
    {
      title: "TravelSite",
      description:
        "Site para uma agencia de viagens especializada em grandes destinos e experiências.",
      image: "/travel.png",
      tags: ["React", "TypeScript", "Vercel", "Tailwind CSS"],
      demoLink: "https://travel-site-sable.vercel.app/",
      repoLink: "https://github.com/canutoilberto/travel-site",
    },
    {
      title: "Luxe Cars",
      description: "Plataforma pensada para locação de veículos de luxo.",
      image: "luxe-cars.png",
      tags: ["React", "TypeScript", "Vercel", "Tailwind CSS"],
      demoLink: "https://luxecars.vercel.app/",
      repoLink: "https://github.com/canutoilberto/luxecars",
    },
    {
      title: "Lojinha",
      description: "Sistema de e-commerce.",
      image: "/lojinha.png",
      tags: ["Next.js", "TypeScript", "Vercel", "Tailwind CSS", "MantineUI"],
      demoLink: "https://lojinha-blue.vercel.app/",
      repoLink: "https://github.com/canutoilberto/lojinha-app",
    },
    {
      title: "Gestão de estoque",
      description: "Sistema para gestão de estoque.",
      image: "/estoque.png",
      tags: ["Next.js", "Vercel", "Tailwind CSS", "MantineUI"],
      demoLink: "https://controle-estoque-plum.vercel.app/",
      repoLink: "https://github.com/canutoilberto/controle_estoque",
    },
  ];

  return (
    <section id="projects" className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <motion.div
          className="flex flex-col items-center justify-center space-y-4 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="space-y-2">
            <Badge variant="outline" className="neo-brutalism px-4 py-1">
              Projetos
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meus Trabalhos Recentes
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Confira alguns dos projetos que desenvolvi, demonstrando minhas
              habilidades e experiência.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="neo-brutalism overflow-hidden h-full flex flex-col">
                <div className="aspect-video overflow-hidden">
                  <img
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <CardContent className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tagIndex}
                        variant="secondary"
                        className="neo-brutalism"
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="p-6 pt-0 flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="neo-brutalism flex-1"
                    asChild
                  >
                    <Link
                      href={project.repoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" />
                      Código
                    </Link>
                  </Button>
                  <Button
                    size="sm"
                    className="neo-brutalism-primary flex-1"
                    asChild
                  >
                    <Link
                      href={project.demoLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button className="neo-brutalism-blue text-white" asChild>
            <Link
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              Ver mais projetos no GitHub
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
