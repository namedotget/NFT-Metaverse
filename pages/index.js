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
import { useRouter } from "next/router";
export default function HomePage(props) {
  const router = useRouter();

  function worldRoute() {
    router.push("/world");
  }

  return (
    <div className="pgContain">
      <Home route={worldRoute} />
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
