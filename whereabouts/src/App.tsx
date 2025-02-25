import { Route, Routes } from "react-router";

import RootLayout from "./layouts/RootLayout/RootLayout.tsx";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";
import NotFound from "./pages/NotFound/NotFound.tsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
