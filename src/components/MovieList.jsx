import React from 'react';
import MovieCard from './MovieCard';

function MovieList({ movies, onMovieClick, selectedMovie }) {
  return (
    <div className="movie-list-container">
      <div className="movie-recyclerview">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onClick={() => onMovieClick(movie)}
            isSelected={selectedMovie?.id === movie.id}
          />
        ))}
      </div>
    </div>
  );
}

export default MovieList;
