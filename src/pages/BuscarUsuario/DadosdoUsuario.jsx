export default function DadosdoUsuario({ nome, email, cpf }) {
  return (
    <div className="container py-5 px-0">
      <h1 className="pb-3">Dados do Usuário</h1>
      <ul className="list-group">
        <li className="list-group-item">
          <b>Nome:</b> {nome}
        </li>
        <li className="list-group-item">
          <b>E-mail:</b> {email}
        </li>
        <li className="list-group-item">
          <b>CPF:</b> {cpf}
        </li>
      </ul>
    </div>
  );
}
