import { useQuery } from "@tanstack/react-query";
import { fetchMovies } from "../util/http";
import { Suspense } from "react";
import MovieItem from "./MovieItem";


export default function MovieList({searchPhrase}){
  
  const {data: movies, isFetching, isError, error} = useQuery({
    queryKey: ['movies', searchPhrase],
    queryFn: ({signal}) => fetchMovies({signal, searchPhrase}),
    enabled: !!searchPhrase
  });

  console.log(isFetching);

  // console.log(movies)
  // console.log(error)

  const loadingContent = <p>Loading...</p>;

  return (
    <>
      {searchPhrase === '' && <p>Enter a search phrase</p>}
      {isFetching && loadingContent}

      {isError && <p>An error occured.</p>}

      {movies && !isFetching &&
        <Suspense fallback={loadingContent}>
          <div id="movie-list" className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {movies.map( movie => (
                <MovieItem key={movie.imdbID} movie={movie}/>
              ))}
          </div>
        </Suspense> 
      }

    </>
 
  )
}