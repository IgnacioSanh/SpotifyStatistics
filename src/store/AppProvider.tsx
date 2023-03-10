import React, {
  useContext,
  createContext,
  useState,
  PropsWithChildren,
  useEffect,
} from 'react';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import axios from 'axios';

import { AppStoreContext, PersistedKeys } from '~types';

const appContext = createContext<AppStoreContext>({
  token: undefined,
  setToken: () => {},
});

const storage = new MMKVLoader().initialize();

export default function AppProvider({ children }: PropsWithChildren) {
  const [token, setToken] = useState<string>();
  const [persistedToken, setPersistedToken] = useMMKVStorage<
    string | undefined
  >(PersistedKeys.TOKEN, storage, undefined);

  useEffect(() => {
    if (persistedToken) {
      setToken(persistedToken);
      axios.interceptors.request.use(requestConfig => {
        requestConfig.headers.Authorization = `Bearer ${persistedToken}`;
        return requestConfig;
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (token && persistedToken !== token) {
      setPersistedToken(token);
    }
  }, [token, setPersistedToken, persistedToken]);

  return (
    <appContext.Provider value={{ token, setToken }}>
      {children}
    </appContext.Provider>
  );
}

export const useAppContext = () => {
  const context = useContext(appContext);
  if (context === undefined) {
    throw new Error('Context must be used within an App provider');
  }
  return context;
};
