import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import HeaderDocs from "../../components/HeaderDocs";

export default function Cookie() {
  return (
    <>
      <Menu />

      <HeaderDocs
        subtitle="Última atualização: 23 abril de 2025"
        title="Política de Cookie"
        description="Quando visita os nossos sites, ser-lhe-á perguntado numa camada de cookies se concorda com a nossa utilização de cookies de Conforto, cookies de marketing ou mecanismos de rastreamento, respetivamente. Em nossas configurações de privacidade, você pode retirar o consentimento com efeito para o futuro ou dar seu consentimento em um momento posterior."
      />

      <div className="max-w-7xl mx-auto py-24 p-5">
        <div className="text-xl bg-[#F5F5F5] p-4 xl:p-10 text-[#232536]">
          <h2 className="font-semibold mb-3">1. Uso de cookies</h2>

          <p className="mb-9 leading-8">
            No contexto do nosso serviço digital, cookies e mecanismos de
            rastreamento podem ser usados. Cookies são pequenos arquivos de
            texto que podem ser armazenados em seu dispositivo quando você
            visita nosso serviço digital. O rastreamento é possível usando
            diferentes tecnologias. Em particular, processamos informações
            usando a tecnologia de pixel e/ou durante a análise de arquivos de
            log.
          </p>

          <h2 className="font-semibold mb-3">2. Categorias</h2>

          <p className="mb-9 leading-8">
            Distinguimos entre cookies que são necessariamente necessários para
            as funções técnicas do serviço digital e cookies e mecanismos de
            rastreamento que não são necessariamente necessários para a função
            técnica do serviço digital. Em geral, é possível usar o serviço
            digital sem cookies que servem para fins não técnicos.
          </p>

          <h2 className="font-semibold mb-3">
            3. Cookies tecnicamente necessários
          </h2>

          <p className="mb-9 leading-8">
            Por cookies tecnicamente exigidos entendem-se os cookies sem os
            quais a prestação técnica do serviço digital não pode ser garantida.
            Isso inclui, por exemplo, cookies que armazenam dados para garantir
            uma reprodução suave de fluxos de vídeo ou áudio. Esses cookies
            serão excluídos quando você sair do site.
          </p>

          <h2 className="font-semibold mb-3">
            4. Cookies que não são tecnicamente necessários
          </h2>

          <p className="mb-9 leading-8">
            Só usamos cookies e mecanismos de rastreamento se você nos deu seu
            consentimento prévio em cada caso. Com exceção do cookie que salva o
            estado atual de suas configurações de privacidade (cookie de
            seleção). Este cookie é definido com base no interesse legítimo.
            Distinguimos entre duas subcategorias no que diz respeito a esses
            cookies e mecanismos de rastreamento.
          </p>

          <h2 className="font-semibold mb-3">5. Cookies de conforto</h2>

          <p className="mb-9 leading-8">
            Estes cookies facilitam a operação e, assim, permitem-lhe navegar no
            nosso serviço online de forma mais confortável; por exemplo, suas
            configurações de idioma podem ser incluídas nesses cookies.
          </p>

          <h2 className="font-semibold mb-3">
            6. Desativando todos os cookies
          </h2>

          <p className="mb-9 leading-8">
            Se você deseja desativar todos os cookies, por favor, desative os
            cookies nas configurações do seu navegador. Observe que isso pode
            afetar a funcionalidade do site.
          </p>

          <h2 className="font-semibold mb-3">
            7. Gerenciar suas configurações em relação a cookies
          </h2>

          <p className="leading-8">
            Quando visita os nossos sites, ser-lhe-á perguntado numa camada de
            cookies se concorda com a nossa utilização de cookies de Conforto,
            cookies de marketing ou mecanismos de rastreamento, respetivamente.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
