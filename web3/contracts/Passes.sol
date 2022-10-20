/*

  ___ ___  _    ___ _  _   ___ ___  ___ _____ ___ ___ 
 / __/ _ \| |  |_ _| \| | | __/ _ \/ __|_   _| __| _ \
| (_| (_) | |__ | || .` | | _| (_) \__ \ | | | _||   /
 \___\___/|____|___|_|\_| |_| \___/|___/ |_| |___|_|_\


    GITHUB :   https://github.com/colinmfoster4723                                                             
    EMAIL : colin.foster4723@gmail.com

*/

// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./Vendor.sol";
contract Passes is ERC1155, Ownable, Pausable {
      Vendor vendor;
    uint public rewardAmount = 10 * 10 ** 18;

    constructor(address vendorAddress) ERC1155("ipfs://QmXZTec4YrQLC3WK5QsyDoygpnwfkANLkVKEwUHJvBFt6r/{id}.json") {
        vendor = Vendor(vendorAddress);
        setApprovalForAll(vendorAddress, true);
        vendor.register(address(this), msg.sender);
    }

    function setRewardAmount(uint amount) public onlyOwner {
        rewardAmount = amount;
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(account, id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(to, ids, amounts, data);
    }

    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
         if(from == owner()){
         vendor.mintRewardToken(to, rewardAmount);
         }
    }
}