import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import CollectionInfo from './components/CollectionInfo';
import MovieList from './components/MovieList';
import LoadingSpinner from './components/LoadingSpinner';
import ErrorDisplay from './components/ErrorDisplay';

const API_KEY = '630df3c1d1f3245c7f0ba84b3b475521';
const BASE_URL = 'https://api.themoviedb.org/3';

function App() {
  const [collectionId, setCollectionId] = useState(10); // Star Wars by default
  const [movies, setMovies] = useState([]);
  const [collectionInfo, setCollectionInfo] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch collection data
  useEffect(() => {
    const fetchCollection = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await fetch(
          `${BASE_URL}/collection/${collectionId}?api_key=${API_KEY}`
        );
        
        if (!response.ok) {
          throw new Error('Collection not found. Please check the ID.');
        }
        
        const data = await response.json();
        setCollectionInfo({
          id: data.id,
          name: data.name,
          overview: data.overview,
          posterPath: data.poster_path,
          backdropPath: data.backdrop_path
        });
        setMovies(data.parts || []);
      } catch (err) {
        setError(err.message);
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    if (collectionId) {
      fetchCollection();
    }
  }, [collectionId]);

  const handleCollectionSelect = (id) => {
    setCollectionId(id);
    setSelectedMovie(null);
  };

  const handleRetry = () => {
    setCollectionId(collectionId);
  };

  return (
    <div className="app">
      <Header onCollectionSelect={handleCollectionSelect} />
      
      {error && (
        <ErrorDisplay 
          error={error} 
          onRetry={handleRetry}
        />
      )}
      
      {loading ? (
        <LoadingSpinner />
      ) : (
        <>
          {collectionInfo && !error && (
            <CollectionInfo 
              collection={collectionInfo}
              movieCount={movies.length}
            />
          )}
          
          {movies.length > 0 && !error && (
            <MovieList 
              movies={movies}
              onMovieClick={setSelectedMovie}
              selectedMovie={selectedMovie}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
