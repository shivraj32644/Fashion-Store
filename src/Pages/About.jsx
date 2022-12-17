import React from 'react'
import styles from './About.module.css'
export const About = () => {
  return (
    <div className={styles.about} >
      <div className={styles.imgdiv}>
        <div>
        <img src="https://cdn.shopify.com/shopifycloud/brochure/assets/merchants/snowdevil/snowdevil-about-online-store-sustainability@desktop-d45981b88381b90b17d60887fa0ad6429568d50b08b1d7fb6c5e86eabf7ee84a.png" alt="" />
        </div>
        <div>
        <h3>SHOPIFY STORY</h3>
        <h1>The first Shopify store was our own</h1>
        <p>Over a decade ago, we started a store to sell snowboards online. None of the ecommerce solutions at the time gave us the control we needed to be successful—so we built our own. Today, businesses of all sizes use Shopify, whether they’re selling online, in retail stores, or on-the-go.</p>

        </div>
      </div>

      <div>
        <h3>OUR MISSION</h3>
        <h1>Making commerce better for everyone</h1>
        <p>We help people achieve independence by making it easier to start, run, and grow a business. We believe the future of commerce has more voices, not fewer, so we’re reducing the barriers to business ownership to make commerce better for everyone.</p>
      </div>
      <div>
        <h3>OUR PEOPLE</h3>
        <h1>Creating a community for impact</h1>
        <p>Shopify has grown from 5 people in a coffee shop to over 10,000 across the globe. With millions of businesses powered by Shopify, we care deeply about the work we do. We’re constant learners who thrive on change and seek to have an impact in everything we do.</p>
      </div>
    </div>
  )
}
