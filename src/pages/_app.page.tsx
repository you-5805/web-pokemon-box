import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://unpkg.com/@highlightjs/cdn-assets@11.4.0/styles/base16/espresso.min.css' />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
