import React from "react";
import Movie from "./components/Movie";

const App = () => {
  const movies = [
    {
      title: "Captain America - The First Avenger",
      hall: 2,
      price: 350,
    },
    {
      title: "The Papillon",
      hall: 1,
      price: 300,
    },
    {
      title: "The Lost City of Z",
      hall: 5,
      price: 350,
    },
  ];

  const now = new Date();
  const date = now.toLocaleDateString().replace(/\//g, ".");

  return (
    <div>
      <h1>Repertoar za danas ({date})</h1>
      {movies.map((m, index) => (
        <Movie key={index} title={m.title} hall={m.hall} price={m.price} />
      ))}
    </div>
  );
};

export default App;
