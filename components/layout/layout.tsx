import React, { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  title?: string;
}

export default function Layout(
  { children, title }: LayoutProps,
) {
  return (
    <>
      <head>
        {title && <title>{title}</title>}
        <meta name="viewport" content="width=device-width" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="stylesheet" href="/style/reset.css" />
      </head>
      {children}
    </>
  );
}
