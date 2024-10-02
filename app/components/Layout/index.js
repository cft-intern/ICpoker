import React from 'react';
import Topnav from '../Topnav';
import Sidenav from '../Sidenav';
const Layout = () => {
  return (
    <div>
      <div className="">
        <Topnav />
      </div>
      <div className="h-full">
        <Sidenav />
      </div>
    </div>
  );
};

export default Layout;
