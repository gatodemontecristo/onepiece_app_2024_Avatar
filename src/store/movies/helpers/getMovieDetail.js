export const getMovieDetail = async (mal_id) => {
  try {
    // const fetch1 = fetch(
    //   `https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie`
    // );
    // const fetch2 = fetch(`https://api.jikan.moe/v4/anime/${mal_id}/characters`);
    // const results = await Promise.all([fetch1, fetch2])
    //   .then((responses) => {
    //     //TODO: Manejar cada respuesta
    //     return Promise.all(responses.map((response) => response.json()));
    //   })
    //   .then((data) => {
    //     console.log(data);
    //     //TODO: Hacer algo con los datos de ambas respuestas

    //     //TODO:   console.log({
    //     //TODO:     detallePelicula:data[0].data.filter((movie)=>movie.mal_id==mal_id),
    //     //TODO:     personajesPelicula:data[1]
    //     //TODO: });
    //     let detalle = data[0].data.filter((movie) => movie.mal_id == mal_id)[0];
    //     if (!!data[1]) {
    //       detalle["caracteres"] = data[1].data;
    //     } else {
    //       detalle["caracteres"] = [];
    //     }
    //     console.log(detalle);
    //     return detalle;
    //   })
    //   .catch((error) => {
    //     // Manejar cualquier error que ocurra en cualquiera de las solicitudes
    //     console.error("Error:", error);
    //     return [];
    //   });
    // return results;


    const response1  = await fetch(`https://api.jikan.moe/v4/anime?q=one%20piece&type=Movie`);
    const data1  = await response1.json();
    const data2 = await data1.data.filter((movie) => movie.mal_id == mal_id)[0];
   
    // // Esperar 5 segundos antes de hacer el segundo fetch
    await new Promise(resolve => setTimeout(resolve, 5000));

    const response2 = await fetch(`https://api.jikan.moe/v4/anime/${mal_id}/characters`);
    const data3 = await response2.json();
    if (!!data3) {
      data2["caracteres"] = data3.data;
    } else {
      data2["caracteres"] = [];
    }
    return data2;
    
  } catch (error) {
    console.error(error);
    return [];
  }
};
