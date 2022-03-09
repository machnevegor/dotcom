import React from "react";

interface MetaProps {
  title: string;
  description: string;
  keywords?: string[];
  card?: "summary" | "summary_large_image";
  image?: string;
}

// default meta
const keywords = ["machnevegor", "developer", "coding"];
const card = "summary";
const image = "https://machnevegor.com/logos/icon.png";

export default function Meta(
  { title, description, ...meta }: MetaProps,
) {
  return (
    <head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={(meta.keywords || keywords).join(",")} />

      <meta name="og:title" content={title} />
      <meta name="og:description" content={description} />
      <meta name="og:image" content={meta.image || image} />
      <meta name="og:site_name" content="machnevegor.com" />

      <meta name="twitter:card" content={meta.card || card} />
      <meta name="twitter:image" content={meta.image || image} />
      <meta name="twitter:site" content="@machnevegor" />
    </head>
  );
}
