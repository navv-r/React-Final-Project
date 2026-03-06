import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Movie from "./pages/Movie";
import Search from "./pages/Search";

function App() {
  return (
    <Router>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/search" element={<Search />} />

        <Route path="/movie/:id" element={<Movie />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
