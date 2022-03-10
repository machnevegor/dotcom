import React, { FC } from "react";

interface AppProps {
  Page: FC;
  pageProps: Record<string, unknown>;
}

const App: FC<AppProps> = ({ Page, pageProps }) => {
  return <Page {...pageProps} />;
};

export default App;
