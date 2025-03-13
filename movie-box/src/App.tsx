import { Route, Routes } from "react-router";

import Toaster from "./components/toaster/toaster.tsx";

import RootLayout from "./layouts/root/root.layout.tsx";

import HomePage from "./pages/home/home.page.tsx";
import MoviePage from "./pages/movie/movie.page.tsx";
import SignUpPage from "./pages/auth/sign-up/sign-up.page.tsx";
import SignInPage from "./pages/auth/sign-in/sign-in.page.tsx";
import DashboardPage from "./pages/dashboard/dashboard.page.tsx";
import NotFoundPage from "./pages/not-found/not-found.page.tsx";

import QueryProvider from "./providers/query.provider.tsx";

import "./App.css";

function App() {
  return (
    <QueryProvider>
      <Routes>
        <Route element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="movie/:id" element={<MoviePage />} />
          <Route path="auth/sign-up" element={<SignUpPage />} />
          <Route path="auth/sign-in" element={<SignInPage />} />
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </QueryProvider>
  );
}

export default App;
