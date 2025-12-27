import React from "react";

const Movie = (props) => {
  return (
    <div className="movie-component">
      <div className="movie-poster">
        <img src={props.poster} alt="movie img" />
      </div>
      <div className="movie-info">
        <h3>{props.title}</h3>
        <p>Sala: {props.hall || "Film još uvek nije u ponudi"}</p>
        <p>Cena: {props.price || "300"} €</p>
        <p>
          Likes: {props.likes} | Dislikes: {props.dislikes}
        </p>
      </div>
      <div className="movie-buttons">
        <button onClick={() => props.onLike(props.id)}>👍</button>
        <button onClick={() => props.onDislike(props.id)}>👎</button>
        <button onClick={() => props.onEdit(props)}>Izmeni</button>
        {/* <button>Obrisi</button> */}
      </div>
    </div>
  );
};

export default Movie;
