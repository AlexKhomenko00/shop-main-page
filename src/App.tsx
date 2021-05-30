import Header from "components/Header/Header";
import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import MainPage from "./pages/MainPage";

const queryClient = new QueryClient();

const App = (): JSX.Element => {
  return (
    <QueryClientProvider client={queryClient}>
      <Header logoName={"TrendyCuts."} />
      <MainPage />
    </QueryClientProvider>
  );
};

export default App;
