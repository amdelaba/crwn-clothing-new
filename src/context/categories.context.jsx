import { createContext, useState, useEffect } from "react";
import { getCategoriesAndDocuments } from '../utils/firebase/firebase.utils'
// import SHOP_DATA from "../shop-data.js";

// Actual value you want to access
// gets passed default value (not necessarily the initial value)
export const CategoriesContext = createContext({
  categoriesMap: {}
});

// functional component
// Allows children component of UserProvider to access the values of its State
export const CategoriesProvider = ({ children }) => {
  const [categoriesMap, setCategoriesMap] = useState({});
  
  // One Time Thing, to load SHOP_DATA to firebase
  // useEffect(() => {
  //   addCollectionAndDocuments('categories', SHOP_DATA)
  // }, [])

  // Do this when useEffect calls an async function
  useEffect(() => {
    const getCategoriesMap = async () => {
      const categoryMap = await getCategoriesAndDocuments();  // from firebase DB
      setCategoriesMap(categoryMap);
    };
    getCategoriesMap();
  }, []);
  
  const value = { categoriesMap };
  
  return <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
};

