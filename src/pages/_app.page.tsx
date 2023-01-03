import { useAnonUser } from '@/hooks/useAnonUser';
import { Layout } from '@/components/layouts/Layout';
import Head from 'next/head';
import type { AppProps } from 'next/app';
import '@/styles/global.css';

export default function App({ Component, pageProps }: AppProps) {
  useAnonUser();

  return (
    <>
      <Head>
        <link rel='stylesheet' href='https://unpkg.com/@highlightjs/cdn-assets@11.4.0/styles/base16/espresso.min.css' />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
