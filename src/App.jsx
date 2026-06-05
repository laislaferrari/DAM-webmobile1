import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ClienteProvider } from "./context/ClienteContext";
import { rotasDaAplicacao } from "./routesConfig";

function App() {
  return (
    <ClienteProvider>
      <div>
        <Navbar />
        <Routes>
          {rotasDaAplicacao.map((rota, index) => (
            <Route key={index} path={rota.path} element={rota.element} />
          ))}
        </Routes>
        <Footer />
      </div>
    </ClienteProvider>
  );
}

export default App;
