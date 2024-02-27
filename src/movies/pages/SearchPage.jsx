
import "../styles/SearchPage.css";
import "../styles/Loader.css";

import { PosterCard } from "../components";
import { useOutletContext } from "react-router-dom";
import { useFilterSearch } from "..";

export const SearchPage = () => {
  const setnavColor = useOutletContext();
  setnavColor("orange");


  const { order, onChangeOrder, moviesCollection,isLoading,search,onChangeSearch } =  useFilterSearch();

  return (
    <>
      <div className="search">
        <div className="search__container">
          <div className="search__container__title">
            <h3 className="search__container__title--text">
              Ingrese la película de{" "}
              <span className="search__container__title--important">
                One Piece
              </span>{" "}
              a buscar ...
            </h3>
          </div>

          <div className="input-group flex-nowrap">
            <span className="input-group-text" id="addon-wrapping">
              <i className="bi bi-search"></i>
            </span>
            <input
              type="text"
              className="form-control"
              placeholder="wuan pis :)"
              aria-label="Username"
              aria-describedby="addon-wrapping"
              onChange={onChangeSearch}
              value={search}
              disabled={isLoading}
            />
          </div>
          <div className="search__container__filter">
            <div className="search__container__filter__orden">
              <p>Ordenar por</p>
              <div
                className={`btn-group ${isLoading ? " disableClass" : ""}`}
                role="group"
                aria-label="Basic checkbox toggle button group"
              >
                <input
                  type="checkbox"
                  className="btn-check"
                  name="btnradio"
                  id="btnradio1"
                  autoComplete="off"
                  checked={order}
                  onChange={onChangeOrder}
                />
                <label className="btn btn-outline-warning" htmlFor="btnradio1">
                  Año
                </label>
                <input
                  type="checkbox"
                  className="btn-check "
                  name="btnradio"
                  id="btnradio2"
                  autoComplete="off"
                  checked={!order}
                  onChange={onChangeOrder}
                />
                <label className="btn btn-outline-warning" htmlFor="btnradio2">
                  Duración
                </label>
              </div>
            </div>

            <p className="search__collection__card--message">
              Se encontraron ({moviesCollection.filter((movie)=>{
            if (!!movie.title) {
            return movie.title.toLowerCase().includes(search.toLowerCase());
          } else {
            return false;
          }
          
          }).length}) películas{" "}
              <i className="bi bi-film"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="search__collection__card">
        {isLoading ? (
          <div className="loader__container">
            <span className="loader"></span>
          </div>
        ) : (
          moviesCollection.filter((movie)=>{
            if (!!movie.title) {
            return movie.title.toLowerCase().includes(search.toLowerCase());
          } else {
            return false;
          }
          
          }).map((movie, index) => {
            return <PosterCard key={index} {...movie}></PosterCard>;
          })
        )}
      </div>
    </>
  );
};
