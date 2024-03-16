import { NavLink } from "react-router-dom";
import "../styles/OPnavbar.scss";

export const OPnavbar = ({navColor}) => {
  return (
    <nav className="navbar__container" style={{backgroundColor:`${navColor}`}}>
      <NavLink className="navbar__container__link animate__animated animate__fadeIn" to="/main">
        Principal
      </NavLink>
      <NavLink className="navbar__container__link animate__animated animate__fadeIn" to="/search">
        Búsqueda
      </NavLink>
    </nav>
  );
};
