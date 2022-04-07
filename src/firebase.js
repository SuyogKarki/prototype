import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDSiUvRPoWzZXQREoUqF4Ov9ftT2aMW-ZY',
  authDomain: 'login-3fe59.firebaseapp.com',
  projectId: 'login-3fe59',
  storageBucket: 'login-3fe59.appspot.com',
  messagingSenderId: '113954649275',
  appId: '1:113954649275:web:e2887acaa50955299a259e',
  measurementId: 'G-EV4L7VRNRF',
};

const app = initializeApp(config);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
