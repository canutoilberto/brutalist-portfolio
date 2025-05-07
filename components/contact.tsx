"use client";

import type React from "react";

import { useState } from "react";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulando envio do formulário
    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Mensagem enviada!",
      description: "Obrigado pelo contato. Responderei em breve.",
    });

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      value: "canutoilberto@gmail.com",
      link: "mailto:canutoilberto@gmail.com",
    },
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefone",
      value: "+55 (83) 99663-2602",
      link: "tel:+5583996632602",
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Localização",
      value: "João Pessoa, Brasil",
      link: "https://maps.google.com/?q=João+Pessoa,+Brasil",
    },
  ];

  return (
    <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
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
              Contato
            </Badge>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
              Vamos Conversar
            </h2>
            <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Tem um projeto em mente ou quer discutir uma oportunidade? Entre
              em contato comigo.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mt-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="neo-brutalism h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.link}
                      className="flex items-start gap-4 group"
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3, delay: index * 0.1 }}
                    >
                      <div className="neo-brutalism-pink p-3 text-white">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-medium text-lg">{info.title}</h4>
                        <p className="text-muted-foreground group-hover:text-primary transition-colors">
                          {info.value}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>

                <div className="mt-8">
                  <h4 className="font-medium text-lg mb-4">
                    Horário de Disponibilidade
                  </h4>
                  <p className="text-muted-foreground">
                    Segunda a Sexta: 9h às 18h
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Card className="neo-brutalism h-full">
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-1 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Nome</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Seu nome completo"
                        className="neo-brutalism"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="seu@email.com"
                        className="neo-brutalism"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="subject">Assunto</Label>
                      <Input
                        id="subject"
                        name="subject"
                        placeholder="Assunto da mensagem"
                        className="neo-brutalism"
                        value={formData.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="message">Mensagem</Label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Sua mensagem..."
                        className="neo-brutalism min-h-[150px]"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>
                  <Button
                    type="submit"
                    className="neo-brutalism-primary w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center">
                        <svg
                          className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          ></circle>
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          ></path>
                        </svg>
                        Enviando...
                      </span>
                    ) : (
                      <span className="flex items-center">
                        <Send className="mr-2 h-5 w-5" />
                        Enviar Mensagem
                      </span>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
