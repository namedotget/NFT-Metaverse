import "../styles/globals.scss";
import { useState, useEffect, Suspense } from "react";
import Login from "../components/login/Login";
import Layout from "../components/UI/Layout/Layout";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";
import LoadingScreen from "../components/UI/LoadingScreen";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: "https://localhost:3000",
        authUrl: "/api/auth",
        loginRedirect: "/",
      }}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThirdwebProvider>
  );
}

export default MyApp;
