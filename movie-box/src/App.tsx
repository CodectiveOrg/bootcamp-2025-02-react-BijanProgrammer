import { Route, Routes } from "react-router";

import Toaster from "./components/toaster/toaster.tsx";

import RootLayout from "./layouts/root/root.layout.tsx";
import DashboardLayout from "./layouts/dashboard/dashboard.layout.tsx";

import GuestOnlyGuard from "./guards/guest-only.guard.tsx";
import UserOnlyGuard from "./guards/user-only.guard.tsx";

import HomePage from "./pages/home/home.page.tsx";
import MoviePage from "./pages/movie/movie.page.tsx";
import SignUpPage from "./pages/auth/sign-up/sign-up.page.tsx";
import SignInPage from "./pages/auth/sign-in/sign-in.page.tsx";
import ProfilePage from "./pages/dashboard/profile/profile.page.tsx";
import SelectionPage from "./pages/dashboard/selection/selection.page.tsx";
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
          <Route element={<GuestOnlyGuard />}>
            <Route path="auth/sign-up" element={<SignUpPage />} />
            <Route path="auth/sign-in" element={<SignInPage />} />
          </Route>
          <Route element={<UserOnlyGuard />}>
            <Route element={<DashboardLayout />}>
              <Route path="dashboard" element={<ProfilePage />} />
              <Route path="dashboard/selection" element={<SelectionPage />} />
            </Route>
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Route>
      </Routes>
      <Toaster />
    </QueryProvider>
  );
}

export default App;
