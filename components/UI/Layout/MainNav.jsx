import classes from "./main_nav.module.scss";
import Link from "next/link";
import {
  ConnectWallet,
  useAddress,
  useMetamask,
  useLogin,
  useLogout,
  useSDK,
} from "@thirdweb-dev/react";
import { useEffect, useRef, useState } from "react";
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
        })();
      }
    }
  }, [profileModal, address, user?.address, logout, sdk]);

  return (
    <div className={classes.header}>
      <h2>NFTverse</h2>

      <div className={classes.nav}>
        <Link href={"/"}>
          <button>
            <img src={"/images/icons/home.png"} width={30} height={30} />
          </button>
        </Link>
        <Link href={"/nft"}>
          <button>
            <img src={"/images/icons/picture.png"} width={30} height={30} />
          </button>
        </Link>
        {user && (
          <button onClick={toggleProfileModal}>
            <img src={"/images/icons/user.png"} width={30} height={30} />
          </button>
        )}
        <ConnectWallet
          auth={"/api/auth"}
          className={classes.connect}
          key={"connectwallet"}
        />
      </div>
      {profileModal && (
        <ProfileModal close={toggleProfileModal} userData={userData} />
      )}
    </div>
  );
}
