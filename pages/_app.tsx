import '@/styles/globals.css'
import { PlasmicRootProvider } from "@plasmicapp/react-web";
import type { AppProps } from "next/app";
import { Analytics } from '@vercel/analytics/react';
import Head from "next/head";

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <PlasmicRootProvider Head={Head}>
      <Component {...pageProps} />
      <Analytics />
    </PlasmicRootProvider>
  );
}
