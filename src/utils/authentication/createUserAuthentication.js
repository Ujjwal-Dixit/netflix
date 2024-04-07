import { createUserWithEmailAndPassword } from "firebase/auth";

export const createUser = (auth, email, password, setErrorMessage) => {
  return new Promise((resolve, reject) => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed up 
        const user = userCredential.user;
        console.log(user);
        resolve(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setErrorMessage(errorCode + " " + errorMessage);
        reject(error)
      });
  })

};