import React, { FC } from "react";
import Layout from "~/components/layout/layout.tsx";
import styles from "~/style/404.module.css";

const E404: FC = () => {
  return (
    <Layout>
      <head>
        <title>oops...</title>
        <meta name="robots" content="noindex" />
      </head>
      <main className={styles.page}>
        <img src="/icons/fallback.svg" alt="machnevegor's logo" />
        <p>
          Oops... Contact <a href="https://t.me/machnevegor">me</a>?
        </p>
      </main>
    </Layout>
  );
};

export default E404;
