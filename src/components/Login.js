import Header from "./Header"
import { NETFLIX_BACKGROUND_IMAGE } from "../utils/constants"
import { SRCSET_BACKGROUND_IMAGE } from "../utils/constants"
import LoginForm from "./pages/LoginForm"

function Login() {
  return (
    <div className="relative">
      <Header />
      <div className="relative">
        <img className="w-full" src={NETFLIX_BACKGROUND_IMAGE} srcSet={SRCSET_BACKGROUND_IMAGE} alt="background"></img>
      </div>

      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <LoginForm />
      </div>
    </div>
  )
}

export default Login