
export const CharacterAvatar = (character) => {
  return (
    <a href="" className="movieInfo__characters__collection__character--a">
    <div className="movieInfo__characters__collection__character">
        <div className="movieInfo__characters__collection__character--img">
            <img src={character.character.images.jpg.image_url} alt="" />
            <div className="movieInfo__characters__collection__character--icon" style={{backgroundColor: `${character.role == "Main" ? "#ffc107" : "#FB7D46"}`}}>
             <p><i class={`bi ${character.role == "Main" ? "bi-bookmark-star-fill " : "bi-bookmark-heart-fill"}`}></i></p>
            </div>
        </div>
        <p className="movieInfo__characters__collection__character--name">{character.character.name}</p>
    </div>
    </a>
  )
}
