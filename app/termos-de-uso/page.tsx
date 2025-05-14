import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Dev Neninho",
  description: "Termos de uso e condições do site Dev Neninho",
};

export default function TermosDeUso() {
  const sections = [
    { id: "aceitacao", title: "1. Aceitação dos Termos" },
    { id: "uso", title: "2. Uso do Site" },
    { id: "propriedade", title: "3. Propriedade Intelectual" },
    { id: "responsabilidade", title: "4. Limitação de Responsabilidade" },
    { id: "modificacoes", title: "5. Modificações" },
    { id: "lei", title: "6. Lei Aplicável" },
    { id: "contato", title: "7. Contato" },
  ];

  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl" role="main">
      <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

      <nav aria-label="Índice dos Termos de Uso" className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Índice</h2>
        <ul className="space-y-2">
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="space-y-6 text-muted-foreground">
        <section id="aceitacao" aria-labelledby="aceitacao-title">
          <h2
            id="aceitacao-title"
            className="text-2xl font-semibold mb-4 text-foreground"
          >
            1. Aceitação dos Termos
          </h2>
          <p>
            Ao acessar e utilizar este site, você concorda em cumprir e ficar
            vinculado aos seguintes termos e condições de uso. Se você não
            concordar com qualquer parte destes termos, não deverá utilizar este
            site.
          </p>
        </section>

        <section id="uso" aria-labelledby="uso-title">
          <h2
            id="uso-title"
            className="text-2xl font-semibold mb-4 text-foreground"
          >
            2. Uso do Site
          </h2>
          <p>
            Este site é destinado a fornecer informações sobre serviços de
            desenvolvimento web e mobile. O conteúdo é fornecido apenas para
            fins informativos e não constitui uma oferta de serviços.
          </p>
        </section>

        <section id="propriedade" aria-labelledby="propriedade-title">
          <h2
            id="propriedade-title"
            className="text-2xl font-semibold mb-4 text-foreground"
          >
            3. Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo presente neste site, incluindo textos, imagens,
            logos e código-fonte, é protegido por direitos autorais e outras
            leis de propriedade intelectual. O uso não autorizado deste conteúdo
            é estritamente proibido.
          </p>
        </section>

        <section id="responsabilidade" aria-labelledby="responsabilidade-title">
          <h2
            id="responsabilidade-title"
            className="text-2xl font-semibold mb-4 text-foreground"
          >
            4. Limitação de Responsabilidade
          </h2>
          <p>
            O site é fornecido "como está", sem garantias de qualquer tipo. Não
            nos responsabilizamos por quaisquer danos diretos, indiretos,
            incidentais ou consequentes que possam resultar do uso ou
            impossibilidade de uso do site.
          </p>
        </section>

        <section id="modificacoes" aria-labelledby="modificacoes-title">
          <h2
            id="modificacoes-title"
            className="text-2xl font-semibold mb-4 text-foreground"
          >
            5. Modificações
          </h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. As alterações entram em vigor imediatamente após sua
            publicação no site. O uso continuado do site após as alterações
            constitui aceitação dos novos termos.
          </p>
        </section>

        <section id="lei" aria-labelledby="lei-title">
          <h2
            id="lei-title"
            className="text-2xl font-semibold mb-4 text-foreground"
          >
            6. Lei Aplicável
          </h2>
          <p>
            Estes termos são regidos pelas leis do Brasil. Qualquer disputa
            relacionada a estes termos será submetida à jurisdição exclusiva dos
            tribunais brasileiros.
          </p>
        </section>

        <section id="contato" aria-labelledby="contato-title">
          <h2
            id="contato-title"
            className="text-2xl font-semibold mb-4 text-foreground"
          >
            7. Contato
          </h2>
          <p>
            Para questões relacionadas a estes termos, entre em contato através
            do email:
            <a
              href="mailto:canutoilberto@gmail.com"
              className="text-primary hover:underline ml-1 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-2 py-1"
              aria-label="Enviar email para canutoilberto@gmail.com"
            >
              canutoilberto@gmail.com
            </a>
          </p>
        </section>
      </div>

      <div className="mt-8 text-center">
        <a
          href="#"
          className="text-primary hover:underline focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 rounded px-4 py-2"
          onClick={(e) => {
            e.preventDefault();
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
        >
          Voltar ao topo
        </a>
      </div>
    </main>
  );
}
