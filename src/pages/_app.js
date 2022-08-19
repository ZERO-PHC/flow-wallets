import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { ColorModeScript } from "@chakra-ui/react";

import Layout from "../components/Layout";
import DialogProvider from "../providers/DialogProvider";
import TableProvider from "../providers/table/TableProvider";


import theme from "../theme";

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <DialogProvider>
        <TableProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </TableProvider>
      </DialogProvider>
    </ChakraProvider>
  );
}

export default MyApp;
