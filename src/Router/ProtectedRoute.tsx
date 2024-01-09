import React from "react";
import { User } from "../Models/User";
import { Navigate } from "react-router";
import { LOGIN_ROUTE } from "../Enums/ROUTE_PATH_TITLE";

interface IProtectedRoute {
  user: User;
  children: React.ReactNode;
}

export const ProtectedRoute: React.FC<IProtectedRoute> = ({ user, children }) => {
  if (user.username !== "") {
    return <>{children}</>;
  } else {
    return <Navigate to={LOGIN_ROUTE.PATH} replace />;
  }
};
