import React, { FC } from "react";

interface MetaProps {
  title: string;
  description: string;
  image?: string;
  card?: string;
}

// default meta
const image = "https://machnevegor.com/logos/icon.png";
const card = "summary";

const Meta: FC<MetaProps> = (
  { title, description, ...meta },
) => {
  return (
    <head>
      {/* title */}
      <title>{title}</title>
      <meta name="og:title" content={title} />

      {/* description */}
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />

      {/* image */}
      <meta name="og:image" content={meta.image || image} />
      <meta name="twitter:image" content={meta.image || image} />

      {/* url */}
      <meta name="og:url" content="https://machnevegor.com/" />
      <meta name="twitter:site" content="@machnevegor" />

      {/* type */}
      <meta name="og:type" content="profile" />
      <meta name="twitter:card" content={meta.card || card} />
    </head>
  );
};

export default Meta;
