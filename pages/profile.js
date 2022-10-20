import { useSDK } from "@thirdweb-dev/react";
import { getUser } from "../auth.config";
import Profile from "../components/profile/Profile";
import {
  getEnergyBalance,
  getPassesOwned,
  getKeysOwned,
} from "../web3/thirdweb";
import { useEffect, useState } from "react";
export default function ProfilePage(props) {
  const { user } = props;
  const [userData, setUserData] = useState({});
  const sdk = useSDK();
  useEffect(() => {
    if (user)
      (async () => {
        const energyBalance = await getEnergyBalance(sdk, user.address);
        const passesOwned = await getPassesOwned(sdk, user.address);
        const keysOwned = await getKeysOwned(sdk, user.address);
        setUserData({
          energyBalance,
          passesOwned,
          keysOwned,
        });
      })();
  }, []);
  return (
    <div className="pgContain">
      <div className="main">
        <Profile user={user} userData={userData} />
      </div>
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
