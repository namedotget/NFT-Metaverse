import { useSDK } from "@thirdweb-dev/react";
import { useEffect, useState } from "react";
import Image from "next/image";
import EnergyCoin from "../UI/EnergyCoin";
import classes from "./profile.module.scss";
import { REWARDS, PASSES } from "../../web3/thirdweb";
export default function Profile(props) {
  const { user, userData } = props;

  return (
    <div className={classes.profileContain}>
      <h1>{`Welcome ${user.address.slice(0, 6)}...${user.address.slice(
        -4
      )} !`}</h1>
      <div className={classes.info}>
        <div className={classes.balances}>
          <div className={classes.card}>
            <label>ENERGY BALANCE</label>
            <div>
              <p>{userData?.energyBalance || 0}</p>
              <EnergyCoin scale={0.8} position={[0, -1.5, 0]} animated />
            </div>
          </div>
          <div className={classes.passes}>
            <label>Passes Owned : </label>
            {PASSES.map((pass, i) => (
              <div key={`pass${i}`} className={classes.pass}>
                <p>
                  {userData.passesOwned
                    ? userData?.passesOwned[i]
                    : "...loading"}
                </p>
                <Image src={pass.image} width={50} height={50} />
              </div>
            ))}
          </div>
        </div>
        <div className={classes.rewards}>
          {REWARDS.map((reward, i) => (
            <div key={`reward${i}`}>
              <p>
                {userData.keysOwned ? userData?.keysOwned[i] : "...loading"}
              </p>
              <Image src={reward.image} width={200} height={200} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
