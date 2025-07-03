import React from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export default function Favorites() {
  const [favorites] = useLocalStorage('favorites', []);

  return (
    <div className="page">
      <h1>Favorite Cities</h1>
      <ul>
        {favorites.length > 0 ? favorites.map((city, index) => (
          <li key={index}>{city}</li>
        )) : <p>No favorite cities yet.</p>}
      </ul>
    </div>
  );
}
