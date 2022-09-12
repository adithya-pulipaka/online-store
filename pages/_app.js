import CssBaseline from "@mui/material/CssBaseline";
import React from "react";
import Layout from "../components/Layout";
import { CartContextProvider } from "../hooks/useCart";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <CartContextProvider>
        <CssBaseline />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </CartContextProvider>
    </>
  );
}

export default MyApp;
