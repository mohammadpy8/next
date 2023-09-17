const UserDetail = ({ user }) => {
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
    </div>
  );
};

export default UserDetail;

///get number of page and paths

export async function getStaticPaths() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users`);
  const data = await res.json();
  const paths = data.map((user) => ({
    params: {
      userId: user.id.toString(),
    }
  }));
  return {
    paths,
    fallback: false,
  };
};

////get information of click on this page

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
