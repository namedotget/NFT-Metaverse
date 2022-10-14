import "../styles/globals.scss";
import { useState, useEffect } from "react";
import Layout from "../components/UI/Layout/Layout";
import { ChainId, ThirdwebProvider } from "@thirdweb-dev/react";

// This is the chainId your dApp will work on.
const activeChainId = ChainId.Goerli;

function MyApp({ Component, pageProps }) {
  const [mobile, setMobile] = useState(false);
  useEffect(() => {
    if (window?.innerWidth < 980) setMobile(true);
  }, []);

  if (mobile) {
    return (
      <div className="pgContain">
        <h1>...mobile website coming soon...</h1>
      </div>
    );
  }
  return (
    <ThirdwebProvider
      desiredChainId={activeChainId}
      authConfig={{
        domain: "https://nft-verse.netlify.app",
        // domain: "https://localhost:3000",
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
