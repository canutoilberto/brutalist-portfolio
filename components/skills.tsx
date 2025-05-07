"use client";

import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import {
  Database,
  Layout,
  Smartphone,
  Terminal,
  Server,
  Cloud,
} from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="h-8 w-8" />,
      skills: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Redux",
        "HTML5/CSS3",
        "JavaScript",
      ],
    },
    {
      title: "Backend",
      icon: <Server className="h-8 w-8" />,
      skills: [
        "Node.js",
        "Express",
        "NestJS",
        "Python",
        "Django",
        "REST APIs",
        "GraphQL",
      ],
    },
    {
      title: "Banco de Dados",
      icon: <Database className="h-8 w-8" />,
      skills: [
        "MongoDB",
        "PostgreSQL",
        "MySQL",
        "Firebase",
        "Prisma",
        "Supabase",
      ],
    },
    {
      title: "Mobile",
      icon: <Smartphone className="h-8 w-8" />,
      skills: ["React Native", "Expo", "App Performance"],
    },
    {
      title: "DevOps",
      icon: <Cloud className="h-8 w-8" />,
      skills: ["Docker", "Vercel", "GitHub Actions"],
    },
    {
      title: "Ferramentas",
      icon: <Terminal className="h-8 w-8" />,
      skills: ["Git", "GitHub", "VS Code", "Postman", "Notion"],
    },
  ];

  return (
    <section id="skills" className="w-full py-12 md:py-24 lg:py-32">
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
              Habilidades
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Meu Arsenal Técnico
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Domino diversas tecnologias e ferramentas para criar soluções
              completas e eficientes. Estou sempre aprendendo e me adaptando às
              novas tendências do mercado.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="neo-brutalism h-full">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="neo-brutalism-yellow p-2 rounded-md">
                      {category.icon}
                    </div>
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill, skillIndex) => (
                      <Badge
                        key={skillIndex}
                        variant="secondary"
                        className="neo-brutalism"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <p className="text-muted-foreground md:text-xl">
            Além dessas habilidades, estou sempre explorando novas tecnologias e
            metodologias para expandir meu conhecimento e oferecer as melhores
            soluções.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
