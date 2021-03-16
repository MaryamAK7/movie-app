import React, { createContext, useReducer } from "react";

export const StateContext = createContext();

const initialState = {
  movies: [],
  genres: []
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_Movies":
      return { ...state, movies: action.payload };
    case "SET_Genres":
      return { ...state, genres: action.payload };
    default:
      return state;
  }
};

export const StateProvider = (props) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <StateContext.Provider value={[state, dispatch]}>
      {props.children}
    </StateContext.Provider>
  );
};
