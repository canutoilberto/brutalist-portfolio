import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso | Dev Neninho",
  description: "Termos de uso e condições do site Dev Neninho",
};

export default function TermosDeUso() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Termos de Uso</h1>

      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            1. Aceitação dos Termos
          </h2>
          <p>
            Ao acessar e utilizar este site, você concorda em cumprir e ficar
            vinculado aos seguintes termos e condições de uso. Se você não
            concordar com qualquer parte destes termos, não deverá utilizar este
            site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            2. Uso do Site
          </h2>
          <p>
            Este site é destinado a fornecer informações sobre serviços de
            desenvolvimento web e mobile. O conteúdo é fornecido apenas para
            fins informativos e não constitui uma oferta de serviços.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            3. Propriedade Intelectual
          </h2>
          <p>
            Todo o conteúdo presente neste site, incluindo textos, imagens,
            logos e código-fonte, é protegido por direitos autorais e outras
            leis de propriedade intelectual. O uso não autorizado deste conteúdo
            é estritamente proibido.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            4. Limitação de Responsabilidade
          </h2>
          <p>
            O site é fornecido "como está", sem garantias de qualquer tipo. Não
            nos responsabilizamos por quaisquer danos diretos, indiretos,
            incidentais ou consequentes que possam resultar do uso ou
            impossibilidade de uso do site.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            5. Modificações
          </h2>
          <p>
            Reservamo-nos o direito de modificar estes termos a qualquer
            momento. As alterações entram em vigor imediatamente após sua
            publicação no site. O uso continuado do site após as alterações
            constitui aceitação dos novos termos.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            6. Lei Aplicável
          </h2>
          <p>
            Estes termos são regidos pelas leis do Brasil. Qualquer disputa
            relacionada a estes termos será submetida à jurisdição exclusiva dos
            tribunais brasileiros.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            7. Contato
          </h2>
          <p>
            Para questões relacionadas a estes termos, entre em contato através
            do email:
            <a
              href="mailto:canutoilberto@gmail.com"
              className="text-primary hover:underline ml-1"
            >
              canutoilberto@gmail.com
            </a>
          </p>
        </section>
      </div>
    </main>
  );
}
