import { useState } from "react";
import { getClienteById } from "../../services/api";
import DadosdoUsuario from "./DadosdoUsuario";
import Input from "../Input/Index";

export default function BuscarUsuario() {
  const [id, setId] = useState("");
  const [usuario, setUsuario] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    getClienteById(id)
      .then((response) => {
        setUsuario(response.data);
      })
      .catch((error) => {
        console.log("Erro de requisição", error);
      });
  };

  return (
    <div className="container">
      <h2 className="py-4">Listar Usuário por Id</h2>
      <form onSubmit={handleSubmit} className="form">      
        <Input
          value={id}
          label={"ID do Usuário:"}
          onChange={setId}
          placeholder={"Digite o Id do Usuário"}
        />
        <button type="submit" className="btn btn-primary">
          Buscar Usuário
        </button>
      </form>
      {usuario && (
        <DadosdoUsuario
          nome={usuario.name}
          cpf={usuario.cpf}
          email={usuario.email}
        />
      )}
    </div>
  );
}
