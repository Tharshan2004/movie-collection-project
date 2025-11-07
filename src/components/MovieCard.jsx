import React, { useState } from 'react';


const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w500';

function MovieCard({ movie, onClick, isSelected }) {
  const [showDetails, setShowDetails] = useState(isSelected);

  const handleClick = () => {
    setShowDetails(!showDetails);
    onClick();
  };

  const posterUrl = movie.poster_path
    ? `${IMAGE_BASE_URL}${movie.poster_path}`
    : 'https://via.placeholder.com/300x450?text=No+Poster';

  const releaseDate = movie.release_date ? movie.release_date.split('-')[0] : 'N/A';
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A';

  return (
    <div 
      className={`movie-card ${showDetails ? 'expanded' : ''}`}
      onClick={handleClick}
    >
      <div className="card-image-container">
        <img 
          src={posterUrl}
          alt={movie.title}
          className="card-image"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/300x450?text=No+Poster';
          }}
        />
        <div className="rating-badge">⭐ {rating}</div>
      </div>

      <div className="card-content">
        <h3 className="card-title">{movie.title}</h3>
        <p className="card-year">{releaseDate}</p>
        
        {showDetails && (
          <div className="card-details">
            <p className="card-overview">{movie.overview}</p>
            <div className="card-meta">
              <span className="meta-item">👁️ {Math.round(movie.popularity)}</span>
              <span className="meta-item">🗳️ {movie.vote_count} votes</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default MovieCard;
