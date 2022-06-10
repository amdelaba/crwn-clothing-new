import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);
  if (existingCartItem) {
    return cartItems.map((cartItem) => 
      cartItem.id === productToAdd.id ? {...cartItem, quantity: cartItem.quantity + 1} : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1 } ]
};

const removeItem = (cartItems, productId) => {
  return cartItems
    .map((cartItem) => 
      cartItem.id === productId ? {...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
    .filter((cartItem) => cartItem.quantity > 0);
};

const clearCartItem = (cartItems, productId) => {
  return cartItems.filter((cartItem) => cartItem.id !== productId);
}

// Actual value you want to access
// gets passed default value (not necessarily the initial value)
export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  cartCount: 0, 
  totalPrice: 0,
  clearItemFromCart: () => {}
});

// functional component
// Allows children component of UserProvider to access the values of its State
export const CartProvider = ({ children }) => {
  
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };

  const removeItemFromCart = (productId) => {
    setCartItems(removeItem(cartItems, productId));
  }

  const clearItemFromCart = (productId) => {
    setCartItems(clearCartItem(cartItems, productId));
  }

  useEffect(() => {
    const newCartCount =
      cartItems.reduce((total, cartItem) => {
        return total + cartItem.quantity
      }, 0);
    setCartCount(newCartCount);
  }, [cartItems]);

  useEffect(() => {
    const newTotalPrice =
      cartItems.reduce((totalPrice, cartItem) => {
        return totalPrice + (cartItem.quantity * cartItem.price)
      }, 0);
    setTotalPrice(newTotalPrice);
  }, [cartItems]);

  const value = { 
    isCartOpen, 
    setIsCartOpen, 
    addItemToCart, 
    removeItemFromCart, 
    clearItemFromCart, 
    cartItems, 
    cartCount, 
    totalPrice
  };

  return <CartContext.Provider value={value}> {children} </CartContext.Provider>
};

