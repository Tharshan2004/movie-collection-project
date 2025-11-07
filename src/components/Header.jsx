import React, { useState } from 'react';
const POPULAR_COLLECTIONS = [
  { id: 10, name: 'Star Wars Collection' },
  { id: 86311, name: 'The Avengers Collection' },
  { id: 263, name: 'The Dark Knight Collection' },
  { id: 9485, name: 'The Fast and the Furious Collection' },
  { id: 645, name: 'James Bond Collection' }
];

function Header({ onCollectionSelect }) {
  const [customId, setCustomId] = useState('');

  const handleSelect = (e) => {
    const id = parseInt(e.target.value);
    if (id) {
      onCollectionSelect(id);
      setCustomId('');
    }
  };

  const handleSearch = () => {
    const id = parseInt(customId);
    if (id && id > 0) {
      onCollectionSelect(id);
    } else {
      alert('Please enter a valid collection ID');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="header-title">🎬 Movie Collection Viewer</h1>
        
        <div className="controls-section">
          <div className="control-group">
            <label htmlFor="collection-select" className="label">
              Select Collection
            </label>
            <select 
              id="collection-select" 
              className="select"
              onChange={handleSelect}
            >
              <option value="">Choose a collection...</option>
              {POPULAR_COLLECTIONS.map(col => (
                <option key={col.id} value={col.id}>
                  {col.name}
                </option>
              ))}
            </select>
          </div>

          <div className="control-group">
            <label htmlFor="custom-id" className="label">
              Or Enter Custom Collection ID
            </label>
            <div className="search-container">
              <input
                type="number"
                id="custom-id"
                className="input"
                placeholder="e.g., 10"
                value={customId}
                onChange={(e) => setCustomId(e.target.value)}
                onKeyPress={handleKeyPress}
                min="1"
              />
              <button 
                className="btn btn-primary"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
