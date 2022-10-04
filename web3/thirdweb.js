import { useContract, useOwnedNFTs } from "@thirdweb-dev/react";

const energyContractAddress = "0xcf4298804Fd77ac88D72BE16a661E281725C369b";
const vendorContractAddress = "0x2a5583F6C687Eb773A0f5AEF0Cb074d81935d4A4";
const rewardsContractAddress = "0x755210600e7B1bc067e147c03f3b9d43D87BDC6F";
const collectionAddress = "0xff2fed9F15462767Ce93f00f9044ebC0a44497b5";
import rewardABI from "../web3/build/ERC-1155/abi.json";
export async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getEditionDrop(collectionAddress);
  const balance = await editionDrop.balanceOf(address, 0);
  return balance.gt(0);
}

export async function rewardsOwned(sdk, address) {
  const contract = sdk.getContractFromAbi(rewardsContractAddress, rewardABI);
  const owner = await contract.call("PixelXP");
  return owner;
}
