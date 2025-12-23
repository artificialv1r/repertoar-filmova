import React from "react";
import { useForm } from "react-hook-form";

function MovieEditForm({ movie, onUpdateMovie, onClose }) {
  const { register, handleSubmit, formState, reset } = useForm({
    defaultValues: movie,
  });

  const onSubmit = (data) => {
    onUpdateMovie({
      ...movie,
      ...data,
    });
    reset();
    onClose();
  };

  const labelStyle = {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
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

      <label style={labelStyle}>
        Poster:
        <input
          type="text"
          {...register("poster", { required: "Poster URL je obavezan." })}
        />
      </label>

      <button
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
        type="submit"
      >
        Sačuvaj izmene
      </button>
    </form>
  );
}

export default MovieEditForm;
