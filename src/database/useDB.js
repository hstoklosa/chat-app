import { getAuth, GoogleAuthProvider, signInWithPopup, signOut, onAuthStateChanged } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { app } from './db';

export const auth = getAuth(app);
export const user = auth.currentUser;

export const signInWithGoogle = async () => {
   const provider = new GoogleAuthProvider();

   return await signInWithPopup(auth, provider);
}

export const handleSignOut = async () => {
   return signOut(auth).then(res => res);
}

onAuthStateChanged(auth, (user) => {
   if (user) {
      console.log('user is signed in!');
   } else {
      console.log('User is not signed in!');
   }
});