import React from "react";
import { useContext } from "react";
import { CartContext } from "../Context/CartContext";
import styles from "./Cart.module.css";

export const Cart = () => {
  const { cartItem, removeFromCart, checkout } = useContext(CartContext);
 
  return (
    <div>
      <table  className={styles.tabledata} >
        <thead>
        <tr className={styles.trone}>
          <th>Image</th>
          <th>Name</th>
          <th>Price</th>
          <th>Remove From Cart</th>
        </tr>

        </thead>
        <tbody>
        {
          cartItem.map(({ id, name, price, image }) => (
            <tr  key={id}>
              <td><img src={image} alt="" /> </td>
              <td>{ name}</td>
              <td>Rs {Math.floor(price*80)}</td>
              <td> <button onClick={()=>removeFromCart(id)} >Remove</button> </td>
          </tr>
          ))
        }

        </tbody>
       



      </table>
     

      <div>
        <button className={styles.btn} onClick={checkout}>Checkout</button>
      </div>
    </div>
  );
};
