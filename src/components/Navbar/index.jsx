import { NavLink } from "react-router-dom";
import { rotasDaAplicacao } from "../../routesConfig";
import style from "./NavBar.module.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
      <div className="container">
        <NavLink className="navbar-brand" to="/">
          Menu de Exercícios
        </NavLink>

        <div className="collapse navbar-collapse">
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
