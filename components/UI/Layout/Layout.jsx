import MainNav from "./MainNav";
import Login from "../../login/Login";
import { useAccount, useAddress, useSDK, useUser } from "@thirdweb-dev/react";
import { getEnergyBalance, rewardsOwned } from "../../../web3/thirdweb";
import { useState, useEffect } from "react";
import { UserWallet } from "@thirdweb-dev/sdk";

export default function Layout(props) {
  const { user } = useUser();
  if (props.children.type.name === "WorldPage") return <>{props.children}</>;
  if (!user) {
    return (
      <>
        <MainNav />
        {props.children}
      </>
    );
  }
  return (
    <>
      <MainNav loggedIn user={user} />
      {props.children}
    </>
  );
}
