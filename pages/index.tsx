import React from "react";
import Layout from "~/components/layout/layout.tsx";
import Meta from "~/components/layout/meta.tsx";
import Terminal from "~/components/terminal/terminal.tsx";
import styles from "~/style/home.module.css";

const title = "Egor Machnev";
const description = "🐍Full stack developer in " +
  "Python and JS, designer and 3D modeler😏";

const resume = "https://docs.google.com/document/d/" +
  "1o8XloGaqtCceoNmCR07Pc0VSTYqxf1vgp0W8yPdT9tc";

export default function Home() {
  return (
    <Layout>
      <head>
        <title>{title}</title>
        <Meta title={title} description={description} />
      </head>
      <main className={styles.page}>
        <Terminal filename="hello.ts">
          hi! my name is Egor and I'm 17. I love coding, so check out my{" "}
          <a href="https://github.com/machnevegor">github</a>.
        </Terminal>
        <div className={styles.links}>
          <a href="https://t.me/machnevegor">Telegram</a>
          <span />
          <a href={resume}>Resume</a>
        </div>
      </main>
    </Layout>
  );
}
