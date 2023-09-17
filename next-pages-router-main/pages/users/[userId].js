const UserDetail = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  );
};

export default UserDetail;

export async function getStaticPaths() {
  return {
    paths: [
      { params: { userId: "1" } },
      { params: { userId: "2" } },
      { params: { userId: "3" } },
      { params: { userId: "4" } },
      { params: { userId: "5" } },
      { params: { userId: "6" } },
      { params: { userId: "7" } },
      { params: { userId: "8" } },
      { params: { userId: "9" } },
      { params: { userId: "10" } },
    ],
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { params } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/users/${params.userId}`
  );
  const data = await res.json();

  return {
    props: { user: data },
  };
}
