import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout(
  { children }: LayoutProps,
) {
  return (
    <>
      <head>
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/style/reset.css" />
      </head>
      {children}
    </>
  );
}
