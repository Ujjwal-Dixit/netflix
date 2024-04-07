import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/authentication/firebase";
import Login from "./Login";
import Browse from "./pages/Browse";
import CreatePassword from "./pages/CreatePassword";
import HomePage from "./HomePage";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/redux/userSlice";
import NetflixHomePage from "./NetflixHomePage";
import VideoPlayer from "./pages/VideoPlayer";

function Body() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName }));
        // navigate("/browse");  //! FIX THIS PART LATER, REMOVE ALL OTHER NAVIGATION FUNCTION from other components and use it here only. Shift the router to App level/root level


      } else {
        // User is signed out
        dispatch(removeUser());
        // navigate("/login");
      }
    });

    //! Unsubscribe to the event once the component is unmount
  }, [])

  const languageKey = useSelector((state) => state.language.lang);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage languageKey={languageKey} />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/password" element={<CreatePassword />} />
        <Route path="/browse/homepage" element={<NetflixHomePage />} />
        <Route path="/watch" element={<VideoPlayer />} />
      </Routes>
    </Router>
  );
}

export default Body;