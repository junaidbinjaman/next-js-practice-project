import Head from "next/head";
import React, { useEffect } from "react";

const Login = () => {
  const patterns = {
    telephone: /^\d{11}$/,
    username: /^[a-z\d]{5,12}$/i,
    password: /^[\w@-]{8,20}$/,
    slug: /^[a-z\d-]{8,20}$/,
    email: /^([a-z\d-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
  };

  useEffect(() => {
    const inputs = document.querySelectorAll("input");

    // validate function
    function validate(field, regex) {
      if (regex.test(field.value)) {
        field.className = "valid";
      } else {
        field.className = "invalid";
      }
      console.log(regex.test(field.value));
    }

    inputs.forEach((input) => {
      input.addEventListener("keyup", (e) => {
        // console.log(e.target.name);
        validate(e.target, patterns[e.target.attributes.name.value]);
      });
    });
  }, []);

  return (
    <>
      <Head>
        <title>Web Ninja | Login</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
        ></link>
      </Head>
      ;
      <div>
        <h2>Sign In To Your Account</h2>

        <form>
          <input type="text" name="username" placeholder="username" />
          <p>Username must be and contain 5 - 12 characters</p>

          <input type="text" name="email" placeholder="email" />
          <p>Email must be a valid address, e.g. me@mydomain.com</p>

          <input type="password" name="password" placeholder="password" />
          <p>
            Password must alphanumeric (@, _ and - are also allowed) and be 8 -
            20 characters
          </p>

          <input type="text" name="telephone" placeholder="telephone" />
          <p id="phone">
            Telephone must be a valid UK telephone number (11 digits)
          </p>

          <input type="text" name="slug" placeholder="profile slug" />
          <p>
            Slug must contain only lowercase letters, numbers and hyphens and be
            8 - 20 characters
          </p>
        </form>
      </div>
    </>
  );
};

export default Login;
