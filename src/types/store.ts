export interface AppStoreContext {
  token?: string;
  setToken: React.Dispatch<React.SetStateAction<string | undefined>>;
}

export enum PersistedKeys {
  TOKEN = 'TOKEN',
}
