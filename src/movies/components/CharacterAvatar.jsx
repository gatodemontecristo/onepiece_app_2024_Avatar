import { useNavigatioPage } from "..";

export const CharacterAvatar = (character) => {


  const {onNavigatePage } =  useNavigatioPage(`/character/${character.character.mal_id}`);
  

  return (
    <a href="" onClick={onNavigatePage} className="movieInfo__characters__collection__character--a">
    <div className="movieInfo__characters__collection__character animate__animated animate__flip">
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
