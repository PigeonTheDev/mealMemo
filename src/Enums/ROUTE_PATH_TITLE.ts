interface IRouteProps {
  PATH: string;
  TITLE: string;
}

export const LOGIN_ROUTE: IRouteProps = { PATH: "/", TITLE: "Login" };
export const LANDING_ROUTE: IRouteProps = { PATH: "/landing", TITLE: "Home" };
export const SETTINGS_ROUTE: IRouteProps = { PATH: "/settings", TITLE: "Settings" };
export const MEMORIES_ROUTE: IRouteProps = { PATH: "/memories", TITLE: "Memories" };
