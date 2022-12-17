import React from 'react'
import styles from './Footer.module.css';
// import { IoLogoGooglePlaystore } from "react-icons/io";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { IoLogoAppleAppstore } from "react-icons/io5";

export const Footer = () => {
  return (
    <div className={styles.footer}>
      
      <div></div>
      <div>
        <h2>ONLINE STORE</h2>
        <p>Sell Online</p>
        <p>Examples</p>
        <p>Website Builder</p>
        <p>Online Retaile</p>
      </div>
      <div>
        <h2>POINT OF SALE</h2>
        <p>Point of Sale</p>
        <p>Features</p>
        <p>Hardware</p>
        <div>
          <span>
          <IoLogoGooglePlaystore/>
          </span>
          <span>
            <IoLogoAppleAppstore/>
          </span>
        </div>
      </div>
      <div>
        <h2>SUPPORT</h2>
        <p>24/7 support</p>
        <p>Fashion store help center</p>
        <p>Fashion store community</p>
        <p>API Documentation</p>
        <p>Free tools</p>
        <p>Free Stock Photo</p>
        <p>Website for sale</p>
        <p>Logo maker</p>
        <p>Research</p>
        <p>Legal</p>
      </div>
      <div>
        <h2>FASHION SHOP</h2>
        <p>Contact</p>
        <p>Partner Program</p>
        <p>Affilaite Program</p>
        <p>App development</p>
        <p>Investors</p>
        <p>Blog topics</p>
        <p>Community Events</p>
      </div>
      <div></div>
    </div>
  )
}
