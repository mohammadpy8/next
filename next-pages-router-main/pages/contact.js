import { useState } from "react";

const Contact = ({ users }) => {
  const [data, setData] = useState(users);

  const updateHandler = async (id) => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/albums/${id}`
    );
    const data = await response.json();
    setData(data);
  };

  return (
    <div>
      <h1>{users.title}</h1>
      <h3>{users.id}</h3>
      <button onClick={() => updateHandler(users.id)}></button>
    </div>
  );
};

export default Contact;

export async function getServerSideProps(context) {
  const { params } = context;
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${params.userId}`
  );
  const data = await response.json();

  return {
    props: {
      users: data,
    },
  };
}
