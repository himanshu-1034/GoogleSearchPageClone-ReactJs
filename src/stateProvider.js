import { createContext, useContext, useReducer } from "react";
//preparing data layer
export const StateContext = createContext();

export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children} {/*<App/> tag inside index.js*/}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
