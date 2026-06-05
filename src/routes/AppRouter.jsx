import { Route, Routes } from "react-router-dom";
import { rotasDaAplicacao } from "./routesConfig";

export default function AppRouter() {
  return (
    <Routes>
      {rotasDaAplicacao.map((rota, index) => (
        <Route key={index} path={rota.path} element={rota.element} />
      ))}
    </Routes>
  );
}
