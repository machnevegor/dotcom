import React from "react";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string[];
  image?: string;
}

// default meta
const keys = ["machnevegor", "developer", "coding"];
const card = "/files/card.png";

export default function Meta(
  { title, description, keywords = keys, image = card }: MetaProps,
) {
  return (
    <>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(",")} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={image} />

      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      <meta name="twitter:card" content="summary_large_image" />
    </>
  );
}
