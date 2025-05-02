import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import HeaderDocs from "../../components/HeaderDocs";

export default function Privacidade() {
  return (
    <>
      <Menu />

      <HeaderDocs
        subtitle="Última atualização: 23 abril de 2025"
        title="Política de Privacidade"
        description="Reservamo-nos o direito de alterar as nossas medidas de segurança e proteção de dados. Nesses casos, alteraremos nosso aviso de proteção de dados de acordo. Portanto, observe a versão atual do nosso aviso de proteção de dados, pois está sujeita a alterações."
      />

      <div className="max-w-7xl mx-auto py-24 p-5">
        <div className="text-xl bg-[#F5F5F5] p-4 xl:p-10 text-[#232536]">
          <h2 className="font-semibold mb-3">
            1. Blog respeita a sua privacidade
          </h2>

          <p className="mb-9 leading-8">
            A proteção da sua privacidade durante o tratamento de dados
            pessoais, bem como a segurança de todos os dados comerciais são
            preocupações importantes para nós. Tratamos os dados pessoais que
            foram coletados durante a sua visita às nossas Ofertas Online de
            forma confidencial e apenas de acordo com os regulamentos legais. A
            proteção de dados e a segurança da informação estão incluídas em
            nossa política corporativa.
          </p>

          <h2 className="font-semibold mb-3">2. Comentários</h2>

          <p className="mb-9 leading-8">
            (Base legal: consentimento. Trataremos seu nome como dado pessoal
            para a finalidade de receber/responder seus comentários em nossas
            postagens no blog).
          </p>

          <h2 className="font-semibold mb-3">3. Links externos</h2>

          <p className="mb-9 leading-8">
            Nossos Posts podem conter links para páginas da Internet de
            terceiros, em particular provedores que não estão relacionados a
            nós. Ao clicar no link, não temos influência sobre a coleta,
            processamento e uso de dados pessoais possivelmente transmitidos ao
            clicar no link para terceiros (como o endereço IP ou URL do site no
            qual o link está localizado), pois a conduta de terceiros está
            naturalmente além do nosso controle. Não assumimos qualquer
            responsabilidade pelo processamento de dados pessoais por terceiros.
          </p>

          <h2 className="font-semibold mb-3">4. Segurança</h2>

          <p className="mb-9 leading-8">
            Tomamos todas as medidas técnicas e organizacionais necessárias para
            garantir um nível adequado de segurança e proteger seus dados
            gerenciados por nós, especialmente contra os riscos de destruição,
            manipulação, perda, alteração ou divulgação não autorizada ou acesso
            não autorizado ou ilegal. Nossas medidas de segurança, de acordo com
            o progresso tecnológico, estão sendo constantemente aprimoradas.
          </p>

          <h2 className="font-semibold mb-3">5. Direitos do Usuário</h2>

          <p className="mb-9 leading-8">
            Para fazer valer seus direitos, use os detalhes fornecidos na seção
            Contato. Ao fazer isso, certifique-se de que uma identificação
            inequívoca de sua pessoa seja possível.
          </p>

          <p className="leading-8">
            Direito de confirmação de existência de tratamento e acesso: Você
            tem o direito de obter nossa confirmação sobre se os seus dados
            pessoais estão sendo tratados ou não e, se for o caso, o acesso aos
            seus dados pessoais.
          </p>

          <p className="mb-9 leading-8">
            Direito à correção de dados incompletos, inexatos ou desatualizados:
            Você tem o direito de contestar a exatidão de quaisquer dados
            pessoais e corrigi-los e do processamento de dados antes de sua
            retirada permanece inalterada.
          </p>

          <h2 className="font-semibold mb-3">
            6. Alterações ao Aviso de Proteção de Dados
          </h2>

          <p className="leading-8">
            Reservamo-nos o direito de alterar as nossas medidas de segurança e
            proteção de dados. Nesses casos, alteraremos nosso aviso de proteção
            de dados de acordo. Portanto, observe a versão atual do nosso aviso
            de proteção de dados, pois está sujeita a alterações.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
