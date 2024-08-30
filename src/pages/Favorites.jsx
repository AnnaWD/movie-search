import { useQueries } from '@tanstack/react-query';
import MovieItem from '../components/MovieItem';
import { useFavorites } from '../store/favorites-context';
import { fetchMovie } from '../util/http';

export default function Favorites() {
  const { movies: movieIDs } = useFavorites();

  // Early return if there are no favorite movie IDs
  if (!movieIDs || movieIDs.length === 0) {
    return <p className="text-center text-gray-500">You have no favorite movies yet.</p>;
  }

  // Fetch movie details using useQueries
  const movieQueries = useQueries({
    queries: movieIDs.map(movieID => {
      return {
        queryKey: ['movies', { id: movieID }],
        queryFn: ({ signal }) => fetchMovie({ signal, id: movieID }),
        enabled: !!movieID,
      }
    })
  });

  // Debugging logs
  console.log('movieIDs:', movieIDs);
  console.log('movieQueries:', movieQueries);

  // Handle the case where movieQueries might be undefined or empty
  if (!movieQueries || movieQueries.length === 0) {
    return <p className="text-center text-gray-500">Failed to load your favorite movies.</p>;
  }

  // Filter and map movie data from the queries
  const movies = movieQueries
    .filter(query => query.data) // Filter out unsuccessful queries
    .map(query => query.data);   // Map to movie data

  // Debugging logs
  console.log('movies:', movies);

  // Handle the case where no movies were successfully fetched
  if (movies.length === 0) {
    return <p className="text-center text-gray-500">No movies found.</p>;
  }

  return (
    <div id="movie-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {movies.map(movie => (
        <MovieItem key={movie.imdbID} movie={movie} />
      ))}
    </div>
  );
}
