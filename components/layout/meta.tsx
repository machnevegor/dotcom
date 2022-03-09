import React from "react";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  card?: "summary" | "summary_large_image";
  site?: string;
}

// default meta
const keywords = ["machnevegor", "developer", "coding"];
const image = "/logos/icon.png";
const card = "summary";
const site = "@machnevegor";

export default function Meta(
  { title, description, ...meta }: MetaProps,
) {
  return (
    <head>
      <meta name="description" content={description} />
      <meta name="keywords" content={(meta.keywords || keywords).join(",")} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={meta.image || image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={meta.image || image} />
      <meta name="twitter:card" content={meta.card || card} />
      <meta name="twitter:site" content={meta.site || site} />
    </head>
  );
}
