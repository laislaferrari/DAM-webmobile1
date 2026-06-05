export default function Alert({ dadosCliente }) {
  return (
    <div className="alert alert-success mt-4" id="liveAlertPlaceholder">
      <h4>Cliente cadastrado com Sucesso!</h4>
      <h5>Dados inseridos:</h5>
      <ul className="list-group">
        <strong>Nome:</strong> {dadosCliente.name} <br />
        <strong>Email:</strong> {dadosCliente.email} <br />
        <strong>CPF:</strong> {dadosCliente.cpf}
      </ul>
    </div>
  );
}
