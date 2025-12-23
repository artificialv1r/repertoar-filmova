import React from "react";

const Movie = (props) => {
  return (
    <div
      style={{
        display: "flex",
        paddingLeft: "20px",
        alignItems: "flex-start",
        gap: "15px",
      }}
    >
      <div style={{ width: "100px", paddingBottom: "20px" }}>
        <img
          src={props.poster}
          alt="movie img"
          style={{ width: "100%", borderRadius: "6px" }}
        />
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button onClick={() => props.onLike(props.title)}>Like</button>
          <button onClick={() => props.onDislike(props.title)}>Dislike</button>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "flex-start",
        }}
      >
        <p style={{ fontSize: "20px" }}>
          {props.title}, sala: {props.hall || "Film još uvek nije u ponudi"},
          cena: {props.price || "300"}din
        </p>
        <p>
          Likes: {props.likes} | Dislikes: {props.dislikes}
        </p>
        <button onClick={() => props.onEdit(props)}>Izmeni</button>
      </div>
    </div>
  );
};

export default Movie;
