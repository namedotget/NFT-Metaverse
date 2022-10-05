import { getUser } from "../auth.config";

export default function ProfilePage() {
  return (
    <div className="pgContain">
      <div className="main">
        <h1>PROFILE</h1>
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
    props: {},
  };
}
