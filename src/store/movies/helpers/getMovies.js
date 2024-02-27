

export const getMovies = async () => {
    
    const url = `https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie`;
    try {
        const response = await fetch(url);
        const {data} = await response.json();

        const collection = data.map((movie) => ({
            mal_id: movie.mal_id,
            image_url: movie.images.jpg.large_image_url,
            title: movie.title_english,
            date_aired: movie.aired.from,
            rating: movie.rating,
            duration: movie.duration,
            synopsis: movie.synopsis,
            genres: movie.genres
            
          }));
          console.log(collection);
        return collection;
    } catch (error) {
        console.error(error);
        return [];
    }

}