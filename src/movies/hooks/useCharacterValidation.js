
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadCharacterDetail } from "../../store";
export const useCharacterValidation = (mal_id) => {
    const { characterDetail, isLoading } = useSelector((state) => state.movie);
    
  
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(loadCharacterDetail(mal_id));
    }, []);


    return{
        isLoading,
        characterDetail
    }
}