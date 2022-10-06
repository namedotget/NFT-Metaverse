export const energyContractAddress =
  "0xcf4298804Fd77ac88D72BE16a661E281725C369b";
export const vendorContractAddress =
  "0x2a5583F6C687Eb773A0f5AEF0Cb074d81935d4A4";
export const rewardsContractAddress =
  "0x755210600e7B1bc067e147c03f3b9d43D87BDC6F";
export const collectionAddress = "0xff2fed9F15462767Ce93f00f9044ebC0a44497b5";
import rewardABI from "../web3/build/ERC-1155/abi.json";
import energyABI from "../web3/build/energy/abi.json";
import collectionABI from "../web3/build/ERC-721/abi.json";
import { formatEther } from "ethers/lib/utils";
import { BigNumber } from "ethers";
import { useSDK } from "@thirdweb-dev/react";

export async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getEditionDrop(collectionAddress);
  const balance = await editionDrop.balanceOf(address, 0);
  return balance.gt(0);
}

export async function rewardsOwned(sdk, address) {
  const contract = sdk.getContractFromAbi(rewardsContractAddress, rewardABI);
  const pixelXP = await contract.call("balanceOf", address, 1);
  const data = JSON.parse(pixelXP);
  return data;
}

export async function NFTsOwned(sdk, address) {
  const contract = sdk.getContractFromAbi(collectionAddress, collectionABI);
  const owned = await contract.call("balanceOf", address);
  return JSON.parse(owned);
}

export async function getEnergyBalance(sdk, address) {
  const contract = sdk.getContractFromAbi(energyContractAddress, energyABI);
  const balance18Digit = JSON.parse(await contract.call("balanceOf", address));
  return String(balance18Digit).slice(0, -18);
}

export async function getNFTSupply(sdk) {
  const contract = sdk.getContractFromAbi(collectionAddress, collectionABI);
  const totalSupply = JSON.parse(await contract.call("totalSupply"));
  const maxSupply = JSON.parse(await contract.call("maxSupply"));
  return `${totalSupply}/${maxSupply}`;
}

///////////////
//REWARDS/////
//////////////

export const REWARDS = [
  {
    name: "PixelXP",
    description: "gain access to the pixel world",
    image:
      "https://gateway.pinata.cloud/ipfs/QmakEpKo5aRKK48ZZYcfnqebd3qnDF2synAX1MjVefKd1i/1.png",
    attributes: [{ trait: "pixelated", value: "XP" }],
  },
  {
    name: "Key",
    description: "unlock a part of the world",
    image: "",
    attributes: [{ trait: "key", value: "test" }],
  },
];
