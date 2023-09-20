import Link from "next/link";

const Todos = ({ todos }) => {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          const { id, completed, title } = todo;
          return (
            <li key={id}>
              <Link href={`todos/${id}`}>{completed && title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Todos;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  console.log(data);

  return {
    props: {
      todos: data,
    },
  };
}
