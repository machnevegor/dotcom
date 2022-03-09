import React from "react";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
  card?: "summary" | "summary_large_image";
}

// default meta
const keywords = ["machnevegor", "developer", "coding"];
const image = "https://machnevegor.com/files/card.png";
const card = "summary_large_image";

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
    </head>
  );
}
