import React, { createContext, useReducer } from "react";
export const StoreProvider = createContext();

const products = [
    {
        id: 'porsche-718',
        imageSrc: 'https://www.exclusiveautomotivegroup.com/imagetag/3286/main/l/Used-2020-Porsche-718-Cayman-GT4-1680550922.jpg',
        altText: 'Porsche 718 Cayman',
        title: 'Porsche 718 Cayman',
        details: '2020 | 862 HP | Aluminum | $85,000 | 4.0L Flat-6 | Speed Yellow | 6,675 mi.',
    }
]

const initialState = {
  products,
  cart: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART":
      const existingItem = state.cart.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          ),
        };
      } else {
        return {
          ...state,
          cart: [...state.cart, { ...action.payload, quantity: 1 }],
        };
      }
    case "REMOVE_FROM_CART":
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload),
      };
    case "UPDATE_QUANTITY":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item
        ),
      };
    default:
      return state;
  }
}

export function ContextProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StoreProvider.Provider value={{ state, dispatch }}>
      {children}
    </StoreProvider.Provider>
  );
}