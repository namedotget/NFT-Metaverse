import Home from "../components/home/Home";
import { getUser } from "../auth.config";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { useMetamask, useLogin } from "@thirdweb-dev/react";
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
