import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import { getMovie } from "../data/api";
import { Link } from "react-router-dom";

const Movie = () => {
  const { id } = useParams();
  const location = useLocation();
  const previousQuery = location.state?.query || "";
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const data = await getMovie(id);
      setMovie(data);
    };

    fetchMovie();
  }, [id]);

  <Link to="/search" className="back-button">
    ← Back to Search
  </Link>;

  if (!movie) {
    return <div className="movie-page">Loading...</div>;
  }

  return (
    <div className="movie-page">
      <div className="movie-container">
        <img src={movie.Poster} alt={movie.Title} className="movie-poster" />

        <div className="movie-info">
          <h1>{movie.Title}</h1>

          <p>
            <strong>Year:</strong> {movie.Year}
          </p>

          <p>
            <strong>Director:</strong> {movie.Director}
          </p>

          <p>
            <strong>Actors:</strong> {movie.Actors}
          </p>

          <p>
            <strong>IMDb Rating:</strong> {movie.imdbRating}
          </p>

          <p className="movie-plot">{movie.Plot}</p>
          <Link
            to="/search"
            state={{ query: previousQuery }}
            className="return-button"
          >
            Return to Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Movie;
