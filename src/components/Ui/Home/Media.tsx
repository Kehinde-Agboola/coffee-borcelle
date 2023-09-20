import { PiPhoneCallLight } from "react-icons/pi";
import { BsEnvelope } from "react-icons/bs";
import Logo from "../../../assets/logo.png";

const style = { color: "white", fontSize: "1.5em" };
export const Media = () => {
  return (
    <>
      <div className="flex flex-col text-center">
        <img src={Logo} alt="" className="w-[30%] md:w-[40%]" />
        <div className="text-center">
          <p className="flex gap-5 text-white text-2xl">
            <PiPhoneCallLight size="30" />
            (08) 400 2000
          </p>
          <p className="flex gap-5 text-white text-2xl pt-4">
            <BsEnvelope size="30" background="white" />
            coffeeborcelle@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};
