"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTheme } from "next-themes";

export default function About() {
  const { theme } = useTheme();

  const experiences = [
    {
      year: "2022 - Presente",
      company: "Rede Paraíba de Comunicação",
      role: "Desenvolvedor Fullstack",
      description:
        "Desenvolvendo aplicações web e móveis com React, Next.js, Node.js e React Native.",
    },
  ];

  return (
    <section
      id="about"
      className="w-full py-12 md:py-24 lg:py-32 bg-muted transition-colors duration-300"
    >
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
              Sobre Mim
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Minha Jornada
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Sou um desenvolvedor fullstack apaixonado por criar soluções
              digitais inovadoras e funcionais. Com mais de 4 anos de
              experiência, tenho trabalhado com diversas tecnologias e
              frameworks modernos.
            </p>
          </div>
        </motion.div>

        <div className="grid gap-6 md:gap-8 mt-12">
          <div className="mx-auto w-full max-w-3xl">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="neo-brutalism mb-6">
                  <CardContent className="p-6">
                    <div className="flex flex-col md:flex-row md:items-start gap-4">
                      <div className="md:w-1/4">
                        <p className="font-bold text-primary">{exp.year}</p>
                      </div>
                      <div className="md:w-3/4">
                        <h3 className="text-xl font-bold">{exp.role}</h3>
                        <p className="text-muted-foreground mb-2">
                          {exp.company}
                        </p>
                        <p>{exp.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
          className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <Card className="neo-brutalism-pink">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Educação</h3>
              <p className="text-white mb-4">
                Análise e Desenvolvimento de Sistemas - UNINASSAU, 2022
              </p>
              <p className="text-white/80">
                Formação complementada por diversos cursos e certificações em
                desenvolvimento web, arquitetura de software e metodologias
                ágeis.
              </p>
            </CardContent>
          </Card>
          <Card className="neo-brutalism-blue">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-white mb-2">Objetivos</h3>
              <p className="text-white mb-4">
                Busco constantemente aprimorar minhas habilidades e
                conhecimentos para criar soluções digitais de alta qualidade e
                impacto.
              </p>
              <p className="text-white/80">
                Meu objetivo é contribuir para projetos inovadores e
                desafiadores que transformem a experiência dos usuários.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
