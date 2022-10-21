import classes from "./profile_modal.module.scss";
import Link from "next/link";
import Image from "next/image";
import { ConnectWallet } from "@thirdweb-dev/react";
import { PASSES } from "../../../web3/thirdweb";
import EnergyCoin from "../EnergyCoin";
export default function ProfileModal(props) {
  const { userData } = props;
  return (
    <div className={classes.profileContain}>
      <div className={classes.main}>
        <div className={classes.controls}>
          <button className={classes.closebtn} onClick={props.close}>
            <Image src={"/images/icons/cross.png"} width={10} height={10} />
          </button>
          <ConnectWallet className={classes.wallet} />
        </div>
      </div>
      <div className={classes.energy}>
        <label>ENRG balance :</label>
        <p>{userData.energyBalance || 0}</p>
        <div>
          <EnergyCoin scale={0.9} position={[0, -3, 0]} />
        </div>
      </div>
      <hr></hr>
      <div className={classes.rewards}>
        {PASSES.map((reward, i) => (
          <div className={classes.reward} key={`reward${i}`}>
            <p>{reward.name}</p>
            <Image src={reward.image} width={75} height={75} />
            <p>
              {userData?.passesOwned ? userData?.passesOwned[i] : "loading"}
            </p>
          </div>
        ))}
      </div>
      <hr></hr>
      <Link href={"/profile"}>
        <button onClick={props.close}>see full profile</button>
      </Link>
    </div>
  );
}
