import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image
          className="image"
          src="/eCommercecare.png"
          width={50}
          height={50}
          alt=""
        />
      </div>
      <Link href="/">
        <a> Home </a>
      </Link>
      <Link href="/About/About">
        <a> About </a>
      </Link>
      <Link href="/NinjaListing">
        <a> Ninja Listing </a>
      </Link>

      <Link href="/Login">
        <a>SignIn</a>
      </Link>
    </nav>
  );
};

export default Navbar;
