import React, {
  useState,
  useContext,
  createContext,
  PropsWithChildren,
  useEffect,
} from 'react';
import mmkvFlipper from 'rn-mmkv-storage-flipper';
import { MMKVLoader, useMMKVStorage } from 'react-native-mmkv-storage';
import axios, { AxiosError, InternalAxiosRequestConfig } from 'axios';

import { AuthContext, PersistedKeys, PersistedTokens } from '~types';
import AuthService from '~services/AuthService';

const authContext = createContext<AuthContext>({
  userIsLogged: false,
  login: () => {},
  refreshToken: () => {},
  logout: () => {},
});

const storage = new MMKVLoader().initialize();
mmkvFlipper(storage);

const emptyPersistedToken: PersistedTokens = {
  refreshToken: '',
  token: '',
  idToken: '',
};

export default function AuthProvider({ children }: PropsWithChildren) {
  const [userIsLogged, setUserIsLogged] = useState(false);

  const [persistedToken, setPersistedToken] = useMMKVStorage<PersistedTokens>(
    PersistedKeys.TOKENS,
    storage,
    emptyPersistedToken,
  );

  const errorStatusActions: Record<number, () => void> = {
    401: async function () {
      // TODO: Refresh token
      const refreshedTokens = await AuthService.authRefreshToken(
        persistedToken.refreshToken,
      );
      setPersistedToken(refreshedTokens);
    },
    403: function () {
      // Login in with permissions
      setUserIsLogged(false);
    },
    429: function () {
      // The app has exceeded rate limits
      console.log('The app has exceeded rate limits');
    },
    0: function () {
      // unkown error
      console.log('Unkown error');
    },
  };

  function onRequestInterceptorFulfilled(config: InternalAxiosRequestConfig) {
    config.headers.Authorization = `Bearer ${persistedToken.token}`;
    return config;
  }

  async function onResponseInterceptorRejected(
    error: AxiosError,
  ): Promise<AxiosError> {
    console.log(error);
    await errorStatusActions[error.response?.status || 0]();
    return Promise.reject(error);
  }

  function createRequestInterceptor() {
    axios.interceptors.request.clear();
    axios.interceptors.request.use(onRequestInterceptorFulfilled);
  }

  function createResponseInterceptor() {
    axios.interceptors.response.clear();
    axios.interceptors.response.use(
      config => config,
      onResponseInterceptorRejected,
    );
  }

  function clearInterceptors() {
    axios.interceptors.request.clear();
    axios.interceptors.response.clear();
  }

  useEffect(() => {
    axios.interceptors.response.clear();
    createResponseInterceptor();

    return () => {
      clearInterceptors();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (persistedToken.token !== '') {
      createRequestInterceptor();
      if (!userIsLogged) {
        setUserIsLogged(true);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [persistedToken.token]);

  async function login() {
    const tokens = await AuthService.login();
    setPersistedToken(tokens);
    createRequestInterceptor();
    setUserIsLogged(true);
  }

  async function refreshToken() {
    await AuthService.authRefreshToken(persistedToken.refreshToken);
  }

  async function logout() {
    setUserIsLogged(false);
    setPersistedToken(emptyPersistedToken);
    clearInterceptors();
  }

  return (
    <authContext.Provider value={{ userIsLogged, login, refreshToken, logout }}>
      {children}
    </authContext.Provider>
  );
}

export const useAuthContext = () => {
  const context = useContext(authContext);
  if (context === undefined) {
    throw new Error('Context must be used within an Auth Provider');
  }
  return context;
};
