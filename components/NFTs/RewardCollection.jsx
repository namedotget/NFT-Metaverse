import classes from "./reward_collection.module.scss";
import { REWARDS } from "../../web3/thirdweb";
import Image from "next/image";
export default function RewardCollection(props) {
  return (
    <div className={classes.rewards}>
      <h2>Rewards</h2>
      {REWARDS.map((reward, i) => (
        <div className={classes.reward} key={`reward${i}`}>
          <Image src={reward.image} width={"150"} height={"150%"} />
          <div className={classes.info}>
            <p>{reward.name}</p>
            <p>{reward.description}</p>
            {reward.attributes.map((attr, i) => (
              <div className={classes.attributes} key={`attr${i}`}>
                <label>{attr.trait} :</label>
                <p>{attr.value}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
