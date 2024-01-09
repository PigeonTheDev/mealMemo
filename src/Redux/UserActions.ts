import { User } from "../Models/User";

export const LOGIN_FINALLY = (user: User) => {
  return { type: "LOGIN_FINALLY", payload: user };
};

export const LOGOUT_FINALLY = () => {
  return { type: "LOGOUT_FINALLY" };
};
