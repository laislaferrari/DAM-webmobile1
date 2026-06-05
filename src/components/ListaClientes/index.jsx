import { useContext } from "react";
import { ClienteContext } from "../../context/ClienteContext";

export default function ListaClientes() {
  const { clientes } = useContext(ClienteContext);

  return (
    <div className="container">
      <h2 className="py-4">Lista de Clientes</h2>
      <ul className="list-group">
        {clientes.map((cliente) => {
          return (
            <li key={cliente.id} className="list-group-item">
              {cliente.id}: {cliente.name} - {cliente.email} - {cliente.cpf}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
