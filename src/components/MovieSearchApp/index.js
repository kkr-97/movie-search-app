import { useState } from "react";
import SearchBar from "../SearchBar";
import MovieCard from "../MovieCard";
import { fetchMovies } from "../api";
import "./index.css";

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSearch = async (query) => {
    setLoading(true);
    const moviesData = await fetchMovies(query);
    if (moviesData.length > 0) {
      setMovies(moviesData);
    } else {
      setError("No movies found");
    }
    setLoading(false);
  };

  return (
    <div className="movieSearchApp">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : movies.length > 0 ? (
        <div className="movieCards">
          {movies.map((movie) => (
            <MovieCard key={movie.key} movie={movie} />
          ))}
        </div>
      ) : (
        <div className="movieCards">{error}</div>
      )}
    </div>
  );
};

export default MovieSearchApp;
