import "../styles/globals.scss";
import { useState, useEffect } from "react";

import Login from "../components/login/Login";
import Layout from "../components/UI/Layout/Layout";

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
