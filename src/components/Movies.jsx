import React from "react";
import Movie from "./Movie";
import MovieForm from "./MovieForm";
import MovieEditForm from "./MovieEditForm";
import { useState } from "react";

const Movies = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [movieToEdit, setMovieToEdit] = useState(null);

  const [movies, setMovies] = useState([
    {
      title: "Captain America - The First Avenger",
      hall: 2,
      price: 350,
      poster:
        "https://m.media-amazon.com/images/I/51Xp+8qDCbL._AC_UF350,350_QL50_.jpg",
      likes: 0,
      dislikes: 0,
    },
    {
      title: "The Papillon",
      hall: 1,
      price: 300,
      poster:
        "https://m.media-amazon.com/images/M/MV5BMjIxMTMyOTE2NF5BMl5BanBnXkFtZTgwMDYyNzY1NTM@._V1_.jpg",
      likes: 0,
      dislikes: 0,
    },
    {
      title: "The Lost City of Z",
      hall: 5,
      price: 350,
      poster:
        "https://m.media-amazon.com/images/M/MV5BZmU2ODIyMWItMjU3Zi00ZmVhLWIyNDAtMWE5OWU2ZDExMGFiXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      likes: 0,
      dislikes: 0,
    },
    {
      title: "Klaus",
      hall: 3,
      poster: "https://m.media-amazon.com/images/I/7128yjOjl9L.jpg",
      likes: 0,
      dislikes: 0,
    },
    {
      title: "Bullet Train",
      poster:
        "https://m.media-amazon.com/images/I/71INz6LX8aL._AC_UF894,1000_QL80_.jpg",
      likes: 0,
      dislikes: 0,
    },
  ]);

  const addMovie = (newMovie) => {
    setMovies((prev) => [...prev, newMovie]);
  };
  const now = new Date();
  const date = now.toLocaleDateString().replace(/\//g, ".");

  const likeMovie = (title) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.title === title ? { ...movie, likes: movie.likes + 1 } : movie
      )
    );
  };

  const dislikeMovie = (title) => {
    setMovies((prev) =>
      prev.map((movie) =>
        movie.title === title
          ? { ...movie, dislikes: movie.dislikes + 1 }
          : movie
      )
    );
  };

  const updateMovie = (updatedMovie) => {
    setMovies((prev) =>
      prev.map((m) => (m.title === movieToEdit.title ? updatedMovie : m))
    );
  };

  const openEditModal = (movie) => {
    setMovieToEdit(movie);
    setIsEditModalOpen(true);
  };

  const modalOverlay = {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100vw",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    zIndex: 1000,
  };

  const modalContent = {
    backgroundColor: "#fff",
    padding: "20px",
    borderRadius: "8px",
    width: "400px",
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Repertoar za danas ({date})</h1>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          padding: "20px",
          gap: "20px",
        }}
      >
        {movies.map((m, index) => (
          <Movie
            key={index}
            title={m.title}
            hall={m.hall}
            price={m.price}
            poster={m.poster}
            onLike={likeMovie}
            onDislike={dislikeMovie}
            likes={m.likes}
            dislikes={m.dislikes}
            onEdit={openEditModal}
          />
        ))}
      </div>
      <div style={{ textAlign: "center", margin: "20px 0" }}>
        <button onClick={() => setIsModalOpen(true)}>+ Dodaj novi film</button>
      </div>

      {isModalOpen && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Dodaj novi film</h2>
              <button
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  fontWeight: "bold",
                  fontSize: "18px",
                  background: "transparent",
                  border: "none",
                  color: "#FF5555",
                  cursor: "pointer",
                }}
                onClick={() => setIsModalOpen(false)}
              >
                X
              </button>
            </div>
            <div>
              <MovieForm
                onAddMovie={(movie) => {
                  addMovie(movie);
                  setIsModalOpen(false);
                }}
              />
            </div>
          </div>
        </div>
      )}

      {isEditModalOpen && (
        <div style={modalOverlay}>
          <div style={modalContent}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <h2>Izmeni film</h2>
              <button
                style={{
                  width: "fit-content",
                  height: "fit-content",
                  fontWeight: "bold",
                  fontSize: "18px",
                  background: "transparent",
                  border: "none",
                  color: "#FF5555",
                  cursor: "pointer",
                }}
                onClick={() => setIsEditModalOpen(false)}
              >
                X
              </button>
            </div>

            <MovieEditForm
              movie={movieToEdit}
              onUpdateMovie={updateMovie}
              onClose={() => setIsEditModalOpen(false)}
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
