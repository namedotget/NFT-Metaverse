import classes from "./nft_collection.module.scss";
import Image from "next/image";
export default function NFTCollection(props) {
  return (
    <div className={classes.collection}>
      <h2>Collection</h2>
      <p>Supply : 3/100 have been found !</p>
      <div className={classes.img}>
        <Image src={"/blobguys_prev.gif"} width={250} height={250} />
      </div>
    </div>
  );
}
