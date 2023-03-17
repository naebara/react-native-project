import { useAuthenticationSelector } from "./hooks/useAuthentication";
import Authentication from "./navigation/Authentication";
import MainNavigation from "./navigation/MainNavigation";

export default function Navigation() {
  const isLoggedIn = useAuthenticationSelector().loggedIn;
  if (isLoggedIn === true) return <MainNavigation />;
  else return <Authentication />;
}
