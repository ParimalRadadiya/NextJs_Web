import React from 'react';
import Navbar from '../Components/Navbar';
import styles from "../styles/index.module.css";
import Head from 'next/head';
import Image from 'next/image';

const index = () => {
  return (
    <>
      <Head>
        <meta name="description" content="Nextjs tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript , Nextjs" />
        <meta name="author" content="Parimal Radadiya" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        <title>Home Page</title>
      </Head>
      <header className={styles.header}>
        <div className={styles.brand_box}>
          <Navbar />
        </div>
        </header>
        <div className={styles.logoimg}><Image src="/logo.jpg" width="500" height="300" className={styles.logoimg}></Image></div>
        <div className={styles.text_box}>
          <h1 className={styles.heading_primary}>
            <span className={styles.heading_primary_main}>Welcome To The World of NextJs</span>
            <span className={styles.text}>Love With JavaScript</span>
          </h1>
          <a href="#" className={`${styles.btn} ${styles.btn_white} `} >
            Parimal Radadiya
          </a>
        </div>

    </>

  )
}

export default index;
