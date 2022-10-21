import MainNav from "./MainNav";
import Login from "../../login/Login";
import {
  ConnectWallet,
  useAccount,
  useAddress,
  useSDK,
  useUser,
} from "@thirdweb-dev/react";
import { getEnergyBalance, rewardsOwned } from "../../../web3/thirdweb";
import { useState, useEffect } from "react";
import { UserWallet } from "@thirdweb-dev/sdk";

export default function Layout(props) {
  const { user } = useUser();
  if (!user) {
    return (
      <>
        <MainNav />
        {props.children}
      </>
    );
  }
  if (
    props.children.type.name === "WorldPage" ||
    props.children.type.name === "J"
  ) {
    return (
      <div className="UI">
        <MainNav loggedIn world user={user} /> {props.children}
      </div>
    );
  }
  return (
    <>
      <MainNav loggedIn user={user} />
      {props.children}
    </>
  );
}
