import React from 'react';

const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w1280';

function CollectionInfo({ collection, movieCount }) {
  const backdropUrl = collection.backdropPath 
    ? `${IMAGE_BASE_URL}${collection.backdropPath}`
    : 'https://via.placeholder.com/1280x720?text=No+Backdrop';

  return (
    <div className="collection-info">
      <div className="backdrop-container">
        <img 
          src={backdropUrl} 
          alt={collection.name}
          className="backdrop-image"
        />
        <div className="backdrop-overlay"></div>
      </div>
      
      <div className="collection-details">
        <h2 className="collection-name">{collection.name}</h2>
        <p className="collection-overview">{collection.overview}</p>
        <div className="collection-stats">
          <span className="stat">📽️ {movieCount} Movies</span>
        </div>
      </div>
    </div>
  );
}

export default CollectionInfo;
