import { createContext, useReducer } from "react";
import notificationApi from "../generic/notification";

const ShopAppContext = createContext({});

const intialState = {
  data: JSON.parse(localStorage.getItem("shop")) || [],
  liked: [],
};
const notify = notificationApi();

const reduser = (state, { type, value, delID, countID, value__like }) => {
  switch (type) {
    case "add": {
      const findData = state.data?.find((item) => item.id === value.id);
      if (!findData) {
        const newData = [
          ...state.data,
          {
            ...value,
            userPrice: value.newPrice,
          },
        ];
        localStorage.setItem("shop", JSON.stringify(newData));
        notify({ type: "add" });
        return { ...state, data: newData };
      } else {
        notify({ type: "cardAdd" });
        return state;
      }
    }

    case "liked_add": {
      let updatedData = [
        ...state.liked,
        { ...value__like, isLiked: true, count: 1 },
      ];

      fetch(`http://localhost:5000/products/${value__like.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...value__like,
          isLiked: !value__like.isLiked,
          count: 1,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          notify({ type: "addToLike" });
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });

      return { ...state, liked: updatedData };
    }

    case "liked_remove": {
      const updatedLiked = state.liked.filter(
        (item) => item.id !== value__like.id
      );

      fetch(`http://localhost:5000/products/${value__like.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...value__like,
          isLiked: false,
        }),
      })
        .then((response) => response.json())
        .then(() => {
          notify({ type: "removeFromLike" });
        })
        .catch((error) => {
          console.error("Error updating product:", error);
        });

      return { ...state, liked: updatedLiked };
    }

    case "delet":
      const filterData = state.data.filter((item) => item.id !== delID);
      localStorage.setItem("shop", JSON.stringify(filterData));
      notify({ type: "deletCard" });
      return { ...state, data: filterData };

    case "increment":
      state.data = state.data.map((item) =>
        item.id === countID
          ? {
              ...item,
              count: item.count + 1,
              userPrice: (item.count + 1) * item.newPrice,
            }
          : item
      );
      localStorage.setItem("shop", JSON.stringify(state.data));
      return { ...state };

    case "decrement":
      state.data = state.data.map((item) =>
        item.id === countID
          ? {
              ...item,
              count: item.count > 1 ? item.count - 1 : 1,
              userPrice: (item.count > 1 ? item.count - 1 : 1) * item.newPrice,
            }
          : item
      );
      localStorage.setItem("shop", JSON.stringify(state.data));
      return { ...state };

    default:
      return state;
  }
};

const ShopContext = ({ children }) => {
  const [state, dispatch] = useReducer(reduser, intialState);

  return (
    <ShopAppContext.Provider value={{ state, dispatch }}>
      {children}
    </ShopAppContext.Provider>
  );
};

export { ShopAppContext, ShopContext };
