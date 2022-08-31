import React from 'react';
import Navbar from '../../Components/Navbar';
import Head from "next/head";
import Link from 'next/link';

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      data,
    }
  };
};

const index = ({ data }) => {
  return (
    <div>
      <Head>
        <title>Blog Page</title>
      </Head>
      <Navbar />
      <h1 className='mainheading'>Welcome to My Blog</h1>
      {data.slice(0, 6).map((curElem) => {
        return <div key={curElem.id} className="ssr-styles">
          <h3>{curElem.id}</h3>
         <Link href={`/blog/${curElem.id}`}>
            <h2>{curElem.title}</h2>
          </Link> 
        </div>
      })}
    </div>
  )
}

export default index;
