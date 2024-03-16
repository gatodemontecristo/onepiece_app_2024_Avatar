
import { useFormat, useNavigatioPage } from "../hooks";
import "../styles/PosterCard.scss";
import { PosterGenresTag } from "./PosterGenresTag";
import { ProducersItem } from "./ProducersItem";

export const PosterCard = (movie) => {

  const {getRating } =  useFormat();
  const {onNavigatePage } =  useNavigatioPage(`/detail/${movie.mal_id}`);
 

  return (
    <a href="" onClick={onNavigatePage} className="search__container__poster__card--a">
    <div className="search__container__card animate__animated animate__bounceInUp">
      <div className="search__container__poster">
        <img src={movie.image_url} alt={movie.title} />
      </div>
      <div className="search__container__details">
        <h1> {!!movie.title ? movie.title : "One Piece : [SIN TITULO"}</h1>
        <h2>
          {movie.date_aired} • {getRating(movie.rating)} •{" "}
          {movie.duration}
        </h2>

        <div className="search__container__tags">
          {movie.genres.map((genre, index) => {
            return <PosterGenresTag key={index} {...genre}></PosterGenresTag>;
          })}
        </div>
        <div className="search__container__desc--div">
          <p className="search__container__desc">
            {!!movie.synopsis ? movie.synopsis : "[!!!SIN DATA!!!]"}
          </p>
        </div>
        <div className="search__container__cast">
          <h3>Productoras</h3>
          <ul>
            {movie.producers.length != 0 ? (
              <ProducersItem src="/productoras/fujipacific.jfif" name={movie.producers[0].name}></ProducersItem>
         
            ) : (
              <></>
            )}

            {movie.licensors.length != 0 ? (
              <ProducersItem src="/productoras/funimation.jpg" name={movie.licensors[0].name}></ProducersItem>
              
            ) : (
              <></>
            )}

            {movie.studios.length != 0 ? (
               <ProducersItem src="/productoras/toei.jpg" name={movie.studios[0].name}></ProducersItem>
             
            ) : (
              <></>
            )}
          </ul>
        </div>
      </div>
    </div>
    </a>
  );
};
