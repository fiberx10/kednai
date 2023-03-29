import { BiHomeSmile } from "react-icons/bi";
import { AiOutlineReload } from "react-icons/ai";

import { IoMdArrowRoundBack } from "react-icons/io";
// a header component that displays the title of the app and the current topic name
const Navbar = () => {
  const ReloadApp = () => {
    window.location.reload();
  };

  const goBack = () => {
    window.history.back();
  };

  const toHome = () => {
    window.location.href = "/";
  };

  return (
    <div className="w-full fixed bg-white h-16 min-h-16 bg-transparent flex ">
      <div className="h-full w-[50px] grid place-content-center">
        <div className="w-full  h-full grid place-content-center">
          <IoMdArrowRoundBack
            onClick={() => goBack()}
            className="text-3xl cursor-pointer hover:text-blue-400"
          />
        </div>
      </div>
      <div className="h-full w-[50px] grid place-content-center">
        <div className="w-full  h-full grid place-content-center">
          <BiHomeSmile
            onClick={() => toHome()}
            className="text-3xl cursor-pointer hover:text-blue-400"
          />
        </div>
      </div>

      <div className="h-full w-[50px] grid place-content-center ">
        <div className="w-full h-full grid place-content-center">
          <AiOutlineReload
            onClick={() => ReloadApp()}
            className="text-3xl cursor-pointer hover:text-blue-400"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
