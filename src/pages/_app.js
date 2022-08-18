import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";

// 1. Import the extendTheme function
import { extendTheme } from "@chakra-ui/react";
import Layout from "../components/Layout";
import DialogProvider from "../providers/DialogProvider";
import TableProvider from "../providers/table/TableProvider";

// 2. Extend the theme to include custom colors, fonts, etc
const colors = {
  brand: {
    900: "#1a365d",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

// 3. Pass the `theme` prop to the `ChakraProvider`
function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
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
