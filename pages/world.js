import World from "../components/world/World";
import { getUser } from "../auth.config";
import { useEffect, useState } from "react";
import { getEnergyBalance, rewardsOwned } from "../web3/thirdweb";
import {
  useAddress,
  useConnect,
  useSDK,
  useMetamask,
} from "@thirdweb-dev/react";
export default function WorldPage(props) {
  const { user } = props;
  const [userData, setUserData] = useState(null);
  const address = useAddress();
  const connect = useMetamask();
  const sdk = useSDK();
  useEffect(() => {
    if (!address) connect();
    (async () => {
      const energyBalance = await getEnergyBalance(sdk, user.address);
      const rewardBalance = await rewardsOwned(sdk, user.address);
      setUserData({ energyBalance, rewardBalance });
    })();
  }, []);
  return (
    <div className="pgContain">
      <World user={user} userData={userData} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = await getUser(context.req);
  if (!user) {
    return {
      redirect: {
        destination: "/",
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
