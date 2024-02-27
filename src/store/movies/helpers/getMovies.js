

export const getMovies = async () => {
    
    const url = `https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie`;
    try {
        const response = await fetch(url, options);
        const {data} = await response.json();

        const collection = data.map((movie) => ({
            mal_id: movie.mal_id,
            image_url: movie.images.jpg.large_image_url,
            title: movie.title_english
          }));

        return collection;
    } catch (error) {
        console.error(error);
        return [];
    }

}