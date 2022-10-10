import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

// //DEV
// const secret = JSON.parse(
//   require("child_process").execSync("node doppler_secrets.js")
// )["ADMIN_PRIVATE_KEY"];
// export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
//   privateKey: secret,
//   domain: "https://localhost:3000",
// });

//PRODUCTION :
export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY,
  domain: "https://nft-verse.netlify.app",
});
