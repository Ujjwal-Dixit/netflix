import { BROWSE_CHILDREN_LOGO, BROWSE_USER_LOGO } from "../../utils/constants";
import { ReactComponent as PlusIcon } from '../../utils/svg/PlusIcon.svg';
import { useNavigate } from "react-router-dom";

function Browse() {
  const navigate = useNavigate();

  function handleUserProfileClick() {
    navigate("/browse/homepage");
  }

  return (
    <div
      className="flex flex-col items-center justify-center h-screen font-netflix-sans"
      style={{ backgroundColor: 'rgb(20, 20, 20)' }}
    >

      <h1 className="mb-10 text-5xl text-white font-normal">Who's watching?</h1>

      <div className="flex justify-between w-full max-w-lg">
        <div className="flex flex-col items-center">
          <div className="mb-2">
            <img
              src={BROWSE_USER_LOGO}
              alt="user-profile"
              className="h-32 w-32 rounded-md cursor-pointer"
              onClick={handleUserProfileClick}
            ></img>
          </div>
          <span className="text-lg text-gray-400">Ujjwal Dixit</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-2">
            <img src={BROWSE_CHILDREN_LOGO} alt="children-profile" className="h-32 w-32 rounded-md cursor-pointer"></img>
          </div>
          <span className="text-lg text-gray-400">Children</span>
        </div>

        <div className="flex flex-col items-center">
          <div className="mb-2">
            <PlusIcon className="rounded-md h-32 w-32 cursor-pointer" />
          </div>
          <span className="text-lg text-gray-400">Add Profile</span>
        </div>
      </div>
    </div>
  );
}

export default Browse;