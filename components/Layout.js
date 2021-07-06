import React from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';

const Layout = ({children}) => {
  return (
    <div className="content">
      <Navbar/>
      { children }
      <Footer />
    </div>
  );
};

export default Layout;