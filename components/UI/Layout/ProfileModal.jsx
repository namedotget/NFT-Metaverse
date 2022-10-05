import classes from "./profile_modal.module.scss";
import Link from "next/link";
import { ConnectWallet } from "@thirdweb-dev/react";

export default function ProfileModal(props) {
  const { userData } = props;
  const rewards = ["Pixel-XP"];
  return (
    <div className={classes.profileContain}>
      <ConnectWallet />
      <button className={classes.closebtn} onClick={props.close}>
        ^
      </button>
      <Link href={"/profile"}>
        <button onClick={props.close}>see full profile</button>
      </Link>
      <h3>Profile</h3>
      <div className={classes.energy}>
        <label>balance</label>
        <p>{userData.energyBalance}</p>
      </div>
      <hr />
      <div className={classes.rewards}>
        {rewards &&
          rewards.map((reward) => (
            <div className={classes.reward} key={reward}>
              <p>{reward}</p>
              <p>{userData.rewardBalance}</p>
            </div>
          ))}
      </div>
    </div>
  );
}
