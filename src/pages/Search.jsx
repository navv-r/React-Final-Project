import { useState, useEffect } from "react";
import { searchMovies } from "../data/api";
import { Link, useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();

  const [query, setQuery] = useState(location.state?.query || "");
  const [movies, setMovies] = useState([]);
useEffect(() => {
  if (query) {
    handleSearch();
  }
}, [query, handleSearch]);
  const [sortOption, setSortOption] = useState("");

  const handleSearch = async (e) => {
  if (e) e.preventDefault()

  if (!query) return

  const results = await searchMovies(query)
  setMovies(results)
};

  const clearSearch = () => {
    setQuery("");
    setMovies([]);
  };

  const sortedMovies = [...movies].sort((a, b) => {
    if (sortOption === "year-desc") return b.Year - a.Year;
    if (sortOption === "year-asc") return a.Year - b.Year;

    if (sortOption === "title-asc") return a.Title.localeCompare(b.Title);

    if (sortOption === "title-desc") return b.Title.localeCompare(a.Title);

    return 0;
  });

  return (
    <div className="search-page">
      <h1>Search Movies</h1>

      <form className="search-form" onSubmit={handleSearch}>
        <div className="search-center">
          <input
            type="text"
            placeholder="Search for a movie..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />

          <button type="submit">Search</button>
          <button type="button" className="clear-button" onClick={clearSearch}>
            Clear Search
          </button>
        </div>

        <select
          className="sort-dropdown"
          value={sortOption}
          onChange={(e) => setSortOption(e.target.value)}
        >
          <option value="">Sort By</option>
          <option value="year-desc">Release Date (Newest)</option>
          <option value="year-asc">Release Date (Oldest)</option>
          <option value="title-asc">Title (A-Z)</option>
          <option value="title-desc">Title (Z-A)</option>
        </select>
      </form>

      <div className="movies-grid">
        {sortedMovies.map((movie) => (
          <Link
            key={movie.imdbID}
            to={`/movie/${movie.imdbID}`}
            state={{ query }}
            className="movie-card"
          >
            <img src={movie.Poster} alt={movie.Title} />

            <h3>{movie.Title}</h3>

            <p>{movie.Year}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Search;
