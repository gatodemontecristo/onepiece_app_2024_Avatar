import { useEffect } from "react";
import { loadMovieDetail } from "../../store";
import { useOutletContext } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import "../styles/Loader.css";
import "../styles/DetailePage.css";

export const DetailePage = () => {
  const setnavColor = useOutletContext();
  setnavColor("orange");

  const { movieDetail, isLoading } = useSelector((state) => state.movie);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadMovieDetail());
  }, []);

  console.log(movieDetail);
  const getYear = (date = "2024") => date.split("-")[0];
  return (
    <>
      {isLoading ? (
        <div className="loader__container">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="container movieAll">
            {movieDetail.title}
            <div className="movieInfoTitle">
            <h1>
              {movieDetail.title} 
              {/* ({getYear(movieDetail.aired.from)}) */}
            </h1>
            <div className="movieButtonCollection  animate__animated animate__fadeIn">
              <button type="button" className="btn btn-secondary">
                IMDb {movieDetail.score}
              </button>
              <button type="button" className="btn btn-light moviePrimaryButton">
                {" "}
                <i className="bi bi-heart-fill redHeart"></i> Watch Later
              </button>
              <button type="button" className="btn btn-light moviePrimaryButton">
                {" "}
                <i className="bi bi-people-fill"></i> Invite Friends
              </button>
            </div>
          </div>
            </div>
      )}
    </>
  );
};
