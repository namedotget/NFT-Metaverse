//GET AN INSTANCE OF THE BLOBGUYS CONTRACT//
import web3 from "../../web3";
import abi from "./abi.json";

const instance = new web3.eth.Contract(
  abi,
  "0x78B38956dCA70DE9405a6357b43E4C77f3c1cc09"
);

export default instance;
