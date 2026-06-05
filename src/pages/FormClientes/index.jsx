import { useState, useContext } from "react";
import { createCliente } from "../../services/api";
import { ClienteContext } from "../../context/ClienteContext";
import Alert from "./Alert";
import Input from "../../components/Input";

export default function FormClientes() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cpf, setCpf] = useState("");
  const [dadosCliente, setDadosCliente] = useState(null);
  const { carregarClientes } = useContext(ClienteContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newPost = {
      name: nome,
      email: email,
      cpf: cpf,
    };

    setDadosCliente(newPost);

    createCliente(newPost)
      .then(() => {
        carregarClientes();

        setTimeout(() => {
          setDadosCliente(null);
        }, 5000);
      })
      .catch((error) => {
        console.log("Erro de requisição", error);
      });

    setCpf("");
    setNome("");
    setEmail("");
  };

  return (
    <div className="container min-vh-100">
      <h2 className="py-4">Cadastro de Clientes</h2>
      <form onSubmit={handleSubmit} className="form">
        <Input
          placeholder="Preencha o seu nome"
          value={nome}
          label="Nome:"
          onChange={setNome}
        />
        <Input
          placeholder="Preencha o seu email"
          value={email}
          label="Email:"
          onChange={setEmail}
        />
        <Input
          placeholder="Preencha o seu cpf"
          value={cpf}
          label="CPF:"
          onChange={setCpf}
        />
        <button type="submit" className="btn btn-primary">
          Enviar
        </button>
      </form>
      {dadosCliente && <Alert dadosCliente={dadosCliente} />}
    </div>
  );
}
