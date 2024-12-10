import "./korzina.scss";
import { useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { ShopAppContext } from "../../contex";
import img1 from "../../img/bombosh.png";
function KorzinaComponents() {
  const useNAvigate = useNavigate();

  const { state, dispatch } = useContext(ShopAppContext);

  let totalPrice = state.data.reduce(
    (acc, value) => (acc += value.userPrice),
    0
  );

  console.log(totalPrice);

  const navigete_button = () => {
    useNAvigate("/");
  };

  const raxmat = () => {
    alert("Xaridingiz uchun raxmat 😉");
  };

  return (
    <div>
      {state.data.length ? (
        <div className="all">
          <div className="container">
            <div className="all__price--card">
              {state.data.map((value) => (
                <div className="korzina__price" key={value.id}>
                  <div className="korzina__img">
                    <img src={value.image} alt="" />
                    <div className="korzina__text">
                      <h2>{value.model}</h2>
                      <h4>{value.title}</h4>
                    </div>
                  </div>

                  <div className="hammasi">
                    <div className="plus__minus">
                      <button
                        onClick={() =>
                          dispatch({ type: "decrement", countID: value.id })
                        }
                      >
                        -
                      </button>
                      <span className="span__price">{value.count}</span>
                      <button
                        onClick={() =>
                          dispatch({ type: "increment", countID: value.id })
                        }
                      >
                        +
                      </button>
                    </div>
                    <div className="korzina__delete">
                      <div className="price">
                        <p>Price:</p>
                        <h2>
                          {value.dollar}
                          <span>{value.userPrice}</span>
                        </h2>
                      </div>
                      <button
                        onClick={() =>
                          dispatch({ type: "delet", delID: value.id })
                        }
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="korzina__total">
              <h2>Buyurtmangiz</h2>
              <div className="total">
                <h4>Jami:</h4>
                <p>{totalPrice}</p>
              </div>

              <button onClick={raxmat} className="finishButton">
                Sotib olish
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="bombomsh">
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
        </div>
      )}
    </div>
  );
}

export default KorzinaComponents;
