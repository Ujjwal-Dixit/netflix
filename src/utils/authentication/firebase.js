import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB4ckIhvBGqwlLB9gmDlaw-2qDx9PeQh1c",
  authDomain: "netflix-e17dd.firebaseapp.com",
  projectId: "netflix-e17dd",
  storageBucket: "netflix-e17dd.appspot.com",
  messagingSenderId: "605199767137",
  appId: "1:605199767137:web:c6ff7d7d01489d02757c20",
  measurementId: "G-ED20KSCLTH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();