import { useEffect, useState } from "react";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div>
      {data.length ? (
        data.map((item) => <h3 key={item.id}>{item.title}</h3>)
      ) : (
        <h1></h1>
      )}
    </div>
  );
};

export default About;
