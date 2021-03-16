import PropTypes from 'prop-types';
import React from 'react';
import { MovieCard } from '../MovieCard';
import './MoviesList.scss';

export const MoviesList = ({
  movies,
}) => (
  <div className="movies">
    {movies.map(movie => (
      <div className="card" key={movie.imdbId}>
        <MovieCard {...movie} />
      </div>
    ))}
  </div>
);

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  ),
};

MoviesList.defaultProps = {
  movies: [],
};