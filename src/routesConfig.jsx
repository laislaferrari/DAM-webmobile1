import FormClientes from "./components/FormClientes";
import BuscarUsuario from "./components/BuscarUsuario";
import ListaClientes from "./components/ListaClientes";
import FiltroDeCarros from "./components/FiltroDeCarros";
import Cores from "./components/Cores";

export const rotasDaAplicacao = [
  { path: "/", label: "Formulário de Clientes", element: <FormClientes /> },
  { path: "/buscar", label: "Buscar Usuário", element: <BuscarUsuario /> },
  { path: "/clientes", label: "Lista de Clientes", element: <ListaClientes /> },
  { path: "/carros", label: "Filtro de Carros", element: <FiltroDeCarros /> },
  { path: "/cores", label: "Cores", element: <Cores /> },
];
