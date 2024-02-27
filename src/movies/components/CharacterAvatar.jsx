import { useNavigate } from "react-router-dom";

export const CharacterAvatar = (character) => {

  const navigate = useNavigate();
  const onNavigateMovieDetail = () => {
    navigate(`/character/${character.character.mal_id}`);
  };

  return (
    <a href="" onClick={onNavigateMovieDetail} className="movieInfo__characters__collection__character--a">
    <div className="movieInfo__characters__collection__character">
        <div className="movieInfo__characters__collection__character--img">
            <img src={character.character.images.jpg.image_url} alt="" />
            <div className="movieInfo__characters__collection__character--icon" style={{backgroundColor: `${character.role == "Main" ? "#ffc107" : "#FB7D46"}`}}>
             <p><i className={`bi ${character.role == "Main" ? "bi-bookmark-star-fill " : "bi-bookmark-heart-fill"}`}></i></p>
            </div>
        </div>
        <p className="movieInfo__characters__collection__character--name">{character.character.name}</p>
    </div>
    </a>
  )
}
