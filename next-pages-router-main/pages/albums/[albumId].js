const AlbumDetails = ({ albumDetails }) => {
  const { title } = albumDetails;

  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default AlbumDetails;

export async function getServerSideProps(context) {
  const {
    params: { albumId },
  } = context;

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/albums/${albumId}`
  );
  const data = await response.json();

  if (!data.id) return { notFound: true };
  if (!data.id) return { redirect: { destination: "/albums" } };

  return {
    props: {
      albumDetails: data,
    },
  };
}
