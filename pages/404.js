import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import Navbar from '../Components/Navbar';

const errorpage = () => {
  const router = useRouter();

  const handleclick = () => {
    router.push("/");
  }

  useEffect(() => {
    setTimeout(() => {
      router.push("/");
    }, 3000);
  }, []);

  return (
    <div>
      <Navbar />
      <h1>404</h1>
      <div>
        <h2>We are sorry, Page Not Found!</h2>
        <p>The Page You are Looking for might have been removed had its name
          changed or is temporarily unavailable.
        </p>

        {/* <Link href="/">
          <a>Back To Homepage</a>
        </Link> */}

        {/* <a onClick={() => router.push("/")}>Back To Homepage</a> */}

        <a onClick={handleclick}>Back To Homepage</a>

      </div>
    </div>
  )
}

export default errorpage;
