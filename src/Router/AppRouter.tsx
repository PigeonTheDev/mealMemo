import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AuthorizationPage } from "../Pages/AuthorizationPage/AuthorizationPage";
import { LOGIN_ROUTE } from "../Enums/ROUTE_PATH_TITLE";

export const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path={`${LOGIN_ROUTE.PATH}`} element={<AuthorizationPage />} />
      </Routes>
    </Router>
  );
};
