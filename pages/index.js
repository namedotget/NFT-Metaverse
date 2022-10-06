import Home from "../components/home/Home";
import { Suspense, useEffect, useState } from "react";
import LoadingScreen from "../components/UI/LoadingScreen";
import {
  ConnectWallet,
  useAddress,
  useConnect,
  useLogout,
} from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
export default function HomePage(props) {
  return (
    <div className="pgContain">
      <Home />
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}
