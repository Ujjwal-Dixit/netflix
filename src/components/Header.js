import { NETFLIX_LOGO } from "../utils/constants";
import { useNavigate, useLocation } from 'react-router-dom';
import { lang } from "../utils/languageConstant";
import { useDispatch } from "react-redux";
import { changeLanguage } from "../utils/redux/languageSlice";

function Header({ showBackground = true, shadowBottom = false, languageKey }) {   // Default value for showBackground prop is true

  function handleLanguageChange(e) {
    dispatch(changeLanguage(e.target.value));
  }

  const navigate = useNavigate();
  const location = useLocation(); // Get the current location
  const dispatch = useDispatch();

  // Check if the current location is the sign-in page
  const isSignInPage = location.pathname === '/login';
  const isLanguageChange = location.pathname === '/login';

  // Render the sign-in button conditionally
  const signInButton = !isSignInPage && (
    <button
      type="button"
      onClick={() => navigate("/login")}
      className="bg-red-600 hover:bg-red-700 text-white font-sm-b py-2 px-4 rounded outline-none"
      style={{ width: "110px", height: "40px" }}
    >
      {lang[languageKey].header_signIn}
    </button>
  );

  // Render the multilanguage option conditionally
  const multiLanguageToggle = !isLanguageChange && (
    <select
      className="border border-gray-300 rounded px-4 py-2 mr-4 focus:outline-none focus:border-gray-500 bg-black opacity-65 text-white"
      onChange={handleLanguageChange}
    >
      <option value="english">English</option>
      <option value="hindi">हिंदी</option>
    </select>
  );

  return (
    <div className={`absolute top-0 right-0 flex items-center justify-between w-full px-12 py-2 z-10 ${showBackground ? "bg-gradient-to-b from-black" : ""} ${shadowBottom ? "shadow-md" : ""}`}>
      <img className="w-44 cursor-pointer" src={NETFLIX_LOGO} alt="netflix-logo"
        onClick={() => navigate("/")}
      />

      <div>
        {multiLanguageToggle}
        {signInButton}
      </div>
    </div>
  );
}

export default Header;