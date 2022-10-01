/*
( ___)(  _ \ / __)   ___   (__ \ / _ \   
 )__)  )   /( (__   (___)   / _/( (_) )  
(____)(_)\_) \___)         (____)\___/ 
  
  ___ ___  _    ___ _  _   ___ ___  ___ _____ ___ ___ 
 / __/ _ \| |  |_ _| \| | | __/ _ \/ __|_   _| __| _ \
| (_| (_) | |__ | || .` | | _| (_) \__ \ | | | _||   /
 \___\___/|____|___|_|\_| |_| \___/|___/ |_| |___|_|_\


    GITHUB :   https://github.com/colinmfoster4723                                                             
    EMAIL : colin.foster4723@gmail.com
    Goerli address : 0x02C922494dAFbcE87b75cd3EFba1473c16d0Af47
*/
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/token/ERC20/extensions/ERC20Burnable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

/// @custom:security-contact colin.foster4723@gmail.com
contract Energy is ERC20, ERC20Burnable, Pausable, Ownable {
    address public vendor;
    constructor(string memory name, string memory symbol) ERC20(name, symbol) {
    }

    function setVendor(address vendorAddress) public onlyOwner {
        vendor = vendorAddress;
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

    function mint(address to, uint256 amount) public isVendor {
        _mint(to, amount);
    }

    function _beforeTokenTransfer(address from, address to, uint256 amount)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(from, to, amount);
    }

    modifier isVendor(){
        require(msg.sender == vendor || msg.sender == owner());
        _;
    }
}