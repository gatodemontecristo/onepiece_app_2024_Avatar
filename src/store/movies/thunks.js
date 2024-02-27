import { getMovies } from "./helpers";
import { addMoviesCollection, loadMovies } from "./movieSlice";


export const loadMoviesCollection = ()=>{
    return async(dispatch) =>{
        dispatch( loadMovies);
        const result = await getMovies();
        await dispatch(addMoviesCollection(result));
       
    }
}