import { NavLink } from "react-router-dom";
import { rotasDaAplicacao } from "../../routes/routesConfig";
import style from "./NavBar.module.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark mb-4">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Menu de Exercícios
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menuNavegacao"
          aria-controls="menuNavegacao"
          aria-expanded="false"
          aria-label="Alternar navegação"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menuNavegacao">
          <ul className="navbar-nav ms-auto">
            {rotasDaAplicacao.map((rota, index) => (
              <li className="nav-item" key={index}>
                <NavLink
                  className={({ isActive }) =>
                    `nav-link ${isActive ? style.linkAtivo : style.linkNormal}`
                  }
                  to={rota.path}
                >
                  {rota.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
