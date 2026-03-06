import { useState } from "react";
import { searchMovies } from "../data/api";
import { Link } from "react-router-dom";

const Search = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [sortOption, setSortOption] = useState("");
  const clearSearch = () => {
  setQuery("");
  setMovies([]);
};

  const handleSearch = async (e) => {
    e.preventDefault();

    if (!query.trim()) return;

    const results = await searchMovies(query);
    setMovies(results);
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
    <button
    type="button"
    className="clear-button"
    onClick={clearSearch}
  >
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
