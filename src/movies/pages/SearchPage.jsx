import { useEffect } from "react";
import "../styles/SearchPage.css";
import "../styles/Loader.css";
import { useDispatch, useSelector } from "react-redux";
import { loadMoviesCollection } from "../../store";
import { PosterCard } from "../components";
import { useOutletContext } from "react-router-dom";


export const SearchPage = () => {
  const setnavColor = useOutletContext();
  setnavColor("orange");
  const { moviesCollection, isLoading } = useSelector((state) => state.movie);
  
  const dispatch = useDispatch();
 
  useEffect(() => {
    dispatch(loadMoviesCollection());
  }, []);



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
            // onChange={onChangeSearch}
            // value={search}
            // disabled={isLoading}
          />
        </div>
      </div>


     

    </div>

    <p className="search__collection__card--message">Se encontraron ({moviesCollection.length}) películas <i class="bi bi-film"></i></p>
    <div className="search__collection__card">
  
    {isLoading ? (
          <div className="loader__container">
            <span className="loader"></span>
          </div>
        ):(
         
          moviesCollection.map((movie, index) => {
            return <PosterCard key={index} {...movie}></PosterCard>;
          })
        )
}
      </div>
    </>
  );
};
