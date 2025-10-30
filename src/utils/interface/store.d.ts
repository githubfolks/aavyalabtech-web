import { IUsersInfo } from "./common";

interface TAppState {
  loading: boolean;
}

interface TAuthState {
  isAuthenticated: boolean;
  authInfo?: {
    user: IUsersInfo;
    [key: string]: string;
  };
  accessToken: string;
  timestamp?: string;
}
export { TAppState, TAuthState };
