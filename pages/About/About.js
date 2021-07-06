import Head from "next/head";
import React from "react";
import Style from "../About/About.module.css";

const About = () => {
  return (
    <>
      <Head>
        <title> Web Ninja | About </title>{" "}
      </Head>{" "}
      <div className={Style.container}>
        <h1> About Pages are here </h1>{" "}
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.Necessitatibus
          voluptatibus modi obcaecati reprehenderit fugiat, quis rerum quidem
          voluptatum exercitationem explicabo.{" "}
        </p>{" "}
      </div>{" "}
    </>
  );
};

export default About;
