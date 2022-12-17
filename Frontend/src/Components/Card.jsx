import React from 'react'

export const Card = ({ id, title, price, image, rating: { rate } }) => {
  return (
      <div >
          <img src={image} alt="" />
            <h4>{title}</h4>
            <p>Rs {Math.floor(price*80)}</p>
            <p> < AiOutlineStar className={styles.icon} /> {rate}</p>
    </div>
  )
}
