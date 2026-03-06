import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div className="home">

      <div className="home__hero">

        <h1 className="home__title">
          Discover Your Next Favorite Movie
        </h1>

        <p className="home__description">
          Explore thousands of films, discover new favorites, and
          dive into detailed movie information.
        </p>

        <Link to="/search">
          <button className="home__button">
            Search Movies
          </button>
        </Link>

      </div>

    </div>
  )
}

export default Home