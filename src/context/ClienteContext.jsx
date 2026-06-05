import { createContext, useState, useEffect } from "react";
import { getClientes } from "../services/api";

// eslint-disable-next-line react-refresh/only-export-components
export const ClienteContext = createContext();

export const ClienteProvider = ({ children }) => {
  const [clientes, setClientes] = useState([]);

  const carregarClientes = () => {
    getClientes()
      .then((response) => setClientes(response.data))
      .catch((error) => console.error("Erro ao buscar clientes:", error));
  };

  useEffect(() => {
    carregarClientes();
  }, []);

  return (
    <ClienteContext.Provider value={{ clientes, carregarClientes }}>
      {children}
    </ClienteContext.Provider>
  );
};
