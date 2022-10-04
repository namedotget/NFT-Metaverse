// SPDX-License-Identifier: MIT

/**
    Ownable NFT collection 
*/

pragma solidity >=0.7.0 <0.9.0;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/access/Ownable.sol";
import "./Vendor.sol";

contract LowGasNFT is ERC721, Ownable {
//Vendor Contract 
  Vendor vendor;

  using Strings for uint256;
  using Counters for Counters.Counter;
  Counters.Counter private supply;

  address public creator;
  string public uriPrefix = "";
  string public uriSuffix = ".json";
  string public hiddenMetadataUri;
  
  uint256 public cost = 0.01 ether;
  uint256 public maxSupply = 100;
  uint256 public maxMintAmountPerTx = 5;
  //reward points per mint
  uint256 private rewardRate = cost * 1000;

  bool public paused = true;
  bool public revealed = false;

  constructor(string memory name, string memory symbol, string memory hiddenUri, address vendorAddress) ERC721(name, symbol) {
    setHiddenMetadataUri(hiddenUri);
    vendor = Vendor(vendorAddress);
    creator = msg.sender;
    vendor.register(address(this), msg.sender);
  }

  modifier mintCompliance(uint256 _mintAmount) {
    require(_mintAmount > 0 && _mintAmount <= maxMintAmountPerTx, "Invalid mint amount!");
    require(supply.current() + _mintAmount <= maxSupply, "Max supply exceeded!");
    _;
  }

  function setVendor(address vendorContract) public onlyOwner {
    vendor = Vendor(vendorContract);
    vendor.register(address(this), msg.sender);
  }

  function totalSupply() public view returns (uint256) {
    return supply.current();
  }

  function mint(uint256 _mintAmount) public payable mintCompliance(_mintAmount) {
    require(!paused, "The contract is paused!");
    require(msg.value >= cost * _mintAmount, "Insufficient funds!");
    // This will give sender NFTS
    _mintLoop(msg.sender, _mintAmount);
    // This will give sender Rewards
    vendor.mintRewardToken(msg.sender , _mintAmount * rewardRate);
  }
  
  function mintForAddress(uint256 _mintAmount, address _receiver) public mintCompliance(_mintAmount) onlyOwner {
    _mintLoop(_receiver, _mintAmount);
  }

  function walletOfOwner(address _owner)
    public
    view
    returns (uint256[] memory)
  {
    uint256 ownerTokenCount = balanceOf(_owner);
    uint256[] memory ownedTokenIds = new uint256[](ownerTokenCount);
    uint256 currentTokenId = 1;
    uint256 ownedTokenIndex = 0;

    while (ownedTokenIndex < ownerTokenCount && currentTokenId <= maxSupply) {
      address currentTokenOwner = ownerOf(currentTokenId);

      if (currentTokenOwner == _owner) {
        ownedTokenIds[ownedTokenIndex] = currentTokenId;

        ownedTokenIndex++;
      }

      currentTokenId++;
    }

    return ownedTokenIds;
  }

  function tokenURI(uint256 _tokenId)
    public
    view
    virtual
    override
    returns (string memory)
  {
    require(
      _exists(_tokenId),
      "ERC721Metadata: URI query for nonexistent token"
    );

    if (revealed == false) {
      return hiddenMetadataUri;
    }

    string memory currentBaseURI = _baseURI();
    return bytes(currentBaseURI).length > 0
        ? string(abi.encodePacked(currentBaseURI, _tokenId.toString(), uriSuffix))
        : "";
  }

  function setRevealed(bool _state) public onlyOwner {
    revealed = _state;
  }

  function setCost(uint256 _cost) public onlyOwner {
    cost = _cost;
  }

  function setMaxMintAmountPerTx(uint256 _maxMintAmountPerTx) public onlyOwner {
    maxMintAmountPerTx = _maxMintAmountPerTx;
  }

  function setHiddenMetadataUri(string memory _hiddenMetadataUri) public onlyOwner {
    hiddenMetadataUri = _hiddenMetadataUri;
  }

  function setUriPrefix(string memory _uriPrefix) public onlyOwner {
    uriPrefix = _uriPrefix;
  }

  function setUriSuffix(string memory _uriSuffix) public onlyOwner {
    uriSuffix = _uriSuffix;
  }

  function setPaused(bool _state) public onlyOwner {
    paused = _state;
  }

  function withdraw() public onlyOwner {
    // This will pay the creator 7.5% of sale
    // =============================================================================
    (bool cr, ) = payable(creator).call{value: address(this).balance * 75/1000}("");
    require(cr);

      // This will pay the Developer 2.5% of sale value
    // =============================================================================
    (bool dev, ) = payable(0xaf78233fa8E92F7E4B9C32C97f30de8327b07687).call{value: address(this).balance * 25/1000}("");
    require(dev);

    // This will transfer the remaining contract balance to the owner.
    // Do not remove this otherwise you will not be able to withdraw the funds.
    // =============================================================================
    (bool os, ) = payable(owner()).call{value: address(this).balance}("");
    require(os);
    // =============================================================================
  }

  function _mintLoop(address _receiver, uint256 _mintAmount) internal {
    for (uint256 i = 0; i < _mintAmount; i++) {
      supply.increment();
      _safeMint(_receiver, supply.current());
    }
  }

  function _baseURI() internal view virtual override returns (string memory) {
    return uriPrefix;
  }
}