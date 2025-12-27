import React from "react";
import Movie from "./Movie";
import { useState, useEffect } from "react";
import {
  getAllMovies,
  likeMovie,
  dislikeMovie,
} from "../services/movieService";
import { useNavigate } from "react-router-dom";
import { FadeLoader } from "react-spinners";

const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [sortedMovies, setSortedMovies] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();
  const now = new Date();
  const date = now.toLocaleDateString().replace(/\//g, ".");

  async function loadMovies() {
    try {
      setLoading(true);
      //await new Promise((resolve) => setTimeout(resolve, 2000)); Test za spinner

      const data = await getAllMovies();
      setMovies(data);
    } catch (error) {
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  }

  async function handleLike(id) {
    console.log(`Dopada vam se film koji ima ID: ${id}.`);
    // await likeMovie(id);
    // loadMovies();
  }

  async function handleDislike(id) {
    console.log(`Ne dopada vam se film koji ima ID: ${id}.`);
    // await dislikeMovie(id);
    // loadMovies();
  }

  useEffect(() => {
    loadMovies();

    return () => {
      console.log("Sklanjanje filmova");
    };
  }, []);

  const openEditPage = (movie) => {
    navigate(`/movies/${movie.id}/update`);
  };

  useEffect(() => {
    const sorted = [...movies].sort(
      (a, b) => b.likes - b.dislikes - (a.likes - a.dislikes)
    );

    setSortedMovies(sorted);
  }, [movies]);

  if (loading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "60vh",
        }}
      >
        <FadeLoader color="#67e4ff" height={15} radius={2} />
      </div>
    );
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Repertoar za danas ({date})</h1>
      {sortedMovies.length !== 0 ? (
        <div className="display-movie">
          {sortedMovies.map((m) => (
            <Movie
              key={m.id}
              id={m.id}
              title={m.name}
              hall={m.hall}
              price={m.price}
              poster={m.poster}
              onLike={handleLike}
              onDislike={handleDislike}
              likes={m.likes}
              dislikes={m.dislikes}
              onEdit={openEditPage}
            />
          ))}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "60vh",
          }}
        >
          <p>Trenutno nema filmova za prikazivanje.</p>
        </div>
      )}
    </div>
  );
};

export default Movies;
