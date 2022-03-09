import React from "react";
import Layout from "~/components/layout/layout.tsx";
import styles from "~/style/notfound.module.css";

export default function NotFound() {
  return (
    <Layout>
      <head>
        <title>oops</title>
        <meta name="robots" content="noindex" />
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
