import Link from "next/link";

const Users = ({ users }) => {
  return (
    <div>
      <ul>
        {users.map((user) => {
          const { id, name } = user;
          return (
            <li key={id}>
              <Link href={`/users/${id}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Users;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  return {
    props: {
      users: data,
    },
  };
}
