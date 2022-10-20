export const energyContractAddress =
  "0xcf4298804Fd77ac88D72BE16a661E281725C369b";
export const vendorContractAddress =
  "0x4C87c8ab9D59985d96D023C2fbed2e97C72d909b";
export const keysContractAddress = "0x860139880a9dcD0ec4822B8034B2D1cE2AB3c992";
export const passesContractAddress =
  "0xa4490F5c117025D07A168665FB6569024C03F1aa";
import keysABI from "../web3/build/keys/abi.json";
import energyABI from "../web3/build/energy/abi.json";
import passesABI from "../web3/build/passes/abi.json";
import vendorABI from "../web3/build/vendor/abi.json";
import { ethers } from "ethers";

export async function checkBalance(sdk, address) {
  const editionDrop = await sdk.getEditionDrop(passesContractAddress);
  const balance = await editionDrop.balanceOf(address, 0);
  return balance.gt(0);
}

export async function rewardsOwned(sdk, address) {
  const contract = sdk.getContractFromAbi(keysContractAddress, keysABI);
  const pixelXP = await contract.call("balanceOf", address, 1);
  const data = JSON.parse(pixelXP);
  return data;
}

export async function getPassesOwned(sdk, address) {
  const contract = sdk.getContractFromAbi(passesContractAddress, passesABI);
  const owned = await contract.call(
    "balanceOfBatch",
    [address, address, address],
    ["1", "2", "3"]
  );
  return owned.map((bigNum) => JSON.parse(bigNum));
}
export async function getKeysOwned(sdk, address) {
  const contract = sdk.getContractFromAbi(keysContractAddress, keysABI);
  const owned = await contract.call(
    "balanceOfBatch",
    [address, address, address],
    ["1", "2", "3"]
  );
  return owned.map((bigNum) => JSON.parse(bigNum));
}

export async function getEnergyBalance(sdk, address) {
  const contract = sdk.getContractFromAbi(energyContractAddress, energyABI);
  const balance18Digit = JSON.parse(await contract.call("balanceOf", address));
  return String(balance18Digit).slice(0, -18);
}

export async function getKeyBalance(sdk, address, id) {
  const keysContract = sdk.getContractFromAbi(keysContractAddress, keysABI);
  //check if user already has this key
  return JSON.parse(await keysContract.call("balanceOf", address, id));
}

export async function getPassBalance(sdk, address, id) {
  const contract = sdk.getContractFromAbi(passesContractAddress, passesABI);
  return JSON.parse(await contract.call("balanceOf", address, id));
}

export async function userMintNFT(sdk) {
  const contract = sdk.getContractFromAbi(passesContractAddress, passesABI);
  try {
    await contract.call("mint", 1, {
      value: ethers.utils.parseEther("0.01"),
    });
    console.log("1 NFT has been minted");
  } catch (err) {
    console.log("transaction cancelled");
  }
}

export async function buyKey(sdk, address, id, notification) {
  try {
    const userKeyBalance = await getKeyBalance(sdk, address, id);
    if (userKeyBalance > 0) throw new Error("user already has key");
    //increase allowance for vendor
    const userEnergyBalance = await getEnergyBalance(sdk, address);
    if (userEnergyBalance < 5)
      throw new Error("user does not have enough ENRG");
    const energyContract = sdk.getContractFromAbi(
      energyContractAddress,
      energyABI
    );
    const vendorContract = sdk.getContractFromAbi(
      vendorContractAddress,
      vendorABI
    );

    //check allowance
    const vendorAllowance = JSON.parse(
      await energyContract.call("allowance", address, vendorContractAddress)
    );
    if (vendorAllowance < 5 * 10 ** 18) {
      notification(
        "success",
        "Confirm Transaction to allow NftVerse to spend your ENRG tokens, you will only need to do this the first time"
      );
      await energyContract.call(
        "approve",
        vendorContractAddress,
        String(999 * 10 ** 18)
      );
    }
    notification("success", "Confirm Transaction to Buy a 🔑 with ENRG");
    await vendorContract.call("redeemKey", id, "1");
  } catch (err) {
    if (err.message.length > 300) throw new Error("❌transaction cancelled");
    console.log(err);
    throw err;
  }
}

export async function spendKey(sdk, address, id) {
  // burn key !!!
  const contract = sdk.getContractFromAbi(keysContractAddress, keysABI);
  try {
    await contract.call("burn", address, id, "1");
  } catch (err) {
    throw err;
  }
}
///////////////
//REWARDS/////
//////////////

export const REWARDS = [
  {
    name: "key1",
    description: "key for world 1",
    image: "/images/nfts/key1.png",
  },
  {
    name: "key2",
    description: "key for world 2",
    image: "/images/nfts/key2.png",
  },
  {
    name: "key3",
    description: "key for world 3",
    image: "/images/nfts/key3.png",
  },
];

///////////////
//PASSES//////
//////////////

export const PASSES = [
  {
    name: "pass1",
    descrition: "explore world 1 with this pass",
    image: "/images/nfts/pass1.png",
  },
  {
    name: "pass2",
    descrition: "explore world 2 with this pass",
    image: "/images/nfts/pass2.png",
  },
  {
    name: "pass3",
    descrition: "explore world 3 with this pass",
    image: "/images/nfts/pass3.png",
  },
];

/////////
///import ENRG Token ///
///////
export async function importENRGToken() {
  try {
    // wasAdded is a boolean. Like any RPC method, an error may be thrown.
    const wasAdded = await ethereum.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20", // Initially only supports ERC20, but eventually more!
        options: {
          address: energyContractAddress, // The address that the token is at.
          symbol: "ENRG", // A ticker symbol or shorthand, up to 5 chars.
          decimals: 18, // The number of decimals in the token
        },
      },
    });

    if (wasAdded) {
      console.log("Thanks for your interest!");
    } else {
      console.log("Your loss!");
    }
  } catch (error) {
    console.log(error);
  }
}
