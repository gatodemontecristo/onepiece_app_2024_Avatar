

export const getMovies = async () => {
    
    const url = `https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie`;
    const getYear = (date = "2024") => date.split("-")[0];
    const getRealTime = (duration="1 hr") =>{
        let time = duration.split(" ");
        if(time.length==4){
            return Number(time[0]) * 100 + Number(time[2]);
        }else if(time.length==2 && time[1] == "hr"){
            return Number(time[0]) * 100;
        }else{
            return Number(time[0]);

        }
    }
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
          console.log(collection);
        return collection;
    } catch (error) {
        console.error(error);
        return [];
    }

}