import { Route, Routes } from "react-router";

import Home from "./pages/Home/Home.tsx";
import About from "./pages/About/About.tsx";

import "./App.css";

function App() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
    </Routes>
  );
}

export default App;
