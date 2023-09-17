const Home = ({ post }) => {
  return (
    <div>
      <h3>mohammad nextjs </h3>
      <ul>
        {post.map((item) => {
          const { id, title } = item;
          return <li key={id}>{title}</li>;
        })}
      </ul>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return {
    props: {
      post: data,
    },
  };
}
