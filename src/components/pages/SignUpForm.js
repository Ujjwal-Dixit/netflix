import { useRef, useState } from "react";
import { NETFLIX_BACKGROUND_IMAGE } from "../../utils/constants"
import { SRCSET_BACKGROUND_IMAGE } from "../../utils/constants"
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import { signUpFormEmailValidation } from "../../utils/formValidation";
import { lang } from "../../utils/languageConstant";

function SignUpForm({ languageKey }) {
  const [errorMessage, setErrorMessage] = useState(null);

  const email = useRef(null);
  const navigate = useNavigate();

  function handleGetStartedButton(e) {
    e.preventDefault(); // Prevent form submission

    const inputEmailValue = email.current.value.trim(); // Trim to remove whitespace
    const message = signUpFormEmailValidation(inputEmailValue);

    if (inputEmailValue !== "" && message === null) {
      navigate("/password", { state: { email: inputEmailValue } });
    } else {
      setErrorMessage(message);
    }
  }

  return (
    <div className="relative h-screen font-netflix-sans">
      <img className="absolute inset-0 w-full h-full object-cover" src={NETFLIX_BACKGROUND_IMAGE} srcSet={SRCSET_BACKGROUND_IMAGE} alt="background" />

      <div className="absolute inset-0 bg-black opacity-65"></div>
      <Header languageKey={languageKey} />
      <div className="absolute inset-0 flex flex-col justify-center items-center">
        <div className="text-center">
          <h1 className="text-5xl font-bold mb-4 text-white">{lang[languageKey].signUpForm_h1}</h1>
          <p className="mt-6 text-2xl text-white">{lang[languageKey].signUpForm_p}</p>
          <h3 className="mt-6 mb-4 text-2xl text-white">{lang[languageKey].signUpForm_h3}</h3>

          <form
            className="flex justify-center items-center"
          >
            <input
              ref={email}
              type="email"
              placeholder={lang[languageKey].signUpForm_inputPlaceholder}
              className="border border-gray-300 rounded px-4 py-2 mr-2 focus:outline-none focus:border-gray-500 bg-black opacity-65 text-white"
              style={{ width: "370px", height: "56px" }}
            />

            <button
              className="bg-red-600 hover:bg-red-700 text-white text-2xl font-sm-b px-4 py-2 rounded"
              style={{ width: "220px", height: "56px" }}
              onClick={handleGetStartedButton}
            >
              {lang[languageKey].signUpForm_getStarted}
            </button>
          </form>
          <div>
            <p className="text-red-500 mt-2 pr-348">{errorMessage}</p>
          </div>
        </div>
      </div>
    </div >
  )
}

export default SignUpForm;