import React, { createContext, useContext, useReducer } from "react";

//prepares the dataLayer
export const StateContext = createContext();

// wrap our app and provide DataLayer
export const StateProvider = ({ reducer, initialState, children }) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

//pull information from the DataLayer
export const useStateValue = () => useContext(StateContext);