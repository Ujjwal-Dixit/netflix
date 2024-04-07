import { useState, useRef, useEffect } from "react";
import { auth } from "../utils/authentication/firebase";
import { signOutUser } from "../utils/authentication/signOutUser";
import { useNavigate } from "react-router-dom";
import { ReactComponent as Search } from '../utils/svg/Search.svg';
import { ReactComponent as Notification } from '../utils/svg/Notification.svg';
import { HOMEPAGE_USER_LOGO, NETFLIX_LOGO } from "../utils/constants";

function NavigationBar() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [showUserDropdown, setShowUserDropdown] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const searchInputRef = useRef(null);

  async function handleSignOut() {
    try {
      await signOutUser(auth, setErrorMessage);
      navigate("/");
    } catch (error) {
      console.error('Sign in error:', error);
    }
  }





  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.pageYOffset;
      setIsScrolled(scrollTop > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);






  useEffect(() => {
    const handleClickOutside = (event) => {
      if (searchInputRef.current && !searchInputRef.current.contains(event.target)) {
        setShowSearchInput(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [searchInputRef]);

  const handleSearchClick = (e) => {
    if (showSearchInput && !searchInputRef.current.contains(e.target)) {
      setShowSearchInput(false);
    } else {
      setShowSearchInput(true);
    }
  };

  const handleUserClick = () => {
    setShowUserDropdown(!showUserDropdown);
  };

  return (

    <div className={`sticky top-0 ${isScrolled ? 'bg-black' : 'bg-gradient-to-b from-black'} text-gray-300 flex justify-between items-center px-4 py-2 text-sm z-50 transition-colors duration-300 ease-in-out`}>
      <div className="flex items-center">
        <img className="w-32 cursor-pointer" src={NETFLIX_LOGO} alt="Netflix"></img>
        <ul className="flex text-gray-300 ml-6">
          <li className="mr-4 cursor-pointer">Home</li>
          <li className="mr-4 cursor-pointer">TV Shows</li>
          <li className="mr-4 cursor-pointer">Movies</li>
          <li className="mr-4 cursor-pointer">New &amp; Popular</li>
          <li className="mr-4 cursor-pointer">My List</li>
          <li className="mr-4 cursor-pointer">Browse by Languages</li>
        </ul>
      </div>

      <div className="flex items-center">
        <button
          className="ml-4"
          onClick={handleSearchClick}>
          {showSearchInput ? (
            <div className="relative" ref={searchInputRef}>
              <input
                type="text"
                placeholder="Titles, people, genre"
                className="p-2 w-64 border rounded bg-black bg-opacity-85 focus:outline-none"
              />
              {/* <Search className="h-6 w-6 absolute left-0 top-0 m-1" /> */}
            </div>
          ) : (
            <Search className="h-6 w-6" />
          )}
        </button>

        <p className="ml-4 cursor-pointer">Children</p>

        <button className="ml-4">
          <Notification className="h-6 w-6" />
        </button>

        <div className="relative ml-4">
          <img
            src={HOMEPAGE_USER_LOGO}
            alt="user-icon"
            className="cursor-pointer"
            onClick={handleUserClick}
          />
          {showUserDropdown && (
            <div className="absolute left-0 transform -translate-x-full max-w-full mt-6">
              <button
                className="cursor-pointer whitespace-nowrap rounded-md px-2 py-2 text-white transition duration-300 ease-in-out bg-red-600 hover:bg-red-700 focus:outline-none"
                onClick={handleSignOut}
              >
                Sign out
              </button>
              <p>{errorMessage}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default NavigationBar;