const tokenAddress = "0x514910771af9ca656af840dff83e8264ecf986ca";
const tokenSymbol = "LINK";
const tokenDecimals = 18;
const tokenImage = "";
export async function addEnergy() {
  try {
    await web3.currentProvider.request({
      method: "wallet_watchAsset",
      params: {
        type: "ERC20",
        options: {
          address: tokenAddress,
          symbol: tokenSymbol,
          decimals: tokenDecimals,
          // image: tokenImage, // if you have the image, it goes here
        },
      },
    });
  } catch (error) {
    // handle errors
  }
}
