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
import "@openzeppelin/contracts/token/ERC1155/extensions/ERC1155Burnable.sol";

contract Keys is ERC1155, Ownable, Pausable, ERC1155Burnable {
    uint public energyPrice = 5 * 10 ** 18;

    constructor(address vendor) ERC1155("ipfs://QmemU7MwtqMx5GyGyGis1BhEiUqUNN5jv7pLtAP46uGSmF/{id}.json") {
        setApprovalForAll(vendor, true);
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

    function mint(uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(msg.sender, id, amount, data);
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
    }
}