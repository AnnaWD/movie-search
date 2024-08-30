import Home from "../pages/Home";
import MovieDetail from "../pages/MovieDetail";
import Favorites from '../pages/Favorites';
import RootLayout from "../pages/RootLayout";

export const ROUTES = [
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home/>
      },
      {
        path: 'favorites',
        element: <Favorites />
        // loader: detailMovieLoader 
      },
      {
        path: ':id',
        element: <MovieDetail/>
        // loader: detailMovieLoader 
      }
    ]
  }
];