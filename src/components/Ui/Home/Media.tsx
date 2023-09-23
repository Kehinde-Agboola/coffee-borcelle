import Email from "../../../assets/email.svg";
import Call from "../../../assets/call.svg";
import Logo from "../../../assets/logo.png";
export const Media = () => {
  return (
    <>
      <div className="flex flex-col text-center">
        <img src={Logo} alt="" className="w-[30%] md:w-[40%]" />
        <div className="text-center pt-8">
          <p className="flex gap-5 text-text text-2xl">
            <img src={Call} alt="" className="" />
            (08) 400 2000
          </p>
          <p className="flex gap-5 text-text text-2xl pt-4">
            <img src={Email} alt="" />
            coffeeborcelle@gmail.com
          </p>
        </div>
      </div>
    </>
  );
};
