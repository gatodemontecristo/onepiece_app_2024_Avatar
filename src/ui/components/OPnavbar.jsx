import { NavLink } from "react-router-dom";
import "../styles/OPnavbar.css";

export const OPnavbar = () => {
  return (
    <nav className="navbar__container">
      <NavLink className="navbar__container__link" to="/main">
        Principal
      </NavLink>
      <NavLink className="navbar__container__link" to="/search">
        Búsqueda
      </NavLink>
    </nav>
  );
};
