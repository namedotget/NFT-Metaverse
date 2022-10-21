import classes from "./main_nav.module.scss";
import Link from "next/link";
import {
  ConnectWallet,
  useAddress,
  useLogout,
  useSDK,
} from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import ProfileModal from "./ProfileModal";
import { getEnergyBalance, getPassesOwned } from "../../../web3/thirdweb";

export default function MainNav(props) {
  const [userData, setUserData] = useState({});
  const [hidden, setHidden] = useState(props.world);
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
          const passesOwned = await getPassesOwned(sdk, user.address);
          setUserData({
            energyBalance,
            passesOwned,
          });
          localStorage.setItem("user", JSON.stringify(userData));
        })();
      }
    }
  }, [profileModal]);

  return (
    <>
      {hidden && props.world ? (
        <button className={classes.worldBtn} onClick={() => setHidden(false)}>
          menu
        </button>
      ) : (
        <div className={classes.header}>
          {props.world && (
            <button
              className={classes.worldBtn}
              onClick={() => setHidden(true)}
            >
              hide
            </button>
          )}
          {!props.world && <h2>NFTverse</h2>}
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
            <div style={profileModal ? { opacity: 0 } : {}}>
              <ConnectWallet
                auth={{ loginOptional: false }}
                className={classes.connect}
              />
            </div>
          </div>
          {profileModal && (
            <ProfileModal close={toggleProfileModal} userData={userData} />
          )}
        </div>
      )}
    </>
  );
}
