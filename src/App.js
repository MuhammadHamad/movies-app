import { useEffect } from "react";
import "./App.css";
import searchItem from "./search.svg";

const API_URL = "http://www.omdbapi.com/?apikey=50dabb21";

const movie1 = {
  Title: "Italian Spiderman",
  Year: "2007",
  imdbID: "tt2705436",
  Type: "movie",
  Poster:
    "https://m.media-amazon.com/images/M/MV5BZWQxMjcwNjItZjI0ZC00ZTc4LWIwMzItM2Q0YTZhNzI3NzdlXkEyXkFqcGdeQXVyMTA0MTM5NjI2._V1_SX300.jpg",
};

function App() {
  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    console.log(data.Search);
  };

  useEffect(() => {
    searchMovies("Spiderman");
  }, []);

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          type="text"
          placeholder="Search for movies"
          value="Superman"
          onChange={() => {}}
        />
        <img src={searchItem} alt="search" onChange={() => {}} />
      </div>

      <div className="container">
        <div className="movie">
          <div>
            <p>{movie1.Year}</p>
          </div>
          <div>
            <img src={movie1.Poster} alt={movie1.Title} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
