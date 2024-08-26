import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();



function App() {
  return (
    <QueryClientProvider client={queryClient}>
      New App
    </QueryClientProvider>
  );
}

export default App;
