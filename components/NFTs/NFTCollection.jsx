import classes from "./nft_collection.module.scss";
import Image from "next/image";
export default function NFTCollection(props) {
  return (
    <div className={classes.collection}>
      <h2>Pass 1 is live !</h2>
      <div className={classes.img}>
        <Image src={"/images/nfts/pass1.png"} width={300} height={300} />
      </div>
    </div>
  );
}
