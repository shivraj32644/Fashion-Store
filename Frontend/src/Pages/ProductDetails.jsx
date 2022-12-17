
import React, { useEffect, useState } from 'react'
import { Navigate, useNavigate, useParams } from 'react-router-dom';
import styles from './ProductDetal.module.css'
import { BsCart } from "react-icons/bs";
import { useContext } from 'react';
import { AuthContext } from '../Context/Authcontext';
import { CartContext } from '../Context/CartContext';
export const ProductDetails = () => {
  const { addToCart , isAdded } = useContext(CartContext);
  

  const id = useParams();
  const navigate = useNavigate();
  const val = Number(id.product_id);
  const getData =async () => {
    let response = await fetch(`http://localhost:3001/mensData/${val}`)
    const result = await response.json();
    return result;
  }
  const [loading , setLoading]=useState(false)
  const [mensData, setmensData] = useState([]);
  const[err, setErr]=useState(false)
  const { isAuth } = useContext(AuthContext);
  // console.log(val, "id at line 19")
  useEffect(() => {
    updateUI();
  }, [])
  
  function updateUI() {
    setLoading(true);
    getData().then(res => {
      setmensData(res)
      setLoading(false);
      // setTimeout(() => {
      // },1000)
    }).catch((err) => {
      console.log(err);
      setErr(true);
  })
  }

  function handleClick(vid, title, price, image) {
    
    if (!isAuth) {
      // return <Navigate to={'/signup'} />
      navigate('/signup')
    }
    else {
      addToCart(vid, title, price, image);
      navigate('/products');
    }
  }

  if (loading) {
    return (
      <div style={{display:"flex", flexDirection:"column"}}>
        <img src="https://media.geeksforgeeks.org/wp-content/uploads/20200412121906/skeleton-loading.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" /> 
      </div>
    )
  }
  const {  title, price, image , description,category } = mensData;
  return (
      
      <div className={styles.container}>
      
      <div to={`/products/${val}`} key={id} >
        
        <div className={styles.sidbar}>
            <img src={image} alt="" /><br />
         <button disabled={isAdded.includes(val)} onClick={()=>handleClick(val, title,price,image)  } > <BsCart/> Add to Cart</button>
        </div>
        <div className={styles.main}>
            <h1>{title}</h1>
            <p>Rs {Math.floor(price*80)}</p>
          <p> {description}</p>
          <p> <span>Category</span>   {category}</p>
          {/* <h1>Rating : {rate}  </h1> */}

        </div>



          </div>
       
      
      </div>
      
  )
}
