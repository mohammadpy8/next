import { useEffect, useState } from "react";
import useSWR from "swr";

const About = () => {
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/albums")
//       .then((res) => res.json())
//       .then((data) => setData(data));
//   }, []);

  const { data, error } = useSWR(
    "https://jsonplaceholder.typicode.com/albums",
    (url) => fetch(url).then((res) => res.json())
    );
    
    console.log(data, error);

  return (
    <div>
      {data ? (
        data.map((item) => <h3 key={item.id}>{item.title}</h3>)
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default About;
