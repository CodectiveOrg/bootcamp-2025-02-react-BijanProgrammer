import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout/RootLayout.tsx";

import Home from "./pages/Home/Home.tsx";
import Attraction from "./pages/Attraction/Attraction.tsx";
import About from "./pages/About/About.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

import QueryProvider from "./providers/QueryProvider.tsx";

import "./App.css";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<Home />} />
          <Route path="attraction/:id" element={<Attraction />} />
          <Route path="about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </QueryProvider>
  );
}

export default App;
