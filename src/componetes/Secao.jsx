
function Secao({ titulo, children }) {
    return (
    <section className="secao">
        <div className="secao-cabecalho">
        <span className="secao-linha"></span>
        <h2>{titulo}</h2>
        </div>

        <div className="secao-conteudo">
        {children}
        </div>
    </section>
    );
}

export default Secao;
