import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade | Dev Neninho",
  description:
    "Política de privacidade e proteção de dados do site Dev Neninho",
};

export default function PoliticaDePrivacidade() {
  return (
    <main className="container mx-auto px-4 py-12 max-w-4xl">
      <h1 className="text-4xl font-bold mb-8">Política de Privacidade</h1>

      <div className="space-y-6 text-muted-foreground">
        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            1. Introdução
          </h2>
          <p>
            Esta Política de Privacidade descreve como suas informações pessoais
            são coletadas, usadas e compartilhadas quando você visita ou
            interage com nosso site. Estamos comprometidos em proteger sua
            privacidade e cumprir com a Lei Geral de Proteção de Dados (LGPD -
            Lei nº 13.709/2018).
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            2. Dados que Coletamos
          </h2>
          <p>Podemos coletar os seguintes tipos de informações:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>
              Informações de contato (nome, email) quando você nos envia uma
              mensagem
            </li>
            <li>Dados de uso do site (cookies, logs de acesso)</li>
            <li>Informações técnicas (navegador, dispositivo, endereço IP)</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            3. Como Usamos Seus Dados
          </h2>
          <p>Utilizamos suas informações pessoais para:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Responder suas mensagens e solicitações</li>
            <li>Melhorar e personalizar sua experiência no site</li>
            <li>Analisar o uso do site para melhorias</li>
            <li>Cumprir obrigações legais</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            4. Compartilhamento de Dados
          </h2>
          <p>
            Não compartilhamos suas informações pessoais com terceiros, exceto
            quando:
          </p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Exigido por lei</li>
            <li>Necessário para proteger nossos direitos</li>
            <li>Com seu consentimento explícito</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            5. Seus Direitos
          </h2>
          <p>De acordo com a LGPD, você tem os seguintes direitos:</p>
          <ul className="list-disc ml-6 mt-2 space-y-2">
            <li>Acesso aos seus dados pessoais</li>
            <li>Correção de dados incompletos ou desatualizados</li>
            <li>Exclusão de dados desnecessários</li>
            <li>Portabilidade dos dados</li>
            <li>Revogação do consentimento</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            6. Segurança dos Dados
          </h2>
          <p>
            Implementamos medidas de segurança técnicas e organizacionais para
            proteger suas informações pessoais contra acesso não autorizado,
            alteração, divulgação ou destruição.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            7. Cookies
          </h2>
          <p>
            Utilizamos cookies e tecnologias similares para melhorar sua
            experiência no site. Você pode controlar o uso de cookies através
            das configurações do seu navegador.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            8. Alterações na Política
          </h2>
          <p>
            Podemos atualizar esta política periodicamente. Recomendamos que
            você revise esta página regularmente para se manter informado sobre
            como protegemos suas informações.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-foreground">
            9. Contato
          </h2>
          <p>
            Para exercer seus direitos ou esclarecer dúvidas sobre esta
            política, entre em contato através do email:
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
