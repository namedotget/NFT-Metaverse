import { getUser } from "../auth.config";
import Profile from "../components/profile/Profile";

export default function ProfilePage(props) {
  const { user } = props;
  return (
    <div className="pgContain">
      <div className="main">
        <Profile user={user} />
      </div>
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
