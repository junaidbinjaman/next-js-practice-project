import Head from "next/head";
import Link from "next/link";
import React from "react";
import Styles from "../../styles/Ninja.module.css";

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: { ninjas: data },
  };
};

const Ninja = ({ ninjas }) => {
  return (
    <>
      <Head>
        <title>Web Ninja | Ninja Listing</title>
      </Head>
      ;
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <div key={ninja.id}>
            <Link href={"/NinjaListing/" + ninja.id}>
              <a>
                <h3 className={Styles.single}>{ninja.name}</h3>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default Ninja;
