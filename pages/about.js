import React from 'react';
import Navbar from '../Components/Navbar';
import styles from "../styles/about.module.css";
import Image from "next/image";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About Page</title>
      </Head>
      <div style={{ textAlign: "center" }}>
        <Navbar />
        <h1 className={styles.mainheading} >Welcome to the About Page</h1>
        <Image src="/about.jpg" width="500" height="300">
      </Image>
        {/* <Image src="https://picsum.photos/seed/picsum/200/300" width="500" height="300" alt='aboutimage'>
        </Image> */}
      </div>
    </>
  )
}

export default about;
