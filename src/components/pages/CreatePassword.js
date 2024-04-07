import Header from "../Header";
import { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { passwordValidation } from "../../utils/formValidation";
import { useState } from "react";
import { createUser } from "../../utils/authentication/createUserAuthentication";
import { auth } from "../../utils/authentication/firebase";

function CreatePassword() {
  const navigate = useNavigate();
  const [errorMessage, setErrorMessage] = useState(null);
  const location = useLocation();
  const { email } = location.state;
  const password = useRef(null);

  console.log("Email value in CreatePassword:", email);

  async function handleNextButton(e) {
    e.preventDefault();
    const message = passwordValidation(password.current.value);
    setErrorMessage(message);
    //! Create User
    // message === null && createUser(auth, email, password.current.value, setErrorMessage);

    //! Once the user is created then navigate to browse page

    if (message === null) {
      try {
        await createUser(auth, email, password.current.value, setErrorMessage);
        navigate("/browse");
      } catch (error) {
        console.error('Sign in error:', error);
      }
    }
  }

  return (
    <div className="flex justify-center items-center h-screen font-netflix-sans">
      {/* Here I don't want background gradient property from Header component. So I can simply pass it as a prop and render is conditionally inside Header component */}
      <Header showBackground={false} shadowBottom={true} />

      <form className="w-full max-w-md">
        <div className="text-left">
          <div className="mb-4">
            <h1>
              <span className="text-gray-700 font-medium text-4xl">Welcome! <br /> Joining Netflix is easy.</span>
            </h1>
          </div>

          <span className="mb-4 block text-lg">Enter your password and you'll be watching in no time.</span>

          <div className="mb-4">
            <p>Email</p>
            <p className="font-bold">{email}</p>
          </div>

          <input
            ref={password}
            className="mt-2 w-full h-14 border rounded px-3 py-2 border-gray-400 focus:outline-none"
            type="password"
            placeholder="Enter your password"
            autoComplete="new-password"
            maxLength="61"
            minLength="4"
          />

          <p className="text-red-500 mt-2">{errorMessage}</p>

          <button
            className="mt-6 w-full h-14 bg-red-600 hover:bg-red-700 text-white text-2xl font-semibold py-2 px-4 rounded"
            type="submit"
            onClick={handleNextButton}
          >
            Next
          </button>

        </div>
      </form>
    </div>
  )
}

export default CreatePassword;