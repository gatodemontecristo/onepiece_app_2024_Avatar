import { useEffect } from "react";
import { loadMovieDetail } from "../../store";
import { Navigate, useNavigate, useOutletContext, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Loader.css";
import "../styles/DetailePage.css";
import { useFormat } from "../hooks";
import { CharacterAvatar } from "../components";

export const DetailePage = () => {
  const setnavColor = useOutletContext();
  setnavColor("orange");

  const { movieDetail, isLoading } = useSelector((state) => state.movie);
  if (!movieDetail) {
    return <Navigate to="/main"></Navigate>;
  }
  const { mal_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovieDetail(mal_id));
  }, []);

  console.log(movieDetail);
 

  const navigate = useNavigate();

  const onNavigateBack = () => {
    navigate("/search");
  };

  const {getYear,startMovie,objectLines } =  useFormat();
  return (
    <>
      {isLoading ? (
        <div className="loader__container_vs2">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="container movieAll">
            <div className="movieInfoTitle">
            <h1>
              {movieDetail.title} 
              ({!!movieDetail.aired ? getYear(movieDetail.aired.from) : ""})
            </h1>
            <div className="movieButtonCollection  animate__animated animate__fadeIn">
              <button type="button" className="btn btn-secondary">
                IMDb {movieDetail.score}
              </button>
              <button type="button" className="btn btn-warning moviePrimaryButton">
                {" "}
                <i className="bi bi-heart-fill redHeart"></i> Mirar luego
              </button>
              <button type="button" className="btn btn-warning moviePrimaryButton">
                {" "}
                <i className="bi bi-people-fill"></i> Invitar amigos
              </button>
            </div>
          </div>
          <div>
            <hr className="movieLine" />

            <div className="movieCard">
              <div className="movieImageInfo animate__animated animate__fadeInLeft">
                <img src={!!movieDetail.images ? getYear(movieDetail.images.jpg.large_image_url) : ""} alt="" />
                
                <button type="button" className="btn btn-danger">
                  <i className="bi bi-suit-heart-fill"></i> Mirar luego
                </button>
                <button type="button" className="btn btn-warning">
                  <i className="bi bi-plus"></i> Añadir lista
                </button>
                <button type="button" className="btn btn-warning">
                  <i className="bi bi-three-dots"></i> Traducir
                </button>
                <button
                  type="button"
                  className="btn btn-secondary"
                >
                  <i className="bi bi-chat-fill"></i> Mostrar comentarios
                </button>
              </div>
              <div className="movieDetailInfo">
                <div className="movieInfoSubTitle">
                  <h1>{movieDetail.title_english}</h1>
                  <button
                    type="button"
                    className="btn btn-light moviePrimaryButton"
                  >
                    IMDb {movieDetail.score}
                  </button>
                </div>
                <div className="movieInfoText">
                  <p>{movieDetail.title_japanese}</p> | <i className="bi bi-graph-up-arrow"></i>  <p>{movieDetail.rank}</p>
                </div>
                <hr className="movieLine" />

                <div className="movieSecondaryDetails">
                  <i className="bi bi-eye-fill"></i>
                  <p>{movieDetail.scored_by}</p>

                  <div className="movieStars">
                    {startMovie(movieDetail.score) > 1 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                    {startMovie(movieDetail.score) > 1.5 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                    {startMovie(movieDetail.score) > 3 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                    {startMovie(movieDetail.score) > 3.6 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                    {startMovie(movieDetail.score) > 4 ? (
                      <i className="bi bi-star-fill"></i>
                    ) : (
                      <i className="bi bi-star"></i>
                    )}
                  </div>

                  <div className="movieSecondaryDetailsExtra">
                    <p>{objectLines(movieDetail.genres)}</p>
                    <p>|</p>
                    <p>{movieDetail.duration}</p>
                    <p>|</p>
                    <p>{movieDetail.rating}</p>
                  </div>
                </div>

                <hr className="movieLine" />
                <div className="movieAditionalDetails">
                  <h1>Details</h1>

                  <p>
                    Estatus : <span>{movieDetail.status}</span>
                  </p>
                  <p>
                    Popularidad : <span>{movieDetail.popularity}</span>
                  </p>
                  <p>
                    Productoras :{" "}
                    <span>{objectLines(movieDetail.producers)}</span>
                  </p>
                  <p>
                    Licencias :{" "}
                    <span>{objectLines(movieDetail.licensors)}</span>
                  </p>
                  <p>
                    Salida al aire : <span>{!!movieDetail.aired ? getYear(movieDetail.aired.string) : ""}</span>
                  </p>
                  <p>
                    Estudios :{" "}
                    <span>{objectLines(movieDetail.studios)}</span>
                  </p>
                </div>
                <hr className="movieLine" />

                <div className="movieInfoCharacteristics">
                  <h1>Sinopsis</h1>
                  <p>{movieDetail.synopsis}</p>
                </div>
              </div>
            </div>
          </div>
          <hr className="movieLine" />
            
            <div className="movieInfo__characters">
            <h1 className="movieInfo__characters__title">Personajes</h1>
            <div className="movieInfo__characters__collection">
              {

!!movieDetail.caracteres ? (movieDetail.caracteres.map((character, index) => {
  return <CharacterAvatar key={index} {...character}></CharacterAvatar>;
})) : (<></>)


                
              }
              {/* <a href="" className="movieInfo__characters__collection__character--a">
                        <div className="movieInfo__characters__collection__character">
                            <div className="movieInfo__characters__collection__character--img">
                                <img src="/pruebajpg.jpg" alt="" />
                                <div className="movieInfo__characters__collection__character--icon">
                                 <p><i className="bi bi-bookmark-star-fill"></i></p>
                                </div>
                            </div>
                            <p className="movieInfo__characters__collection__character--name">Hiluluk</p>
                        </div>
                        </a> */}
            </div>
            </div>


          <hr className="movieLine" />
          <div className="movieBack">
            <button
              type="button"
              className="btn btn-dark mySearchLogOut"
              onClick={onNavigateBack}
            >
              <i className="bi bi-skip-backward-fill"></i>
            </button>
            <h2>Volver</h2>
          </div>
        </div>
      )}
    </>
  );
};
