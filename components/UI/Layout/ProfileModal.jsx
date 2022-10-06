import classes from "./profile_modal.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ConnectWallet } from "@thirdweb-dev/react";
import { REWARDS } from "../../../web3/thirdweb";
export default function ProfileModal(props) {
  const { userData } = props;
  return (
    <div className={classes.profileContain}>
      <div className={classes.main}>
        <ConnectWallet className={classes.wallet} auth={"/api/auth"} />
        <button className={classes.closebtn} onClick={props.close}>
          ^
        </button>
        <Link href={"/profile"}>
          <button onClick={props.close}>see full profile</button>
        </Link>
      </div>
      <div className={classes.energy}>
        <label>ENRG balance :</label>
        <p>{userData.energyBalance || 0}</p>
      </div>
      <hr></hr>
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
  );
}
