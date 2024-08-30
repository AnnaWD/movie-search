
import { Suspense } from "react";

import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";


import { queryClient } from "../constants/query";

import { fetchMovie } from "../util/http";
import { useFavorites } from "../store/favorites-context";

export default function MovieDetail ({}) {
  const { isFavorite, addFavorite, removeFavorite } = useFavorites();
  const params = useParams();

  const {data: movie} = useQuery({
    queryKey: ['movies', 'detail', { id: params.id}],
    queryFn: ({signal}) => fetchMovie({signal, id: params.id})
  });

  const handleClick = () => {
    if (isFavorite(movie.imdbID)){
      removeFavorite(movie.imdbID)
    } else {
      addFavorite(movie.imdbID)
    }
  }

  return (
    <section className="container mx-auto p-4 " id="movie-detail">
      <div className="flex flex-col md:flex-row bg-white shadow-lg rounded-lg ">
        <Suspense fallback="Loading">
          {movie &&
            <>
              <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600' } alt="Movie Poster" className="w-full md:w-1/3 h-auto object-cover" />
              <div className="p-6 md:w-2/3">
                  <h2 className="text-2xl font-bold mb-4">{movie.Title}</h2>
                  <p className="text-gray-700 mb-2"><strong>Year:</strong> {movie.Year}</p>
                  <p className="text-gray-700 mb-2"><strong>Genre:</strong> {movie.Genre}</p>
                  <p className="text-gray-700 mb-4"><strong>Plot:</strong> {movie.Plot}</p>
                  <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600" onClick={handleClick}>{isFavorite(movie.imdbID) ? 'Remove from Favorites' : 'Add to Favorites'}</button>
              </div>
            </>
          }
        </Suspense>
      </div>
  </section>
  )
}

// export function loader({ params }) {
//   return queryClient.fetchQuery({
//     queryKey: ['movies', { id: params.id}],
//     queryFn: ({signal}) => fetchMovie({signal, id: params.id})
//   })
//   // return null;
//   // console.log(params);

// }