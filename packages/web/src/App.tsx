import "./App.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import AppRoutes from "./pages/routes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();
export default function App() {
  return (
    <QueryClientProvider client={client}>
      <AppRoutes />
    </QueryClientProvider>
  );
}
