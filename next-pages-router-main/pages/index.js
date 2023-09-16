const Home = ({ data }) => {
  console.log(data);

  return (
    <div>
      <h3>mohammad nextjs </h3>
      <h1>{data}</h1>
    </div>
  );
};

export default Home;

export async function getStaticProps() {
  const data = "mohammad";

  return {
    props: {
      data,
    },
  };
}
