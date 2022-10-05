import classes from "./login.module.scss";
import { ConnectWallet } from "@thirdweb-dev/react";
export default function Login(props) {
  return (
    <div className="pgContain">
      <div className={classes.login}>
        <div className={classes.info}>
          <h1>WELCOME !</h1>
          <p>
            Connect your wallet and sign in to get started!
            <br /> Browse NFTs, Redeem Rewards, Explore the NFTverse
          </p>
        </div>
      </div>
    </div>
  );
}
