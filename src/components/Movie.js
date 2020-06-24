import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './Movie.css';

const Movie = ({ year, title, summary, poster, genres }) => (
  <div className="movie">
    <Link to={{
      pathname: '/detail',
      state: { year, title, summary, poster, genres }
    }}>
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
    </Link>
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