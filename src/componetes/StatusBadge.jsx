
function StatusBadge({ status }) {
    let classeStatus = "status-padrao";

    if (status === "Concluído") {
    classeStatus = "status-concluido";
    } else if (status === "Em desenvolvimento") {
    classeStatus = "status-desenvolvimento";
    } else if (status === "Planejamento") {
    classeStatus = "status-planejamento";
    }

    return (
    <span className={`status-badge ${classeStatus}`}>
        <span className="status-ponto"></span>
        {status}
    </span>
    );
}

export default StatusBadge;
