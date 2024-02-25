import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

// const key = process.env.REACT_APP_API_KEY;

const firebaseConfig = {
    apiKey: 'AIzaSyDQYRhcj1Wp10IC6iHlYLNZa9Dq6opsnbY',
    authDomain: "ytcloneapp.firebaseapp.com",
    projectId: "ytcloneapp",
    storageBucket: "ytcloneapp.appspot.com",
    messagingSenderId: "706751599572",
    appId: "1:706751599572:web:162c894f81cbafb5113c41"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);