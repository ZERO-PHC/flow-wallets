import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";
import React,{ useEffect } from 'react';

import Layout from "../components/Layout";
import theme from "../theme";
import DialogProvider from "../providers/DialogProvider";
import TableProvider from "../providers/table/TableProvider";
import SearchDialogComponent from "../components/SearchDialogComponent";
import Head from "next/head";

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {

  useEffect(() => {
    if (typeof window !== 'undefined') {
            const loader = document.getElementById('globalLoader');
        if (loader)
            loader.style.display = 'none';
    }
}, []);

  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <DialogProvider>
        <TableProvider>
          <Layout>
            <Head>
              <title>Flow Wallets - Find your wallet</title>
              <meta property="og:title" content="Flow Wallets - Find your wallet" key="title" />
              <meta content="Find best wallet on Flow Blockchain" name="description" />
              <meta content="Find best wallet on Flow Blockchain" property="og:description" />
            </Head>
            <SearchDialogComponent />
            <Component {...pageProps} />
          </Layout>
        </TableProvider>
      </DialogProvider>
    </ChakraProvider>
  );
}

export default MyApp;
