import React from 'react';
import Navbar from '../Components/Navbar';
import Head from "next/head";
import Image from 'next/image';

const service = () => {
  return (
    <>
      <Head>
        <title>Service Page</title>
      </Head>
      <Navbar />
      <div className='service'>
        <h1 className='mainheading'>Welcome to The Service Page</h1>
        <Image src="/service.jpg" width="500" height="300"></Image>
      </div>
    </>
  )
}

export default service;
