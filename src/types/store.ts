export interface AppStoreContext {
  userIsLogged: boolean;
}
export interface AuthContext {
  userIsLogged: boolean;
  login: () => void;
  logout: () => void;
  refreshToken: () => void;
}

export type PersistedTokens = {
  token: string;
  refreshToken: string;
  idToken: string;
};

export enum PersistedKeys {
  TOKENS = 'TOKENS',
}
