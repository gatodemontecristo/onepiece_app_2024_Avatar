import '../styles/PosterCard.css'

export const PosterCard = (movie) => {

  const getYear = (date = "2024") =>  date.split("-")[0];
  const getRating = (rating = "R") =>  rating.split(" - ")[0];

  return (
    <div class="search__container__card">
    <div class="search__container__poster">
      <img
        src={movie.image_url}
        alt={movie.title}
      />
    </div>
    <div class="search__container__details">
      <h1>{movie.title}</h1>
      <h2>{getYear(movie.date_aired)} • {getYear(movie.rating)}  • {movie.duration}</h2>

      <div class="search__container__tags">
        <span class="search__container__tag">Italian</span>
        <span class="search__container__tag">Drama</span>
        <span class="search__container__tag">Indie</span>
      </div>
      <div className='search__container__desc--div'>
      <p class="search__container__desc">
        {movie.synopsis}
      </p>
      </div>
      <div class="search__container__cast">
        <h3>Cast</h3>
        <ul>
          <li>
            <img
              src="https://i.postimg.cc/jqgkqhSb/cast-11.jpg"
              alt="Marco Andrews"
              title="Marco Andrews"
            />
          </li>
          <li>
            <img
              src="https://i.postimg.cc/8P7X7r7r/cast-12.jpg"
              alt="Rebecca Floyd"
              title="Rebecca Floyd"
            />
          </li>
          <li>
            <img
              src="https://i.postimg.cc/2SvHwRFk/cast-13.jpg
"
              alt="Antonio Herrera"
              title="Antonio Herrera"
            />
          </li>
        </ul>
      </div>
    </div>
  </div>
  )
}
