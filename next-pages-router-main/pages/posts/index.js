import Link from "next/link";

const Posts = ({ posts }) => {
  return (
    <div>
      <ul>
        {posts.map((post) => {
          const { id, title } = post;
          return (
            <li key={id}>
              <Link href={`posts/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  console.log("regenerate posts...");

  return {
    props: {
      posts: data,
    },
    revalidate: 10,
    notFound: true,
  };
}

export default Posts;
