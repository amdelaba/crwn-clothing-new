import { createContext, useState } from "react";

// Actual value you want to access
// gets passed default value (not necessarily the initial value)
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {}
});

// functional component
// Allows children component of UserProvider to access the values of its State
export const CartProvider = ({ children }) => {
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const value = { isCartOpen, setIsCartOpen };

  return <CartContext.Provider value={value}> {children} </CartContext.Provider>
};

