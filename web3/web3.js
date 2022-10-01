//CONFIGURE web3

import Web3 from "web3";

export async function initWeb3() {
  if (window.ethereum) {
    try {
      await window.ethereum.request({ method: "eth_requestAccounts" });
      window.web3 = new Web3(window.ethereum);
      return true;
    } catch (err) {
      return err;
    }
  } else console.log("No Wallet");
}
