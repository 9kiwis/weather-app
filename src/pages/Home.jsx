import React, { useState } from 'react';
import useFetchWeather from '../hooks/useFetchWeather';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Home() {
  const [city, setCity] = useState('');
  const [query, setQuery] = useState(null);
  const { data, loading, error } = useFetchWeather(query);
  const [favorites, setFavorites] = useLocalStorage('favorites', []);

  const handleSearch = () => {
    setQuery(city);
  };

  const addToFavorites = () => {
    if (data && !favorites.includes(data.name)) {
      setFavorites([...favorites, data.name]);
    }
  };

  return (
    <div className="page">
      <h1>Weather Finder</h1>
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data && (
        <div className="weather">
          <h2>{data.name}</h2>
          <p>{data.weather[0].description}</p>
          <p>{Math.round(data.main.temp)}°C</p>
          <button onClick={addToFavorites}>Add to Favorites</button>
        </div>
      )}
    </div>
  );
}