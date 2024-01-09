import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthorizationPage } from "../Pages/AuthorizationPage/AuthorizationPage";
import { LANDING_ROUTE, LOGIN_ROUTE, MEMORIES_ROUTE, SETTINGS_ROUTE } from "../Enums/ROUTE_PATH_TITLE";
import { LandingPage } from "../Pages/LandingPage/LandingPage";
import { SettingsPage } from "../Pages/SettingsPage/SettingsPage";
import { MemoriesPage } from "../Pages/MemoriesPage/MemoriesPage";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={`${LOGIN_ROUTE.PATH}`} element={<AuthorizationPage />} />
        <Route path={`${LANDING_ROUTE.PATH}`} element={<LandingPage />} />
        <Route path={`${SETTINGS_ROUTE.PATH}`} element={<SettingsPage />} />
        <Route path={`${MEMORIES_ROUTE.PATH}`} element={<MemoriesPage />} />
      </Routes>
    </Router>
  );
};
