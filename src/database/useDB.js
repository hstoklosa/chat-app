import { getAuth, GoogleAuthProvider, signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { app } from './db';

export const auth = getAuth(app);
export const userxd = auth.currentUser;

export const signInWithGoogle = async () => {
   const provider = new GoogleAuthProvider();

   return await signInWithPopup(auth, provider);
}

onAuthStateChanged(auth, (user) => {
   if (user) {
      console.log('user is signed in!');
   } else {
      console.log('User is not signed in!');
   }
});