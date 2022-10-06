import { ThirdwebAuth } from "@thirdweb-dev/auth/next";
// const secret = JSON.parse(
//   require("child_process").execSync("node doppler_secrets.js")
// )["ADMIN_PRIVATE_KEY"];

export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: process.env.ADMIN_PRIVATE_KEY,
  domain: "https://localhost:3000",
});