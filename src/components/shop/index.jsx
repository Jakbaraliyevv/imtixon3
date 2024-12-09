import "./korzina.scss";
import { useNavigate } from "react-router-dom";
import img1 from "../../img/blog1.svg";
function KorzinaComponents() {
  const useNAvigate = useNavigate();

  const navigete_button = () => {
    useNAvigate("/");
  };

  return (
    <div>
      <div className="all">
        <div className="container">
          <div className="all__price--card">
            <div className="korzina__price">
              <div className="korzina__img">
                <img src={img1} alt="" />
                <div className="korzina__text">
                  <h2>VR VisionTech X1</h2>
                  <h4>
                    Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)
                  </h4>
                </div>
              </div>

              <div className="hammasi">
                <div className="plus__minus">
                  <button>-</button>
                  <span className="span__price">1</span>
                  <button>+</button>
                </div>
                <div className="korzina__delete">
                  <div className="price">
                    <p>Price:</p>
                    <h2>$2535.00</h2>
                  </div>
                  <button>Delete</button>
                </div>
              </div>
            </div>
            <div className="korzina__price">
              <div className="korzina__img">
                <img src={img1} alt="" />
                <div className="korzina__text">
                  <h2>VR VisionTech X1</h2>
                  <h4>
                    Blackmagic Design Pocket Cinema Camera 6K Pro (Canon EF)
                  </h4>
                </div>
              </div>

              <div className="hammasi">
                <div className="plus__minus">
                  <button>-</button>
                  <span className="span__price">1</span>
                  <button>+</button>
                </div>
                <div className="korzina__delete">
                  <div className="price">
                    <p>Price:</p>
                    <h2>$2535.00</h2>
                  </div>
                  <button>Delete</button>
                </div>
              </div>
            </div>
          </div>

          <div className="korzina__total">
            <h2>Buyurtmangiz</h2>
            <div className="total">
              <h4>Jami:</h4>
              <p>123er45t6y</p>
            </div>

            <button className="finishButton">Sotib olish</button>
          </div>
        </div>
      </div>
      {/* <div className="bombomsh">
        <div className="container">
          <div className="bosh__img">
            <img src={img1} alt="" />
          </div>
          <div className="bosh__text">
            <h2>Savatingiz hozircha bo‘sh</h2>
            <p>
              Bosh sahifadan boshlang — kerakli tovarni qidiruv orqali
              topishingiz yoki to‘plamlarni ko‘rishingiz mumkin
            </p>

            <button onClick={navigete_button} className="bosh__button">
              Bosh sahifa
            </button>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default KorzinaComponents;
