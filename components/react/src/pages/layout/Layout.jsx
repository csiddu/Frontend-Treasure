import React from "react";
const Layout = () => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/components/react/build/?">Home</a>
          {/* <Link to="/components/react/build/">Home</Link> */}
        </li>
        <li>
          <a href="/components/react/build/?slider">Slider</a>
          {/* <Link to="/components/react/build?slider">Slider</Link> */}
        </li>
      </ul>
    </nav>
  );
};

export default Layout;
