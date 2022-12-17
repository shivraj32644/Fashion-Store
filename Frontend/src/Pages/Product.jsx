import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { AiOutlineStar } from "react-icons/ai";
import styles from './Product.module.css';
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


const getData =async () => {
  let response = await fetch(`http://localhost:3001/mensData`)
  const result = await response.json();
  return result;
}
export const Product = () => {
  const [loading , setLoading]=useState(false)
  const [mensData, setmensData] = useState([]);
  const[err, setErr]=useState(false)
  
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
      // },300)
    }).catch((err) => {
      console.log(err);
      setErr(true);
  })
  }

  if (err) {
    return (
      <div>
        <img src="https://www.clipartmax.com/png/middle/323-3237518_lifting-your-google-merchant-center-suspension-icone-non.png" alt="" />
        <div >
        <h1>Something went Wrong...</h1>
        
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div>
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
        <img src="https://user-images.githubusercontent.com/25938785/90191444-8f443b80-ddc9-11ea-918f-da77070549b8.gif" alt="" />
      </div>
    )
  }
  return (
      
    <div className={styles.container}>

    

      {
        mensData.map(({ id, title, price, image, rating: { rate } }) => (
          <Link to={`/products/${id}`} key={id} >
            <img src={image} alt="" />
            <h4>{title}</h4>
            <p>Rs {Math.floor(price*80)}</p>
            <p className={styles.icon}> < AiOutlineStar className={styles.icon} /> {rate}</p>
          </Link>
        ))
      }
      </div>
      
  )
}
