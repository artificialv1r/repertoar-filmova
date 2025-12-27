import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { createMovie } from "../services/movieService";

function MovieForm() {
  const { register, handleSubmit, formState, reset } = useForm();
  const navigate = useNavigate();

  async function handleCreate(newMovie) {
    await createMovie(newMovie);
    navigate("/movies");
  }

  return (
    <section className="movie-edit-section">
      <form onSubmit={handleSubmit(handleCreate)} id="movie-form">
        <label>
          Naslov:
          <input
            type="text"
            {...register("name", {
              required: "Naslov je obavezan.",
              minLength: {
                value: 3,
                message: "Naslov mora da sadrži najmanje 3 karaktera.",
              },
            })}
          />
        </label>
        {formState.errors.name && <p>{formState.errors.name.message}</p>}

        <label>
          Sala:
          <select
            {...register("hall", {
              required: "Sala je obavezna",
              min: { value: 1, message: "Sala mora biti između 1 i 12" },
              max: { value: 12, message: "Sala mora biti između 1 i 12" },
              valueAsNumber: true,
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
        {formState.errors.hall && <p>{formState.errors.hall.message}</p>}

        <label>
          Cena:
          <input
            type="number"
            step="any"
            {...register("price", {
              required: "Cena je obavezna",
              min: { value: 1, message: "Cena mora biti veća od 0" },
              valueAsNumber: true,
            })}
          />
        </label>
        {formState.errors.price && <p>{formState.errors.price.message}</p>}

        <label>
          Poster:
          <input
            type="text"
            {...register("poster", { required: "Poster URL je obavezan." })}
          />
        </label>
        {formState.errors.poster && <p>{formState.errors.poster.message}</p>}

        <div className="btn">
          <button type="submit">Sačuvaj</button>
        </div>
      </form>
    </section>
  );
}

export default MovieForm;
