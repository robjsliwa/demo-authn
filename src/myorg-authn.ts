import {
  Auth0Client,
  LogoutOptions,
  RedirectLoginOptions,
  User,
} from "@auth0/auth0-spa-js";

const auth = new Auth0Client({
  domain: process.env.APP_AUTH0_DOMAIN,
  clientId: process.env.APP_AUTH0_CLIENT_ID,
  //   authorizationParams: {
  //     audience: process.env.APP_AUTH0_AUDIENCE,
  //   },
});

export const loginWithRedirect = (options?: RedirectLoginOptions) =>
  auth.loginWithRedirect(options);

export const logout = (options?: LogoutOptions) => auth.logout(options);

export const getUser = (): Promise<User | undefined> => auth.getUser();

export const handleRedirectCallback = () => auth.handleRedirectCallback();

export const isAuthenticated = () => auth.isAuthenticated();

export const getTokenSilently = () => auth.getTokenSilently();

export const getIdTokenClaims = () => auth.getIdTokenClaims();
