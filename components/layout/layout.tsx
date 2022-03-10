import React, { FC } from "react";
import "~/style/reset.css";

const Layout: FC = ({ children }) => {
  return (
    <>
      <head>
        <meta name="google" content="notranslate" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      {children}
    </>
  );
};

export default Layout;
