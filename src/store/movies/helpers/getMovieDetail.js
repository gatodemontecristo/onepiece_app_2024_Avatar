export const getMovieDetail = async (mal_id) => {
  try {
    const fetch1 = fetch(`https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie`);
    const fetch2 = fetch(`https://api.jikan.moe/v4/anime/${mal_id}/characters`);

    const results = await Promise.all([fetch1, fetch2])
      .then((responses) => {
        // Manejar cada respuesta
        return Promise.all(responses.map((response) => response.json()));
      })
      .then((data) => {
        // Hacer algo con los datos de ambas respuestas

        console.log("Datos de la primera solicitud:", data[0].data);
        console.log("Datos de la segunda solicitud:", data[1]);
      //   console.log({
      //     detallePelicula:data[0].data.filter((movie)=>movie.mal_id==mal_id),
      //     personajesPelicula:data[1]
      // });
      let detalle = data[0].data.filter((movie)=>movie.mal_id==mal_id)[0];
      if(!!data[1]){
      detalle['caracteres'] =data[1].data;
      }else{
        detalle['caracteres'] =[];
      }
     
        return detalle
        
      })
      .catch((error) => {
        // Manejar cualquier error que ocurra en cualquiera de las solicitudes
        console.error("Error:", error);
        return [];
      });
      console.log(results);
      return results;
  } catch (error) {
    console.error(error);
    return [];
  }
};
