import { createContext, useReducer } from "react";

const ShopAppContext = createContext({});

const intialState = {
  data: [],
};

const reduser = (state, { type }) => {
  switch (type) {
    case "add":
      return;
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
