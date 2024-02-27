import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Navigate, useOutletContext, useParams } from 'react-router-dom';
import { loadCharacterDetail } from '../../store';
import "../styles/Loader.css";

export const CharacterPage = () => {
  const setnavColor = useOutletContext();
  setnavColor("orange");  

  const { characterDetail, isLoading } = useSelector((state) => state.movie);
  if (!characterDetail) {
    return <Navigate to="/main"></Navigate>;
  }

  const { mal_id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadCharacterDetail());
  }, []);

  console.log(characterDetail);


  return (
    <>
    {isLoading ? (
      <div className="loader__container_vs2">
        <span className="loader"></span>
      </div>
    ) : (
      <div>CharacterPage</div>

    )}
    </>
  )
}
