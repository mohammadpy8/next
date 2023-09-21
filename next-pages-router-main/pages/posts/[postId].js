const PostDetail = ({ PostDetail }) => {
  return (
    <div>
      <h1>{PostDetail.title}</h1>
    </div>
  );
};

export default PostDetail;

export async function getStaticPaths() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  const paths = data.map((path) => ({
    params: {
      postId: path.id.toString(),
    },
  }));
  return {
    paths,
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const {
    params: { postId },
  } = context;

  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await res.json();

  //////////Not Found Page/////////////

  if (!data.id) return { notFound: true };

  /////////Redirects Page///////////
  if (!data.userId)
    return {
      redirect: {
        destination: "/posts",
      },
    };

  return {
    props: {
      PostDetail: data,
    },
    revalidate: 20,
  };
}
