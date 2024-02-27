import { getMovies } from "./helpers";
import { addMoviesCollection, loadMovies, sortByDuration, sortByYear } from "./movieSlice";


export const loadMoviesCollection = (order=true)=>{
    return async(dispatch) =>{
        dispatch( loadMovies);
        const result = await getMovies();
        await dispatch(addMoviesCollection(result));
        if(order){
            dispatch(sortByYear());
            }else{
                dispatch(sortByDuration());
            }
    }
}