import Home from "../components/home/Home";
import { getKey } from "../doppler_secrets";
import { ThirdwebSDK } from "@thirdweb-dev/sdk";
import { checkBalance, getUserInfo, rewardsOwned } from "../web3/thirdweb";
import { getUser } from "../auth.config";
export default function HomePage(props) {
  console.log(props.user, "user");
  return (
    <div className="pgContain">
      <Home />
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = await getUser(context.req);

  if (!user) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
    };
  }

  const secret = JSON.parse(
    require("child_process").execSync("node doppler_secrets.js")
  )["ADMIN_PRIVATE_KEY"];
  // Instantiate our SDK
  const sdk = ThirdwebSDK.fromPrivateKey(secret, "goerli");
  // Finally, return the props
  const rewards = await rewardsOwned(sdk, user.address);
  console.log(rewards);
  return {
    props: {
      user,
    },
  };
}
