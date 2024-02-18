import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCU9346Ovzzi6tLjqxedtyQnlB48LvQO-Y",
    authDomain: "ytcloneapp.firebaseapp.com",
    projectId: "ytcloneapp",
    storageBucket: "ytcloneapp.appspot.com",
    messagingSenderId: "706751599572",
    appId: "1:706751599572:web:162c894f81cbafb5113c41"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);