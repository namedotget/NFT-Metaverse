import MainNav from "./MainNav";
import { useUser } from "@thirdweb-dev/react";

export default function Layout(props) {
  const { user } = useUser();
  if (!user) {
    return (
      <>
        <MainNav />
        {props.children}
      </>
    );
  }
  if (
    props.children.type.name === "WorldPage" ||
    props.children.type.name === "J"
  ) {
    return (
      <div className="UI">
        <MainNav loggedIn world user={user} /> {props.children}
      </div>
    );
  }
  return (
    <>
      <MainNav loggedIn user={user} />
      {props.children}
    </>
  );
}
