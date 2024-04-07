import { ReactComponent as PlayButton } from "../../utils/svg/PlayButton.svg";
import { ReactComponent as MoreInfo } from "../../utils/svg/MoreInfo.svg";

function TrailerDetails({ title, description }) {
  return (
    <div className="w-screen aspect-video absolute pt-[20%] ml-8 font-netflix-sans">
      <h1 className="text-white text-4xl font-bold mb-2">{title}</h1>
      <p className="text-white py-6 text-lg w-1/2">{description}</p>

      <div className="mt-2 flex">
        <button className="mr-4 flex items-center px-4 py-2 bg-white hover:bg-opacity-80 text-white rounded-md" type="button">
          <div className="mr-2">
            <PlayButton className="text-black" />
          </div>
          <span className="text-black">Play</span>
        </button>

        <button className="flex items-center px-4 py-2 bg-gray-500 text-white hover:bg-opacity-80 rounded-md" type="button">
          <div className="mr-2">
            <MoreInfo />
          </div>
          <span>More Info</span>
        </button>
      </div>
    </div>
  );
}

export default TrailerDetails;