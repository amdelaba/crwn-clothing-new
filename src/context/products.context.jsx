import { createContext, useState, useEffect } from "react";
import PRODUCTS  from "../shop-data.json";

// Actual value you want to access
// gets passed default value (not necessarily the initial value)
export const ProductsContext = createContext({
  products: []
});

// functional component
// Allows children component of UserProvider to access the values of its State
export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState(PRODUCTS);
  const value = { products };

  // // On Component Mount
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChangedListener((user) => {
  //     if (user) {
  //       createUserDocumentFromAuth(user);
  //     }
  //     setCurrentUser(user);
  //   } );
  //   return unsubscribe;
  // }, []);

  return <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
};

