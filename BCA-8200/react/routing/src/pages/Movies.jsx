import React, { useState } from "react";


const Movies = () => {
  const API_KEY = "46ae5993";
  const [title, setTitle] = useState("Yeh Jawaani Hai Deewani");
  const [data, setData] = useState(null);

  const fetchMovies = async () => {
    if (!title.trim()) return;

    const res = await fetch(
      `http://www.omdbapi.com/?t=${title}&apikey=${API_KEY}`
    );
    const movieData = await res.json();

    if (movieData.Response === "True") {
      setData(movieData);
    } else {
      setData(null);
      alert("Movie not found!");
    }
  };

  return (
    <div className="container mt-4">
      <h1 className="text-center mb-4">Movie Search</h1>

      {/* Search Box */}
      <div className="input-group mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Enter movie title..."
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <button className="btn btn-primary" onClick={fetchMovies}>
          Search
        </button>
      </div>




      {/* Movie Details */}
      {data && (
        <div className="card shadow-lg">
          <div className="row g-0">
            {/* Poster */}
            <div className="col-md-4">
              <img
                src={data.Poster}
                alt={data.Title}
                className="img-fluid rounded-start"
              />
            </div>

            {/* Movie Info */}
            <div className="col-md-8">
              <div className="card-body">
                <h3 className="card-title">{data.Title}</h3>
                <p className="card-text">
                  <strong>Year:</strong> {data.Year}
                </p>
                <p className="card-text">
                  <strong>Genre:</strong> {data.Genre}
                </p>
                <p className="card-text">
                  <strong>Director:</strong> {data.Director}
                </p>
                <p className="card-text">
                  <strong>Writer:</strong> {data.Writer}
                </p>
                <p className="card-text">
                  <strong>Actors:</strong> {data.Actors}
                </p>
                <p className="card-text">
                  <strong>Plot:</strong> {data.Plot}
                </p>
                <p className="card-text">
                  <strong>Language:</strong> {data.Language}
                </p>
                <p className="card-text">
                  <strong>Country:</strong> {data.Country}
                </p>
                <p className="card-text">
                  <strong>Awards:</strong> {data.Awards}
                </p>
                <p className="card-text">
                  <strong>IMDb Rating:</strong> {data.imdbRating} ⭐
                </p>
                <p className="card-text">
                  <strong>Box Office:</strong> {data.BoxOffice}
                </p>

                {/* Ratings */}
                {data.Ratings && data.Ratings.length > 0 && (
                  <div>
                    <strong>Ratings:</strong>
                    <ul>
                      {data.Ratings.map((rating, index) => (
                        <li key={index}>
                          {rating.Source}: {rating.Value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Movies;
