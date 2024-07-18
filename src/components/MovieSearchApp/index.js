import { useState } from "react";
import SearchBar from "../SearchBar";
import MovieCard from "../MovieCard";
import { fetchMovies } from "../api";
import "./index.css";

const MovieSearchApp = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (query) => {
    setLoading(true);
    const moviesData = await fetchMovies(query);
    setMovies(moviesData);
    setLoading(false);
  };

  return (
    <div className="movieSearchApp">
      <SearchBar onSearch={handleSearch} />
      {loading ? (
        <div className="loader">Loading...</div>
      ) : (
        <div className="movieCards">
          {movies.map((movie) => (
            <MovieCard key={movie.key} movie={movie} />
          ))}
        </div>
      )}
    </div>
  );
};

export default MovieSearchApp;
