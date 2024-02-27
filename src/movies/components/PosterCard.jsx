import "../styles/PosterCard.css";
import { PosterGenresTag } from "./PosterGenresTag";

export const PosterCard = (movie) => {
  const getRating = (rating = "R") => rating.split(" - ")[0];

  return (
    <a href="" onClick="" className="search__container__poster__card--a">
    <div class="search__container__card">
      <div class="search__container__poster">
        <img src={movie.image_url} alt={movie.title} />
      </div>
      <div class="search__container__details">
        <h1> {!!movie.title ? movie.title : "One Piece : [SIN TITULO"}</h1>
        <h2>
          {movie.date_aired} • {getRating(movie.rating)} •{" "}
          {movie.duration}
        </h2>

        <div class="search__container__tags">
          {movie.genres.map((genre, index) => {
            return <PosterGenresTag key={index} {...genre}></PosterGenresTag>;
          })}
        </div>
        <div className="search__container__desc--div">
          <p class="search__container__desc">
            {!!movie.synopsis ? movie.synopsis : "[!!!SIN DATA!!!]"}
          </p>
        </div>
        <div class="search__container__cast">
          <h3>Productoras</h3>
          <ul>
            {movie.producers.length != 0 ? (
              <li>
                <img
                  src="/productoras/fujipacific.jfif"
                  alt={movie.producers[0].name}
                  title={movie.producers[0].name}
                />
              </li>
            ) : (
              <></>
            )}

            {movie.licensors.length != 0 ? (
              <li>
                <img
                  src="/productoras/funimation.jpg"
                  alt={movie.licensors[0].name}
                  title={movie.licensors[0].name}
                />
              </li>
            ) : (
              <></>
            )}

            {movie.studios.length != 0 ? (
              <li>
                <img
                  src="/productoras/toei.jpg"
                  alt={movie.studios[0].name}
                  title={movie.studios[0].name}
                />
              </li>
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
