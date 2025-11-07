import React from 'react';

function ErrorDisplay({ error, onRetry }) {
  return (
    <div className="error-container">
      <div className="error-box">
        <h2 className="error-title">⚠️ Error</h2>
        <p className="error-message">{error}</p>
        <button className="btn btn-primary" onClick={onRetry}>
          Retry
        </button>
      </div>
    </div>
  );
}

export default ErrorDisplay;
