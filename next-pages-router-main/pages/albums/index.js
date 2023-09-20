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

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/albums");
  const data = await res.json();

  console.log(data);
  return {
    props: {
      albums: data,
    },
  };
}
