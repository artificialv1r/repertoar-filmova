import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieById, updateMovie } from "../services/movieService";

function MovieEditForm() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState(null);

  async function loadMovie() {
    const data = await getMovieById(id);
    setMovie(data);
  }
  useEffect(() => {
    loadMovie();
  }, [id]);

  const { register, handleSubmit, formState, reset } = useForm();

  useEffect(() => {
    if (movie) {
      reset(movie);
    }
  }, [movie, reset]);

  async function handleUpdate(updatedMovie) {
    console.log(updatedMovie);
    await updateMovie(id, updatedMovie);
    navigate("/movies");
  }

  if (!movie) {
    return <>Ucitavanje...</>;
  }

  return (
    <section className="movie-edit-section">
      <form onSubmit={handleSubmit(handleUpdate)}>
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

        <label>
          Poster:
          <input
            type="text"
            {...register("poster", { required: "Poster URL je obavezan." })}
          />
        </label>

        <div className="btn">
          <button type="submit">Sačuvaj izmene</button>
        </div>
      </form>
    </section>
  );
}

export default MovieEditForm;
