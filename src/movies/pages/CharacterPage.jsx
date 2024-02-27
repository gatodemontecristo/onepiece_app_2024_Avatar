
import { Navigate, useOutletContext, useParams } from "react-router-dom";
import "../styles/Loader.css";
import "../styles/CharacterPage.css";
import { useCharacterValidation, useNavigatioPage } from "../hooks";

export const CharacterPage = () => {
  const setnavColor = useOutletContext();
  setnavColor("orange");

  // const { characterDetail, isLoading } = useSelector((state) => state.movie);
  // if (!characterDetail) {
  //   return <Navigate to="/main"></Navigate>;
  // }

  // const { mal_id } = useParams();
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadCharacterDetail(mal_id));
  // }, []);

  // console.log(characterDetail);
  const { mal_id } = useParams();
  const {isLoading,characterDetail} = useCharacterValidation(mal_id);
  if (!characterDetail) {
    return <Navigate to="/main"></Navigate>;
  }
  const lastRouteItem = localStorage.getItem("lastRoute") || "/search";
  const {onNavigatePage} = useNavigatioPage(lastRouteItem);



  return (
    <>
      {isLoading ? (
        <div className="loader__container_vs2">
          <span className="loader"></span>
        </div>
      ) : (
        <div className="characterContent">
          <div
            className="characterInfo animate__animated animate__backInLeft"
            style={{
              backgroundColor: `${
                characterDetail.role == "Main" ? "#ffc107" : "#FB7D46"
              }`,
            }}
          >
            <div className="characterInfo__primary">
              <div className="characterInfo__primary__header">
                <button
                  className="characterInfo__primary__header--back btn btn-light"
                  onClick={onNavigatePage}
                >
                  <i className="bi bi-skip-backward-circle-fill"></i>
                </button>

                <button className="characterInfo__primary__header--favorite btn-light">
                  <i className="bi bi-heart"></i>
                </button>
              </div>
              <div className="characterInfo__primary__nav">
                <div className="characterInfo__primary__nav__info">
                  <h2 className="characterInfo__primary__nav__info--name">
                    {characterDetail.name}
                  </h2>
                  <div className="characterInfo__primary__nav__info__types">
                    {/* {characterInfo[0].types.map((type, index) => {
                  return (
                    <Tagcharactermonvs2 key={index} {...type}></Tagcharactermonvs2>
                  );
                })} */}
                  </div>
                </div>
                <p className="characterInfo__primary__nav__number">
                  #{characterDetail.mal_id}
                </p>
              </div>

              <div className="characterInfo__primary--img">
                <img
                  className="characterInfo__primary--img--hiden"
                  src={characterDetail.image_url}
                  alt={characterDetail.name}
                />
                <img
                  className="characterInfo__primary--img--real"
                  src={characterDetail.image_url}
                  alt={characterDetail.name}
                />
              </div>

              <img
                className="characterInfo__primary__logo--onepiece"
                src="../portada/logo.png"
                alt=""
              />

              <img
                className="characterInfo__primary__aqua--type"
                src={`${
                  characterDetail.role == "Main"
                    ? "/bookmark-star-fill.svg"
                    : "/bookmark-heart-fill.svg"
                }`}
                alt=""
              />
            </div>
            <div className="characterInfo__secondary">
              <ul className="nav nav-tabs" id="myTab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="home-tab-pane"
                    aria-selected="true"
                  >
                    Acerca de
                  </button>
                </li>
                <li className="nav-item" role="presentation">
                  <button
                    className="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile-tab-pane"
                    type="button"
                    role="tab"
                    aria-controls="profile-tab-pane"
                    aria-selected="false"
                  >
                    Seiyū
                  </button>
                </li>
              </ul>
              <div className="tab-content" id="myTabContent">
                <div
                  className="characterInfo__secondary__tab tab-pane fade show active"
                  id="home-tab-pane"
                  role="tabpanel"
                  aria-labelledby="home-tab"
                  tabIndex="0"
                >
                  <div className="characterInfo__secondary__tab__form">
                    <div className="characterInfo__secondary__tab__form__line">
                      <h3>Kanji</h3>
                      <p>{characterDetail.name_kanji}</p>
                    </div>
                    <div className="characterInfo__secondary__tab__form__line">
                      <h3>Mas información</h3>
                      <a href={characterDetail.extra_info} target="_blank">
                        <p>
                          Enlace aquí <i className="bi bi-box-arrow-up-right"></i>
                        </p>
                      </a>
                    </div>
                    <div className="characterInfo__secondary__tab__form__line">
                      <h3>Sobre él/ella</h3>
                      <p>{characterDetail.about}</p>
                    </div>
                  </div>
                </div>
                <div
                  className="tab-pane fade"
                  id="profile-tab-pane"
                  role="tabpanel"
                  aria-labelledby="profile-tab"
                  tabIndex="0"
                >
                  <div
                    className="characterInfo__secondary__tab tab-pane fade show active"
                    id="home-tab-pane"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                    tabIndex="0"
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
