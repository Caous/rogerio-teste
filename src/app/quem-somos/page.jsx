import Footer from "../../components/Footer";
import Menu from "../../components/Menu";
import HeaderDocs from "../../components/HeaderDocs";
import Image from "next/image";

export default function QuemSomos() {
  return (
    <>
      <Menu />

      <HeaderDocs
        title="Quem somos"
        description="Somos um blog dedicado a quem trabalha ou se interessa por instalações elétricas residenciais. Aqui, compartilhamos guias, dicas e conteúdos sobre as ferramentas essenciais para um trabalho seguro, preciso e eficiente. Nosso objetivo é informar e apoiar tanto profissionais quanto entusiastas da área elétrica."
      />

      <div className="max-w-7xl mx-auto py-24 px-5 xl:px-0">
        <div className="flex flex-col xl:flex-row items-center justify-between bg-white gap-12">
          <div className="w-full xl:w-1/2 text-[#232536]">
            <p className="text-lg font-semibold uppercase mb-5">
              Conheça sobre nós
            </p>
            <h1 className="text-3xl xl:text-4xl font-bold mb-8">
              Guiamos você no uso das ferramentas elétricas certas.
            </h1>
            <p className="mb-9 text-xl leading-8">
              Compartilhamos conhecimento técnico e prático sobre instalações
              elétricas residenciais, com foco na segurança, eficiência e no uso
              correto das ferramentas. Nosso objetivo é apoiar eletricistas,
              estudantes e entusiastas da área a executarem seus projetos com
              mais confiança, evitando erros comuns e garantindo um trabalho
              bem-feito do início ao fim. Acreditamos que informação de
              qualidade transforma a forma como lidamos com a eletricidade.
            </p>

            <div className="flex flex-wrap gap-4">
              <span className="px-5 py-1 border border-[#232536] text-base rounded-full uppercase">
                Ferramentas
              </span>
              <span className="px-5 py-1 border border-[#232536] text-base rounded-full uppercase">
                Elétrica
              </span>
              <span className="px-5 py-1 border border-[#232536] text-base rounded-full uppercase">
                Dicas
              </span>
            </div>
          </div>

          <div className="h-[500px] w-full xl:w-1/2">
            <div className="w-full bg-orange-600 flex items-center justify-center">
              <Image
                src="/quem-somos.svg"
                alt=""
                className="object-cover w-full h-[500px] "
                width={570}
                height={570}
              />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
