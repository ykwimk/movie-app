import React from 'react';
import PropTypes from 'prop-types';
import './Movie.css';

const Movie = ({ id, year, title, summary, poster, genres }) => (
  <div className="movie">
    <div className="image">
      <img src={poster} />
    </div>
    <div className="text">
      <h3>{title}</h3>
      <h5>{year}</h5>
      <ul className="genres">
        {genres && genres.map((genre, idx) => <li key={idx}>{genre}</li>)}
      </ul>
      <p>{`${summary.slice(0, 180)}...`}</p>
    </div>
  </div>
)

Movie.prototype = {
  id: PropTypes.number,
  year: PropTypes.number,
  title: PropTypes.string,
  summary: PropTypes.string,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.string),
}

export default Movie;