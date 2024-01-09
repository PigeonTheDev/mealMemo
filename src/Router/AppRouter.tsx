import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthorizationPage } from "../Pages/AuthorizationPage/AuthorizationPage";
import { LANDING_ROUTE, LOGIN_ROUTE, MEMORIES_ROUTE, SETTINGS_ROUTE } from "../Enums/ROUTE_PATH_TITLE";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { SettingsPage } from "../Pages/SettingsPage/SettingsPage";
import { MemoriesPage } from "../Pages/MemoriesPage/MemoriesPage";
import { useSelector } from "react-redux";
import { GlobalState } from "../Redux/reducers";
import { User } from "../Models/User";
import { ProtectedRoute } from "./ProtectedRoute";

export const AppRouter = () => {
  const user: User = useSelector((state: GlobalState) => state.user);

  return (
    <Router>
      <Routes>
        <Route path={`${LOGIN_ROUTE.PATH}`} element={<AuthorizationPage />} />
        <Route
          path={`${LANDING_ROUTE.PATH}`}
          element={
            <ProtectedRoute user={user}>
              <LandingPage />
            </ProtectedRoute>
          }
        />
        <Route
          path={`${SETTINGS_ROUTE.PATH}`}
          element={
            <ProtectedRoute user={user}>
              <SettingsPage />{" "}
            </ProtectedRoute>
          }
        />
        <Route
          path={`${MEMORIES_ROUTE.PATH}`}
          element={
            <ProtectedRoute user={user}>
              <MemoriesPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
};
