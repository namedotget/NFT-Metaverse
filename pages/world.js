import World from "../components/world/World";

export default function WorldPage(props) {
  const { user } = props;
  return (
    <div className="pgContain">
      <World />
    </div>
  );
}

// export async function getServerSideProps(context) {
//   const user = await getUser(context.req);
//   if (!user) {
//     return {
//       redirect: {
//         destination: "/",
//         permanent: false,
//       },
//     };
//   }
//   return {
//     props: {
//       user,
//     },
//   };
// }
