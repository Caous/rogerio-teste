import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import HeaderDocs from "../../components/HeaderDocs";

export default function Comentarios() {
  return (
    <>
      <Menu />

      <HeaderDocs
        subtitle="Última atualização: 23 abril de 2025"
        title="Políticas de Comentários"
        description="Acreditamos no poder do envolvimento da comunidade e do diálogo aberto. Nossa Política de Comentários foi projetada para criar um espaço acolhedor e inclusivo para todos os leitores compartilharem suas idéias, fazerem perguntas e contribuírem para discussões significativas sobre tecnologia."
      />

      <div className="max-w-7xl mx-auto py-24 p-5">
        <div className="text-xl bg-[#F5F5F5] p-4 xl:p-10 text-[#232536]">
          <p className="mb-9 leading-8">
            Acreditamos no poder do envolvimento da comunidade e do diálogo
            aberto. Nossa Política de Comentários foi projetada para criar um
            espaço acolhedor e inclusivo para todos os leitores compartilharem
            suas idéias, fazerem perguntas e contribuírem para discussões
            significativas sobre tecnologia. Antes de entrar na conversa, revise
            e siga as seguintes diretrizes:
          </p>

          <h2 className="font-semibold mb-3">1. Comunicação Respeitosa</h2>

          <p className="mb-9 leading-8">
            Encorajamos todos a expressarem suas opiniões com respeito e
            cortesia. Desentendimentos são inevitáveis, mas vamos manter a
            conversa construtiva e focada no tema em questão. Ataques pessoais,
            linguagem ofensiva ou qualquer forma de discriminação não serão
            tolerados.
          </p>

          <h2 className="font-semibold mb-3">2. Contribuições relevantes</h2>

          <p className="mb-9 leading-8">
            Contribua para a discussão compartilhando ideias, fazendo perguntas
            ou oferecendo perspectivas alternativas relacionadas ao conteúdo da
            postagem do blog. Para manter a relevância da conversa, evite postar
            comentários fora do tópico que possam desviar a discussão.
          </p>

          <h2 className="font-semibold mb-3">
            3. Sem spam ou conteúdo promocional
          </h2>

          <p className="mb-9 leading-8">
            Nossa comunidade é um espaço para engajamento genuíno e pedimos que
            você evite postar spam ou conteúdo promocional. Isto inclui links
            para sites externos para fins promocionais. Comentários destinados
            exclusivamente à autopromoção serão removidos para garantir a
            integridade da conversa.
          </p>

          <h2 className="font-semibold mb-3">
            4. Privacidade e confidencialidade
          </h2>

          <p className="mb-9 leading-8">
            Respeite a privacidade de outras pessoas e evite compartilhar
            informações pessoais nos comentários. Abstenha-se de divulgar
            informações confidenciais ou sensíveis que possam comprometer a
            privacidade e a segurança de indivíduos ou entidades.
          </p>

          <h2 className="font-semibold mb-3">5. Moderação e discrição</h2>

          <p className="mb-9 leading-8">
            O Blog está empenhada em manter um ambiente positivo e respeitoso.
            Reservamo-nos o direito de moderar e editar comentários para maior
            clareza, adequação e conformidade com nossa Política de Comentários.
            Comentários que violem essas diretrizes poderão ser excluídos sem
            aviso prévio.
          </p>

          <h2 className="font-semibold mb-3">6. Comentários e sugestões</h2>

          <p className="mb-9 leading-8">
            Valorizamos comentários e sugestões de nossa comunidade. Se você
            tiver ideias construtivas para melhorar nosso conteúdo ou aumentar o
            envolvimento da comunidade, sinta-se à vontade para compartilhá-las
            de maneira respeitosa e atenciosa.
          </p>

          <h2 className="font-semibold mb-3">7. Responsabilidade</h2>

          <p className="mb-9 leading-8">
            Os comentaristas são responsáveis por suas palavras e ações. Embora
            o Blog não seja responsável pelo conteúdo dos comentários gerados
            pelos usuários, esperamos que todos os membros da comunidade cumpram
            os padrões de nossa Política de Comentários para garantir um
            ambiente positivo e inclusivo.
          </p>

          <h2 className="font-semibold mb-3">8. Como relatar problemas</h2>

          <p className="mb-9 leading-8">
            Se você encontrar um comentário que viole nossa Política de
            Comentários ou se tiver dúvidas sobre comportamento inadequado,
            denuncie-o à nossa equipe de moderação entrando em contato conosco
            por meio de nossa página de contato.
          </p>

          <p className="mb-9 leading-8">
            Ao participar da comunidade, você concorda em aderir a estas
            diretrizes. Agradecemos sua contribuição na criação de um espaço
            vibrante e respeitoso para discutir.
          </p>

          <p className="mb-9 leading-8">
            Se você tiver dúvidas sobre como tratamos seus dados, garantimos sua
            privacidade ou deseja entender melhor nossas políticas, recomendamos
            que você revise nossa Política de Privacidade. Sua privacidade é de
            extrema importância para nós e queremos que você se sinta seguro e
            informado sobre como operamos.
          </p>

          <p className="leading-8">
            Você pode encontrar nossa Política de Privacidade. Se você tiver
            mais alguma dúvida ou se houver mais alguma coisa em que possamos
            ajudá-lo, não hesite em entrar em contato.
          </p>
        </div>
      </div>

      <Footer />
    </>
  );
}
