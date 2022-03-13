import React, { FC } from "react";

interface MetaProps {
  title: string;
  description: string;
  card?: string;
  image?: string;
}

// default meta
const image = "https://machnevegor.com/logos/icon.png";
const card = "summary";

const Meta: FC<MetaProps> = (
  { title, description, ...meta },
) => {
  return (
    <head>
      <title>{title}</title>

      <meta name="title" content={title} />
      <meta name="description" content={description} />

      <meta name="og:type" content="profile" />
      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={meta.image || image} />
      <meta name="og:site_name" content="machnevegor.com" />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={meta.image || image} />
      <meta name="twitter:card" content={meta.card || card} />
      <meta name="twitter:site" content="@machnevegor" />
    </head>
  );
};

export default Meta;
