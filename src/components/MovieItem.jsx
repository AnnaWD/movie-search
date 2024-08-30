import { Link } from "react-router-dom";

export default function MovieItem ({movie}) {

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
        <img src={movie.Poster !== 'N/A' ? movie.Poster : 'https://via.placeholder.com/400x600'} alt="Movie Poster" className="w-full h-60 object-cover" />
        <div className="p-4">
            <h2 className="text-lg font-bold mb-2">{movie.Title}</h2>
            <p className="text-gray-600 mb-2">Year: {movie.Year}</p>
            <p>
            <Link to={`/${movie.imdbID}`} className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">View Details</Link></p>
        </div>
    </div>
  )
}