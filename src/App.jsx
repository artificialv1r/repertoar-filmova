import React from "react";
import Movie from "./components/Movie";

const App = () => {
  const movies = [
    {
      title: "Captain America - The First Avenger",
      hall: 2,
      price: 350,
      poster:
        "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg",
    },
    {
      title: "The Papillon",
      hall: 1,
      price: 300,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg",
    },
    {
      title: "The Lost City of Z",
      hall: 5,
      price: 350,
      poster:
        "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    },
    {
      title: "Klaus",
      hall: 3,
      poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg",
    },
    {
      title: "Bullet Train",
      poster:
        "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg",
    },
  ];

  const now = new Date();
  const date = now.toLocaleDateString().replace(/\//g, ".");

  const likeMovie = (title) => {
    alert("Dodelili ste Like za film: " + title);
  };

  const dislikeMovie = (title) => {
    alert("Dodelili ste Dislike za film: " + title);
  };

  return (
    <div>
      <h1>Repertoar za danas ({date})</h1>
      {movies.map((m, index) => (
        <Movie
          key={index}
          title={m.title}
          hall={m.hall}
          price={m.price}
          poster={m.poster}
          onLike={likeMovie}
          onDislike={dislikeMovie}
        />
      ))}
    </div>
  );
};

export default App;
