import { CLIENT_ID, CLIENT_SECRET } from '@env';
import { authorize } from 'react-native-app-auth';

const config = {
  clientId: CLIENT_ID,
  clientSecret: CLIENT_SECRET,
  redirectUrl: 'spotifystatistics:/home',
  scopes: ['user-read-email', 'user-top-read'],
  serviceConfiguration: {
    authorizationEndpoint: 'https://accounts.spotify.com/authorize',
    tokenEndpoint: 'https://accounts.spotify.com/api/token',
  },
};

async function login() {
  try {
    const { accessToken } = await authorize(config);
    return accessToken;
  } catch (error) {
    console.log(error);
  }
}

export default {
  login,
};
