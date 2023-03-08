/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Head from "next/head";
export default function AppHerder({ title = "" }) {
  return (
    <Head>
      <meta charset='utf-8' />
      <meta http-equiv='X-UA-Compatible' content='IE=edge' />
      <meta name='viewport' content='width=device-width, initial-scale=1' />
      <title>{title}</title>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,700,0,0"
        rel="stylesheet"
      />
    </Head>
  );
}