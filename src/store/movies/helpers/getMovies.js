import { useFormat } from "../../../movies";


export const getMovies = async () => {
    
    const url = `https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie`;
    const { getYear, getRealTime } =  useFormat();
    try {
        const response = await fetch(url);
        const {data} = await response.json();

        const collection = data.map((movie) => ({
            mal_id: movie.mal_id,
            image_url: movie.images.jpg.large_image_url,
            title: movie.title_english,
            date_aired: getYear(movie.aired.from),
            rating: movie.rating,
            duration: movie.duration,
            realDuration : getRealTime(movie.duration),
            synopsis: movie.synopsis,
            genres: movie.genres,
            producers: movie.producers,
            licensors: movie.licensors,
            studios: movie.studios
          }));
        return collection;
    } catch (error) {
        console.error(error);
        return [];
    }

}