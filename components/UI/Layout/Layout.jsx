import MainNav from "./MainNav";
import Login from "../../login/Login";
export default function Layout(props) {
  return (
    <>
      <MainNav />
      {props.children}
    </>
  );
}
