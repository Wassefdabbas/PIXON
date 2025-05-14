import { createContext, useState, useContext, useEffect } from "react";

const MovieContext = createContext();
export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({ children }) => {
  // Initialize favorites from localStorage lazily
  const [favorites, setFavorites] = useState(() => {
    try {
      const stored = localStorage.getItem("favorites");
      return stored ? JSON.parse(stored) : [];
    } catch (err) {
      console.error("Failed to parse favorites from localStorage", err);
      return [];
    }
  });

  // Persist favorites to localStorage whenever they change
  useEffect(() => {
    try {
      localStorage.setItem("favorites", JSON.stringify(favorites));
    } catch (err) {
      console.error("Failed to save favorites to localStorage", err);
    }
  }, [favorites]);

  const addToFavorites = (movie) => {
    // Avoid duplicates
    setFavorites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  };

  const removeFromFavorites = (movieId) => {
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  };

  const isFavorite = (movieId) => favorites.some((m) => m.id === movieId);

  const value = {
    favorites,
    addToFavorites,
    removeFromFavorites,
    isFavorite,
  };

  return (
    <MovieContext.Provider value={value}>{children}</MovieContext.Provider>
  );
};
