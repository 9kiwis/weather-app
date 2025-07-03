import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ThemeContext, themes } from '../theme';

export default function Navbar() {
  const { theme, setTheme } = useContext(ThemeContext);

  const toggleTheme = () => {
    setTheme(prev => prev === themes.light ? themes.dark : themes.light);
  };

  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/favorites">Favorites</Link>
      <Link to="/about">About</Link>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
}
