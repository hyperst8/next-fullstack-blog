import React from "react";
import styles from "./page.module.css";

export const metadata = {
  title: "Hyperst8 | Portfolio",
  description: "This is the portfolio page",
};

const Layout = ({ children }) => {
  return (
    <div>
      <h1 className={styles.mainTitle}>Our Works</h1>
      {children}
    </div>
  );
};

export default Layout;
