import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div>
      <nav>
        <ul className='menu-bar'>
          <li>
            <Link href="/">
              <a>Home</a>
            </Link>
          </li>
          <li>
            <Link href="/about">
              <a>About</a>
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <a>Blog</a>
            </Link>
          </li>
          <li>
            <Link href="/service">
              <a>Services</a>
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar;
