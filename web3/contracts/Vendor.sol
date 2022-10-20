/*

  ___ ___  _    ___ _  _   ___ ___  ___ _____ ___ ___ 
 / __/ _ \| |  |_ _| \| | | __/ _ \/ __|_   _| __| _ \
| (_| (_) | |__ | || .` | | _| (_) \__ \ | | | _||   /
 \___\___/|____|___|_|\_| |_| \___/|___/ |_| |___|_|_\


    GITHUB :   https://github.com/colinmfoster4723                                                             
    EMAIL : colin.foster4723@gmail.com
    Goerli Token address : 0x02C922494dAFbcE87b75cd3EFba1473c16d0Af47
    Goerli Vendor address : 0x96D1e16f58a798114C6379852B9653D13717Fa0C

*/

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/access/Ownable.sol";
import "hardhat/console.sol";
import "./Energy.sol";
import "./Keys.sol";

contract Vendor is Ownable {
  // Our Token Contract
  Energy energy;
  Keys keys;
  //Registered Collections (allows collection to mint energy)
   mapping(address=>bool) public registered;
  // token price for ETH
  uint256 public tokensPerEth = 1000;
  address public rewardAddress;

  constructor(address tokenAddress) {
    energy = Energy(tokenAddress);
  }

  modifier isRegistered(){
      require(registered[msg.sender]);
      _;
  }

  function register(address collectionAddress, address creator ) public {
      require(creator == owner(), "the creator of the NFT collection must be the owner of the vendor");
      registered[collectionAddress] = true;
  }

  function mintRewardToken(address to, uint amount) public isRegistered {
      energy.mint(to, amount);
  }

  function redeemKey(uint id, uint amount) public {
    keys = Keys(rewardAddress);
    uint cost = amount * keys.energyPrice();
    require(energy.balanceOf(msg.sender) >= cost, "need more Energy to redeem");
    energy.transferFrom(msg.sender,address(this),cost);
    keys.safeTransferFrom(keys.owner(), msg.sender, id, amount, "");
  }

  function setRewardContract(address rewardContract) public onlyOwner{
    rewardAddress = rewardContract;
  }
}