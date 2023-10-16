import React from "react";

import { Link } from "react-router-dom";
const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/slider">Slider</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
