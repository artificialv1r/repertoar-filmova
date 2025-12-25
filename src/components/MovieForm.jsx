import React from "react";
import { useForm } from "react-hook-form";

function MovieForm({ onAddMovie }) {
  const { register, handleSubmit, formState, reset } = useForm();

  const onSubmit = (data) => {
    onAddMovie({
      ...data,
      likes: Math.floor(Math.random() * 5) + 1,
      dislikes: Math.floor(Math.random() * 5) + 1,
    });
    reset();
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      style={{ display: "flex", flexDirection: "column", gap: "5px" }}
    >
      <label style={labelStyle}>
        Naslov:
        <input
          type="text"
          {...register("title", { required: "Naslov je obavezan." })}
        />
      </label>
      {formState.errors.title && (
        <p style={{ color: "red" }}>{formState.errors.title.message}</p>
      )}
      <br />

      <label style={labelStyle}>
        Sala:
        <select
          {...register("hall", {
            required: "Sala je obavezna",
            min: { value: 1, message: "Sala mora biti između 1 i 12" },
            max: { value: 12, message: "Sala mora biti između 1 i 12" },
          })}
        >
          <option value="">-- Izaberi --</option>
          <option value="1">Sala 1</option>
          <option value="2">Sala 2</option>
          <option value="3">Sala 3</option>
          <option value="4">Sala 4</option>
          <option value="5">Sala 5</option>
        </select>
      </label>
      {formState.errors.hall && (
        <p style={{ color: "red" }}>{formState.errors.hall.message}</p>
      )}
      <br />

      <label style={labelStyle}>
        Cena:
        <input
          type="number"
          {...register("price", {
            required: "Cena je obavezna",
            min: { value: 1, message: "Cena mora biti veća od 0" },
          })}
        />
      </label>
      {formState.errors.price && (
        <p style={{ color: "red" }}>{formState.errors.price.message}</p>
      )}
      <br />

      <label style={labelStyle}>
        Poster:
        <input
          type="text"
          {...register("poster", { required: "Poster URL je obavezan." })}
        />
      </label>
      {formState.errors.poster && (
        <p style={{ color: "red" }}>{formState.errors.poster.message}</p>
      )}
      <br />

      <button
        type="submit"
        style={{
          width: "fit-content",
          marginBottom: "5px",
          padding: "10px 15px",
          cursor: "pointer",
          background: "#3DB6B1",
          color: "white",
          borderRadius: "20px",
          border: "none",
          fontWeight: "bold",
        }}
      >
        Sačuvaj
      </button>
    </form>
  );
}

export default MovieForm;
