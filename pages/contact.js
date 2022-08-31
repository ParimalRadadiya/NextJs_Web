import React from 'react';
import Navbar from '../Components/Navbar';
import styles from "../styles/contact.module.css";
import Head from "next/head";
import Image from 'next/image';

const contact = () => {
  return (
    <>
      <Head>
        <title>Contact Page</title>
      </Head>
      <Navbar />
      <div className={styles.contact}>  
          <h1 className={styles.mainheading}>
               Welcome to the Contact Page
          </h1>
      <Image src="/contact.jpg" width="500" height="300" className='contactimage'></Image>
      </div>
      {/* <h1 style={{ color: "green" }}>Welcome to the Contact Page</h1> */}
      {/* <h1>Welcome to the Contact Page</h1> */}
      {/* <style jsx>
        {`
          h1 {
            color: "red";
          }
        `}
       </style> */}
    </>
  )
}

export default contact;
