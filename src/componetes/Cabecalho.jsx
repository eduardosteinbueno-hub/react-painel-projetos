
function Cabecalho() {
    return (
    <header className="cabecalho">
        <div className="container cabecalho-conteudo">
        <a href="#inicio" className="logo">
            <span className="logo-icone">&lt;/&gt;</span>
            <span>Dev<span className="texto-azul">Projects</span></span>
        </a>

        <nav className="navegacao">
            <a href="#inicio">Início</a>
            <a href="#resumo">Resumo</a>
            <a href="#projetos">Projetos</a>
        </nav>

        <span className="turma">SENAI • 2026</span>
        </div>
    </header>
    );
}

export default Cabecalho;
