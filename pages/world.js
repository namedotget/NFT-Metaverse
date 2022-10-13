import World from "../components/world/World";
import { getUser } from "../auth.config";
export default function WorldPage(props) {
  const { user } = props;
  return (
    <div className="pgContain">
      <World user={user} />
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
