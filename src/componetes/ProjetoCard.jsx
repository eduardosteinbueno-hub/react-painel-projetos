
import StatusBadge from "./StatusBadge";
import TecnologiaTag from "./TecnologiaTag";

function ProjetoCard({
    titulo,
    descricao,
    responsavel,
    status,
    tecnologias,
    destaque
}) {
    return (
    <article className={`projeto-card ${destaque ? "card-destaque" : ""}`}>
        <div className="card-topo">
        <div className="projeto-icone">&lt;/&gt;</div>
        <StatusBadge status={status} />
        </div>

        {destaque && (
        <span className="selo-destaque">
            ★ Projeto em destaque
        </span>
        )}

        <h3>{titulo}</h3>
        <p className="projeto-descricao">{descricao}</p>

        <div className="projeto-responsavel">
        <span className="avatar">
            {responsavel.charAt(0).toUpperCase()}
        </span>

        <div>
            <span className="responsavel-label">Responsável</span>
            <strong>{responsavel}</strong>
        </div>
    </div>

        <div className="tecnologias-area">
        <span className="tecnologias-titulo">TECNOLOGIAS</span>

        <div className="tecnologias-lista">
            {tecnologias.map((tecnologia) => (
            <TecnologiaTag
                key={tecnologia}
                nome={tecnologia}
            />
            ))}
        </div>
        </div>
    </article>
    );
}

export default ProjetoCard;
