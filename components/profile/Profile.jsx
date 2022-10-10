import { useSDK } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import {
  REWARDS,
  getEnergyBalance,
  NFTsOwned,
  rewardsOwned,
} from "../../web3/thirdweb";
import EnergyCoin from "../UI/EnergyCoin";
import classes from "./profile.module.scss";

export default function Profile(props) {
  const { user } = props;
  const [userData, setUserData] = useState({});
  const sdk = useSDK();
  useEffect(() => {
    if (user)
      (async () => {
        const energy = await getEnergyBalance(sdk, user.address);
        const found = await NFTsOwned(sdk, user.address);
        const rewards = await rewardsOwned(sdk, user.address);
        setUserData({
          energy,
          rewards,
          found,
        });
      })();
  }, [user, sdk]);

  return (
    <div className={classes.profileContain}>
      <h1>{`Welcome ${user.address.slice(0, 6)}...${user.address.slice(
        -4
      )} !`}</h1>
      <div className={classes.info}>
        <div className={classes.balances}>
          <div className={classes.card}>
            <label>ENERGY BALANCE</label>
            <p>
              {userData?.energy || 0}
              <span>
                <EnergyCoin scale={0.5} position={[0, 0.5, 0]} animated />
              </span>
            </p>
          </div>
          <div className={classes.card}>
            <label>NFTs FOUND</label>
            <p>{userData?.found}</p>
          </div>
        </div>
        <div className={classes.rewards}>
          {REWARDS.map((reward, i) => (
            <div className={classes.reward} key={`reward${i}`}>
              <p>{reward.name}</p>
              <Image src={reward.image} width={50} height={50} />
              <p>{userData.rewardBalance}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
