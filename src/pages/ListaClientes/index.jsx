import { useContext } from "react";
import { ClienteContext } from "../../context/ClienteContext";

export default function ListaClientes() {
  const { clientes } = useContext(ClienteContext);

  return (
    <div className="container"> 
       <h2 className="mt-4">Lista de Pessoas</h2>

      <table className="table table-striped table-bordered mt-3">
        <thead>
          <tr>
            <th>ID:</th>
            <th>Nome:</th>
            <th>CPF:</th>
            <th>Email:</th>
          </tr>
        </thead>

        <tbody>
          {clientes.map((cliente) => (
            <tr key={cliente.id}>
              <td>{cliente.id}</td>
              <td>{cliente.name}</td>
              <td>{cliente.cpf}</td>
              <td>{cliente.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    
  
  );
}
