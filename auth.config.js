import { ThirdwebAuth } from "@thirdweb-dev/auth/next";

const secret = JSON.parse(
  require("child_process").execSync("node doppler_secrets.js")
)["ADMIN_PRIVATE_KEY"];
export const { ThirdwebAuthHandler, getUser } = ThirdwebAuth({
  privateKey: secret,
  domain: "https://localhost:3000",
});
