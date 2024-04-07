import { signInWithEmailAndPassword } from "firebase/auth";

export const signInUser = (auth, email, password, setErrorMessage) => {
  return new Promise((resolve, reject) => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        let errorMessage = '';

        switch (errorCode) {
          case 'auth/invalid-email':
            errorMessage = 'Invalid email address.';
            break;
          case 'auth/user-disabled':
            errorMessage = 'Your account has been disabled.';
            break;
          case 'auth/user-not-found':
          case 'auth/wrong-password':
            errorMessage = 'Invalid email or password.';
            break;
          case 'auth/email-already-in-use':
            errorMessage = 'Email already is use';
            break;
          case 'auth/invalid-credential':
            errorMessage = 'Invalid credentials.';
            break;
          default:
            errorMessage = 'An error occurred while signing in.';
            break;
        }
        setErrorMessage(errorMessage);
        console.error('Firebase Authentication Error:', error);
        reject(error);
      });
  })
}