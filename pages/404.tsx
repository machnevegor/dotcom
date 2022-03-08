import React from "react";
import Layout from "~/components/layout/layout.tsx";
import Meta from "~/components/meta.tsx";
import styles from "~/style/notfound.module.css";

const title = "oops";
const description = "page not found. try again later...";

export default function NotFound() {
  return (
    <Layout>
      <head>
        <title>{title}</title>
        <Meta title={title} description={description} />
      </head>
      <main className={styles.page}>
        <img src="/icons/fallback.svg" alt="machnevegor's logo" />
        <p className={styles.message}>
          Oops... Contact <a href="https://t.me/machnevegor">me</a>?
        </p>
      </main>
    </Layout>
  );
}
