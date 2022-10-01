import "../styles/globals.scss";
import Login from "../components/login/Login";
function MyApp({ Component, pageProps }) {
  return (
    <Login>
      <Component {...pageProps} />
    </Login>
  );
}

export default MyApp;
