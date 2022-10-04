import classes from "./main_nav.module.scss";
import Link from "next/link";
import { useLogout } from "@thirdweb-dev/react";
export default function MainNav() {
  const logout = useLogout();
  return (
    <div className={classes.header}>
      <h2>NFTverse</h2>
      <div className={classes.nav}>
        <Link href={"/"}>Home</Link>
        <Link href={"/NFTs"}>NFTs</Link>
        <Link href={"/profile"}>Profile</Link>
        <button onClick={logout}>signOut</button>
      </div>
    </div>
  );
}
