import classes from "./main_nav.module.scss";
import Link from "next/link";
import {
  ConnectWallet,
  useAddress,
  useLogin,
  useLogout,
  useSDK,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";
import { getEnergyBalance, rewardsOwned } from "../../../web3/thirdweb";

export default function MainNav(props) {
  const [userData, setUserData] = useState({});
  const { user } = props;
  const address = useAddress();
  const logout = useLogout();
  const [profileModal, setProfileModal] = useState(false);
  function toggleProfileModal() {
    setProfileModal(!profileModal);
  }
  const sdk = useSDK();

  useEffect(() => {
    if (user?.address && address) {
      if (user.address !== address) return logout();
      else {
        (async () => {
          const energyBalance = await getEnergyBalance(sdk, user.address);
          const rewardBalance = await rewardsOwned(sdk, user.address);
          setUserData({
            energyBalance,
            rewardBalance,
          });
          console.log(userData);
        })();
      }
    }
  }, [profileModal, address, user?.address, logout]);

  return (
    <div className={classes.header}>
      <h2>NFTverse</h2>
      <div className={classes.nav}>
        <Link href={"/"}>Home</Link>
        <Link href={"/nfts"}>NFTs</Link>
        {user ? (
          <>
            <button onClick={toggleProfileModal}>profile</button>
            <ConnectWallet />
          </>
        ) : (
          <ConnectWallet />
        )}
      </div>
      {profileModal && (
        <ProfileModal close={toggleProfileModal} userData={userData} />
      )}
    </div>
  );
}
