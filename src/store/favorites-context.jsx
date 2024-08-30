import { createContext, useState, useContext, useEffect } from "react";

export const FavoritesContext = createContext({
  movies: []
});

export default function FavoritesContextProvider ({children}) {
  const [ favorites, setFavorites ] = useState(() => {
    const storedFavorites = localStorage.getItem('favorites');
    return storedFavorites ? JSON.parse(storedFavorites) : []
  });

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites])

  const addFavorite = (movieID) => {
    setFavorites(prev => [...prev, movieID])
  }
  const removeFavorite = (movieID) => {
    setFavorites(prev => prev.filter( id => id !== movieID))
  }
  const isFavorite = (movieID) => {
    return favorites.includes(movieID)
  }

  const contextValue = {
    movies: favorites,
    addFavorite,
    removeFavorite,
    isFavorite
  }

  return (
    <FavoritesContext.Provider value={contextValue}>
      {children}
    </FavoritesContext.Provider>
  )
} 

export function useFavorites() {
  return useContext(FavoritesContext);
}