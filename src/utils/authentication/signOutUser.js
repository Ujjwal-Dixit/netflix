import { signOut } from "firebase/auth";

export const signOutUser = (auth, setErrorMessage) => {
  return new Promise((resolve, reject) => {
    signOut(auth).then(() => {
      // Sign-out successful.
      resolve(console.log("Signed Out successfully"));
    }).catch((error) => {
      // An error happened.
      setErrorMessage(error);
      reject(error);
    });
  })
}