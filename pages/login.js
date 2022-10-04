import Login from "../components/login/Login";
import { useLogin, useMetamask } from "@thirdweb-dev/react";
export default function LoginPage() {
  const login = useLogin();
  const connect = useMetamask();
  return (
    <div className="pgContain">
      <button onClick={connect}>connect wallet</button>
      <button onClick={login}>login</button>
    </div>
  );
}
