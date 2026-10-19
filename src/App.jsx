
import Cabecalho from "./components/Cabecalho.jsx";
import Secao from "./components/Secao.jsx";
import Resumo from "./components/Resumo.jsx";
import ProjetoCard from "./components/ProjetoCard.jsx";
import Rodape from "./components/Rodape.jsx";

import "./App.css";

const projetos = [
  {
    id: 1,
    titulo: "Sistema de Estoque",
    descricao: "Sistema para cadastrar produtos e controlar movimentações do estoque.",
    responsavel: "Ana Silva",
    status: "Concluído",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: true,
  },
  {
    id: 2,
    titulo: "Site de Portfólio",
    descricao: "Página pessoal para apresentar trabalhos e habilidades profissionais.",
    responsavel: "Lucas Mendes",
    status: "Concluído",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false,
  },
  {
    id: 3,
    titulo: "Aplicativo de Tarefas",
    descricao: "Aplicação para organizar atividades e acompanhar prazos.",
    responsavel: "Mariana Costa",
    status: "Em desenvolvimento",
    tecnologias: ["React", "JavaScript", "CSS"],
    destaque: true,
  },
  {
    id: 4,
    titulo: "Sistema Escolar",
    descricao: "Plataforma para organizar alunos, turmas e notas escolares.",
    responsavel: "Pedro Oliveira",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Node.js", "MySQL"],
    destaque: false,
  },
  {
    id: 5,
    titulo: "Loja Virtual",
    descricao: "Catálogo de produtos e organização de pedidos de uma loja online.",
    responsavel: "Julia Santos",
    status: "Planejamento",
    tecnologias: ["HTML", "CSS", "JavaScript"],
    destaque: false,
  },
  {
    id: 6,
    titulo: "Controle Financeiro",
    descricao: "Sistema para registrar receitas, despesas e organizar o orçamento.",
    responsavel: "Gabriel Souza",
    status: "Em desenvolvimento",
    tecnologias: ["React", "Node.js", "PostgreSQL"],
    destaque: false,
  },
];

function App() {
  const total = projetos.length;

  const concluidos = projetos.filter(
    (projeto) => projeto.status === "Concluído"
  ).length;

  const emDesenvolvimento = projetos.filter(
    (projeto) => projeto.status === "Em desenvolvimento"
  ).length;

  return (
    <div className="app" id="inicio">
      <Cabecalho />

      <main>
        <section className="hero">
          <div className="container hero-conteudo">
            <span className="hero-etiqueta">
              <span className="ponto-ativo" />
              NOSSA TURMA • NOSSOS PROJETOS
            </span>

            <h1>
              Ideias que viram
              <span className="hero-destaque"> projetos reais.</span>
            </h1>

            <p>
              Conheça os projetos desenvolvidos pelos alunos do curso
              Técnico em Desenvolvimento de Sistemas do SENAI.
            </p>

            <a href="#projetos" className="botao-principal">
              Explorar projetos <span>→</span>
            </a>

            <div className="hero-informacoes">
              <div>
                <strong>{total}</strong>
                <span>Projetos apresentados</span>
              </div>

              <div>
                <strong>2026</strong>
                <span>Ano letivo</span>
              </div>

              <div>
                <strong>Dev</strong>
                <span>Aprendizado na prática</span>
              </div>
            </div>
          </div>

          <div className="hero-decoracao" aria-hidden="true">
            <span className="decoracao-simbolo">{"{ }"}</span>
            <span className="decoracao-circulo" />
            <span className="decoracao-codigo">
              const futuro = "dev";
            </span>
          </div>
        </section>

        <div className="container conteudo-principal">
          <div id="resumo" className="ancora-secao">
            <Secao titulo="Visão geral">
              <Resumo
                total={total}
                concluidos={concluidos}
                emDesenvolvimento={emDesenvolvimento}
              />
            </Secao>
          </div>

          <div id="projetos" className="ancora-secao">
            <Secao titulo="Projetos da turma">
              <div className="projetos-introducao">
                <p>
                  Uma coleção de ideias, experiências e soluções
                  desenvolvidas durante o curso.
                </p>

                <span className="contador-projetos">
                  {total} projetos
                </span>
              </div>

              <div className="projetos-grid">
                {projetos.map((projeto) => (
                  <ProjetoCard
                    key={projeto.id}
                    titulo={projeto.titulo}
                    descricao={projeto.descricao}
                    responsavel={projeto.responsavel}
                    status={projeto.status}
                    tecnologias={projeto.tecnologias}
                    destaque={projeto.destaque}
                  />
                ))}
              </div>
            </Secao>
          </div>

          <section className="chamada-final">
            <div>
              <span className="chamada-etiqueta">
                APRENDER • CRIAR • EVOLUIR
              </span>

              <h2>O próximo projeto pode ser o seu.</h2>

              <p>
                Cada linha de código é uma oportunidade de aprender
                algo novo e transformar ideias em soluções.
              </p>
            </div>

            <a href="#inicio" className="botao-secundario">
              Voltar ao início ↑
            </a>
          </section>
        </div>
      </main>

      <Rodape />
    </div>
  );
}

export default App;
