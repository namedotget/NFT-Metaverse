///UPDATED FOR NEXT BATCH//

// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC1155/ERC1155.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "@openzeppelin/contracts/security/Pausable.sol";
import "./Energy.sol";

contract RewardNFT is ERC1155, Ownable, Pausable {
      uint public pricePerReward = 30 * 10 ** 18;

    constructor(address vendor) ERC1155("ipfs://Qmd1rao45ppEDEtgcoFp74b1cB1tPb8nzZTj5oX8NDSXEt/{id}.json") {
        setApprovalForAll(vendor, true);
        _mint(msg.sender, 1, 100, '');
    }

    function setURI(string memory newuri) public onlyOwner {
        _setURI(newuri);
    }

    function mint(address account, uint256 id, uint256 amount, bytes memory data)
        public
        onlyOwner
    {
        _mint(owner(), id, amount, data);
    }

    function mintBatch(address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        public
        onlyOwner
    {
        _mintBatch(owner(), ids, amounts, data);
    }

    function pause() public onlyOwner {
        _pause();
    }

    function unpause() public onlyOwner {
        _unpause();
    }

   
    function _beforeTokenTransfer(address operator, address from, address to, uint256[] memory ids, uint256[] memory amounts, bytes memory data)
        internal
        whenNotPaused
        override
    {
        super._beforeTokenTransfer(operator, from, to, ids, amounts, data);
    }
}