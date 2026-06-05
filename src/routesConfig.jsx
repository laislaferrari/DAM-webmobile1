import FormClientes from "./pages/FormClientes";
import BuscarUsuario from "./pages/BuscarUsuario";
import ListaClientes from "./pages/ListaClientes";
import FiltroDeCarros from "./pages/FiltroDeCarros";
import Cores from "./pages/Cores";

export const rotasDaAplicacao = [
  { path: "/", label: "Formulário de Clientes", element: <FormClientes /> },
  { path: "/buscar", label: "Buscar Usuário", element: <BuscarUsuario /> },
  { path: "/clientes", label: "Lista de Clientes", element: <ListaClientes /> },
  { path: "/carros", label: "Filtro de Carros", element: <FiltroDeCarros /> },
  { path: "/cores", label: "Cores", element: <Cores /> },
];
