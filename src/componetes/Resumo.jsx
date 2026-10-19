
function Resumo({ total, concluidos, emDesenvolvimento }) {
    return (
    <div className="resumo-grid">
        <article className="resumo-card">
        <div className="resumo-icone icone-azul">▦</div>
        <p>Total de projetos</p>
        <strong>{total}</strong>
        <span>Projetos cadastrados</span>
        </article>

        <article className="resumo-card">
        <div className="resumo-icone icone-verde">✓</div>
        <p>Concluídos</p>
        <strong>{concluidos}</strong>
        <span>Projetos finalizados</span>
        </article>

        <article className="resumo-card">
        <div className="resumo-icone icone-laranja">⌛</div>
        <p>Em desenvolvimento</p>
        <strong>{emDesenvolvimento}</strong>
        <span>Projetos em andamento</span>
        </article>
    </div>
    );
}

export default Resumo;
