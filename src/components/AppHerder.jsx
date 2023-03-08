/* eslint-disable @next/next/no-page-custom-font */
/* eslint-disable @next/next/google-font-display */
import Head from "next/head";
export default function AppHerder({ title = "" }) {
  return (
    <Head>
      <title>{title}</title>
    </Head>
  );
}