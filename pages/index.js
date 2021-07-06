import Head from "next/head";
import Link from "next/link";
import React from "react";
import Style from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Web Ninja | Home</title>
      </Head>
      <div className={Style.container}>
        <h1 className={Style.title}>Hello, World</h1>
        <p className={Style.text}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Blanditiis
          hic adipisci voluptas alias dolores dolorem aliquid odio culpa
          doloremque laborum eum nemo eius labore exercitationem rerum soluta et
          doloribus, aspernatur commodi animi pariatur. Fuga, libero, molestiae
          modi voluptas voluptates qui consequatur fugit consectetur excepturi
          amet minus, obcaecati velit earum. Laudantium, rerum nam! Perspiciatis
          laboriosam in quod, expedita laudantium voluptatem non!
        </p>
        <br />
        <p className={Style.text}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab vitae
          doloribus deleniti, quidem ex et cumque animi tenetur libero rerum
          reprehenderit. Explicabo quaerat, magnam commodi beatae praesentium
          laudantium sed doloribus facere vel cumque voluptas laboriosam tempore
          magni. Nihil adipisci odit ut explicabo deleniti perspiciatis.
          Voluptatem magnam earum ducimus rem dicta, itaque autem alias debitis
          quos deserunt provident ex incidunt sequi. Eaque sed iusto inventore
          praesentium illo error odio nihil fugiat.
        </p>
        <Link href="/NinjaListing/NinjaListing">
          <a className={Style.btn}>Ninja Listing</a>
        </Link>
      </div>
    </>
  );
}
