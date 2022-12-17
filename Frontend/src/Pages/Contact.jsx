import React from 'react'
import styles from './Contact.module.css'
export const Contact = () => {
  return (
    <div className={styles.form}>
      <div>
        <h1>Contact us </h1>
        <p></p>
        <div>
        <input type="text" placeholder='First Name' />
        <input type="text" placeholder='Last Name' />
        </div>
        <input type="text" name="" id={styles.email} placeholder='Email' />
      </div>
      <div className={styles.text}>
      <label htmlFor="">Type  Your Message</label><br />
      <textarea name="" id="" cols="90" rows="10"></textarea>

      </div>
      <button>Submit</button>
    </div>
  )
}
