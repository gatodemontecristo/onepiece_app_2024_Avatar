
import "../styles/SeiyuAvatar.css";
export const SeiyuAvatar = (voice) => {


  
    return (
      <a href={voice.person.url} target="_blank" className="seiyuInfo__characters__collection__character--a">
      <div className="seiyuInfo__characters__collection__character animate__animated animate__fadeIn">
          <div className="seiyuInfo__characters__collection__character--img">
              <img src={voice.person.images.jpg.image_url} alt="" />
             
          </div>
          <p className="seiyuInfo__characters__collection__character--name">{voice.person.name}</p>
      </div>
      </a>
    )
  }