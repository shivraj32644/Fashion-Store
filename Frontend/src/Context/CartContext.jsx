
import React, { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react"

export const CartContext = createContext();

const  CartContextProvider = ({ children }) => {
  let [cartItem, setCartItem] = useState([]);
  let [isAdded, setisAdded] = useState([]);
  let [added, setadded] = useState(false);
  const [dis, setDis] = useState(null);

  let val = Number(dis);





  function addToCart(id, name, price, image) {
    const obj = {price: price , name: name, id:id, image:image}
    setCartItem([...cartItem, obj]);
    setisAdded([...isAdded, id])
  }
  function removeFromCart(id) {
    var arr = cartItem.filter((e) => {
      return id !== e.id;
    })
    setCartItem(arr);

    var newisAdded = isAdded.filter((e) => {
     
      return id !== e;
    })
    setisAdded(newisAdded);
    

  }
  function checkout() {
    setCartItem([]);
    setisAdded([]);
  }
  return <>
    <CartContext.Provider value={{ cartItem, addToCart,  removeFromCart, checkout ,added, dis,isAdded }}>{children}</CartContext.Provider>
  </>;
};

export default CartContextProvider;
