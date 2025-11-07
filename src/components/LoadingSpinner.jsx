import React from 'react';

function LoadingSpinner() {
  return (
    <div className="loading-container">
      <div className="spinner"></div>
      <p className="loading-text">Loading movies...</p>
    </div>
  );
}

export default LoadingSpinner;
