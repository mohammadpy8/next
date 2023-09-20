const TodoDetails = ({ todoDetails }) => {
  const { title, completed } = todoDetails;

  return (
    <div>{completed ? <h2>{title} : True</h2> : <h2>{title} : False</h2>}</div>
  );
};

export default TodoDetails;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();

  const paths = data.map((path) => ({
    params: {
      todoId: path.id.toString(),
    },
  }));

  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const {
    params: { todoId },
  } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`
  );
  const data = await res.json();

  if (!data.id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      todoDetails: data,
    },
  };
}
