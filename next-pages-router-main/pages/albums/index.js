import Link from "next/link";

const Albums = ({ albums }) => {
  console.log(albums);

  return (
    <div>
      <h1>Albulms</h1>
      <ul>
        {albums.map((album) => {
          const { id, title } = album;
          return (
            <li key={id}>
              <Link href={`/albums/${id}`}>{title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Albums;

export async function getServerSideProps(context) {

  const { params, res, req, query } = context;

  console.log(query);

  const response = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await response.json();

  return {
    props: {
      albums: data,
    },
  };
}
