import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./constants/query.js";

import { RouterProvider } from "react-router-dom";
import { router } from "./constants/router.js";

import FavoritesContextProvider from './store/favorites-context.jsx'



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <FavoritesContextProvider>
        <RouterProvider router={router} />
      </FavoritesContextProvider>
    </QueryClientProvider>
  );
}

export default App;
