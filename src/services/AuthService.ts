import { CLIENT_ID, CLIENT_SECRET } from '@env';
import {
  authorize,
  refresh,
  logout as logoutAppAuth,
} from 'react-native-app-auth';
import { PersistedTokens } from '~types';

const config = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUrl: 'spotifystatistics:/home',
  scopes: ['user-read-email', 'user-top-read', 'user-read-private'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

async function login(): Promise<PersistedTokens> {
  const { accessToken: token, refreshToken, idToken } = await authorize(config);
  return { token, refreshToken, idToken };
}

async function authRefreshToken(
  currentRefreshToken: string,
): Promise<PersistedTokens> {
  const {
    accessToken: token,
    refreshToken,
    idToken,
  } = await refresh(config, {
    refreshToken: currentRefreshToken,
  });
  return { token, refreshToken: refreshToken || '', idToken };
}

async function logout(idToken: string): Promise<void> {
  await logoutAppAuth(
    { ...config, issuer: '' },
    { idToken, postLogoutRedirectUrl: '' },
  );
}

export default {
  login,
  authRefreshToken,
  logout,
};
