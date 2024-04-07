import { useRef, useState } from "react";
import { signInFormValidation } from "../../utils/formValidation";
import { signInUser } from "../../utils/authentication/signInUserAuthentication";
import { auth } from "../../utils/authentication/firebase";
import { useNavigate } from "react-router-dom";

function LoginForm() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const email = useRef(null);
  const password = useRef(null);

  async function handleSignInClick(e) {
    e.preventDefault();
    const message = signInFormValidation(email.current.value, password.current.value);
    setErrorMessage(message);

    if (message === null) {
      try {
        await signInUser(auth, email.current.value, password.current.value, setErrorMessage);
        // Once the user is successfully signed in then move to browse page
        navigate("/browse");
      } catch (error) {
        console.error('Sign in error:', error);
      }
    }
  }

  return (
    <div
      className="flex flex-col items-center justify-center min-h-[407px] py-[38px] px-[58px] bg-black bg-opacity-85">
      <h1 className="text-3xl font-bold mb-6 mt-4 text-white"> Sign In</h1 >

      <div className="min-h-[280px] w-280">
        <form className="w-full max-w-sm mb-4">
          <input
            ref={email}
            type="email"
            placeholder="Email or phone number"
            className="mt-1 p-2 mb-4 border rounded w-full bg-black bg-opacity-85 text-white focus:outline-none"
          />
          <input
            ref={password}
            type="password"
            placeholder="Password"
            className="mt-1 p-2 mb-4 border rounded w-full bg-black bg-opacity-85 text-white focus:outline-none"
          />
          <p className="text-red-500 mb-2">{errorMessage}</p>
          <button
            type="submit"
            className="bg-red-600 hover:bg-red-700 mt-1 p-2 mb-4 text-white font-bold py-2 px-4 rounded w-full outline-none"
            onClick={handleSignInClick}
          >
            Sign In
          </button>
          <a href="/LoginHelp" className="text-blue-500 hover:text-blue-700 text-sm">Forgot password?</a>
        </form>
      </div>

      <div className="w-full max-w-sm mt-4">
        <footer className="mt-8 text-sm text-gray-600">
          <div className="mb-4 flex items-center">
            <input type="checkbox" className="mr-2" defaultChecked />
            <label htmlFor="rememberMe">Remember me</label>
          </div>
          <p className="mb-4">New to Netflix?
            <a href="/" className="text-blue-500 hover:text-blue-700"> Sign up now</a>.
          </p>
          <div className="recaptcha-terms-of-use">
            <p>This page is protected by Google reCAPTCHA to ensure you're not a bot. <button className="text-blue-500 hover:text-blue-700" onClick={() => window.open('https://policies.google.com/privacy')} >Learn more</button>.</p>
          </div>
        </footer>
      </div>
    </div >
  );
};

export default LoginForm;