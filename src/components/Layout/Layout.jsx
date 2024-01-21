import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Outlet } from 'react-router';


  const Layout = ({ handleLogout }) => {
  return (
    <>
    <div style={{ background: "var(--black)", overflow: "hidden" }}>
    <Header handleLogout={handleLogout} />

      <Outlet />
    </div>
    <Footer />
  </>

  );
};

export default Layout;
