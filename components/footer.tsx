import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t bg-background transition-colors duration-300">
      <div className="container px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2">
            <Link
              href="/"
              className="flex items-center gap-2 font-bold text-2xl mb-4"
            >
              <span className="neo-brutalism-pink px-2 py-1 text-white">
                DEV
              </span>
              <span>NENO</span>
            </Link>
            <p className="text-muted-foreground max-w-md">
              Desenvolvedor fullstack especializado em criar experiências
              digitais excepcionais e soluções completas para web e mobile.
            </p>
            <div className="flex gap-4 mt-6">
              <Button
                variant="ghost"
                size="icon"
                className="neo-brutalism h-10 w-10"
                asChild
              >
                <Link
                  href="https://github.com/canutoilberto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="neo-brutalism h-10 w-10"
                asChild
              >
                <Link
                  href="https://www.linkedin.com/in/ilberto-canuto-469422212/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="neo-brutalism h-10 w-10"
                asChild
              >
                <Link
                  href="https://x.com/canutoilberto"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="neo-brutalism h-10 w-10"
                asChild
              >
                <Link href="mailto:canutoilberto@gmail.com">
                  <Mail className="h-5 w-5" />
                  <span className="sr-only">Email</span>
                </Link>
              </Button>
            </div>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#home"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Início
                </Link>
              </li>
              <li>
                <Link
                  href="#about"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sobre
                </Link>
              </li>
              <li>
                <Link
                  href="#skills"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Habilidades
                </Link>
              </li>
              <li>
                <Link
                  href="#projects"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Projetos
                </Link>
              </li>
              <li>
                <Link
                  href="#contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li className="text-muted-foreground">Desenvolvimento Web</li>
              <li className="text-muted-foreground">Desenvolvimento Mobile</li>

              <li className="text-muted-foreground">Consultoria Técnica</li>
              <li className="text-muted-foreground">Arquitetura de Software</li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            &copy; {currentYear} Dev Neninho. Todos os direitos reservados.
          </p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="#"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Política de Privacidade
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
