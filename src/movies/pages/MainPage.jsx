import { useOutletContext } from "react-router-dom";
import "../styles/MainPage.scss";
import Atropos from 'atropos/react';
export const MainPage = () => {
  const setnavColor = useOutletContext();
  setnavColor("none");
  return (
    <div className="main__container">
      <div className="main__container__blue"></div>
      <div className="main__container__orange"></div>
      <Atropos className="main__container__atropos animate__animated animate__zoomInDown"  shadow={false} highlight={false}>
        <div className="main__container__atropos--img">
      <div className="main__container__titulo">
        <h3 className="main__container__titulo--second">rey de los</h3>
        <h2 className="main__container__titulo--primary">piratas</h2>
      </div>
    
      <img
        className="main__container__image--luffy"
        src="/portada/luffy.png"
        alt=""
      />
      </div>
    </Atropos>
      <img
        className="main__container__image--logo"
        src="/portada/logo.png"
        alt=""
      />
      
      <div className="main__container__circle">
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
      </div>
      <div className="main__container__circle--blue">
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
        <p>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
          <i className="bi bi-circle-fill"></i>
        </p>
      </div>
      <div className="main__container__introduction">
      <p>Monkey D Luffy es uno de los personajes mas populares en el mundo del anime con mas de 20+ películas </p>
      </div>
    </div>
  );
};
