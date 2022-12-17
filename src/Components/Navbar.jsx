import React from "react";
import { NavLink } from 'react-router-dom';
import styles from './Navbar.module.css';
import { BsCart } from "react-icons/bs";
import { useContext } from "react";
import { AuthContext } from "../Context/Authcontext";

export const Navbar = () => {
  const { isAuth } = useContext(AuthContext);
 var links = [];

console.log(isAuth);
  if (!isAuth) {
    links=[{
      path: "/",
      title: "Home",
    },
    {
      path: "/products",
      title: "Products",
    },
    
    {
      path: "/about",
      title: "About Us",
    },
    {
      path: "/contact",
      title: "Contact Us",
   },
   {
    path: "/signup",
    title: "Signup",
  },
 
    {
      path: "/cart",
      title: <BsCart />,
    }]
  }
  else {
    links = [
      {
        path: "/",
        title: "Home",
      },
      {
        path: "/products",
        title: "Products",
      },
      
      {
        path: "/about",
        title: "About Us",
      },
      {
        path: "/contact",
        title: "Contact Us",
     },
     
   
      {
        path: "/cart",
        title: <BsCart />,
      }
    ]
  }


  console.log(styles);
  return (
    <div className={styles.Navbar}>
      <h2 className={styles.heading}>Fashion Store</h2>
      <input className={styles.Input} type="text" placeholder="Search Items" />
      <div className={styles.Links}>
      {
        links.map(({ path, title }) => (
          <NavLink key={path} to={path} className={({isActive})=> isActive ? "active" : "default"}  end>{title}</NavLink>
        ))
        }
        
        </div>
    </div>
  );
};
