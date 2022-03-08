import React, { FC } from "react";

interface AppProps {
  Page: FC;
  pageProps: Record<string, unknown>;
}

export default function App(
  { Page, pageProps }: AppProps,
) {
  return <Page {...pageProps} />;
}
