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

import "hardhat/console.sol";
import "./Energy.sol";
import "./RewardNFT.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract Vendor is Ownable {
  // Our Token Contract
  Energy energy;
  RewardNFT reward;
  //Registered NFT Collections
   mapping(address=>bool) public registered;
  // token price for ETH
  uint256 public tokensPerEth = 1000;
  address public rewardAddress;
  // Event that log buy operation
  event BuyTokens(address buyer, uint256 amountOfETH, uint256 amountOfTokens);
  event SellTokens(address seller, uint256 amountOfTokens, uint256 amountOfETH);

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

  function redeem(uint id, uint amount, address rewardContract) public {
    reward = RewardNFT(rewardContract);
    uint cost = amount * reward.pricePerReward();
    require(energy.balanceOf(msg.sender) >= cost, "need more Energy to redeem");
    energy.transferFrom(msg.sender,address(this),cost);
    reward.safeTransferFrom(reward.owner(), msg.sender, id, amount, "");
  }

  function verifyRedemption() public {
    
  }
}