import World from "../components/world/World";
import { getUser } from "../auth.config";
import { useEffect, useState } from "react";
export default function WorldPage(props) {
  const { user } = props;
  const [userData, setUserData] = useState(null);
  useEffect(() => {
    setUserData(JSON.parse(localStorage.getItem("user")));
  }, []);
  return (
    <div className="pgContain">
      <World user={user} userData={userData} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const user = await getUser(context.req);
  if (!user) {
    return {
      redirect: {
        destination: "/",
        permanent: false,
      },
    };
  }
  return {
    props: {
      user,
    },
  };
}
