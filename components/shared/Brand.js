import React from 'react';
import Link from 'next/link';
const Brand = () => {
  return (
    <header>
      <div className="colorlib-navbar-brand text-center">
        <Link href="/">
          <a className="colorlib-logo">Hays-Investment</a>
        </Link>
      </div>
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
        <i></i>
      </a>
    </header>
  );
};

export default Brand;
