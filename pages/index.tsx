import React, { FC, useEffect, useState } from "react";
import Layout from "~/components/layout/layout.tsx";
import Meta from "~/components/layout/meta.tsx";
import Terminal from "~/components/terminal/terminal.tsx";
import styles from "~/style/index.module.css";

import Markdown from "marked-react";

const title = "Egor Machnev";
const description = "Full Stack developer in Deno " +
  "and Python, slightly vector designer.";

const resume = "https://docs.google.com/document/d/" +
  "1o8XloGaqtCceoNmCR07Pc0VSTYqxf1vgp0W8yPdT9tc";

const Home: FC = () => {
  const [result, setResult] = useState("...");

  useEffect(() => {
    fetch("/api/hello")
      .then((resp) => resp.text())
      .then((md) => setResult(md))
      .catch(console.error);
  }, []);

  return (
    <Layout>
      <Meta title={title} description={description} />
      <main className={styles.page}>
        <Terminal filename="hello.ts">
          <Markdown>{result}</Markdown>
        </Terminal>
        <div className={styles.links}>
          <a href="https://t.me/machnevegor">Telegram</a>
          <span />
          <a href={resume}>Resume</a>
        </div>
      </main>
    </Layout>
  );
};

export default Home;
