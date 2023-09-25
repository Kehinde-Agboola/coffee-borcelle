import { useState } from "react";
import Logo from "../../assets/logo.png";
import useMediaQuery from "../hooks/useMediaQuery";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { NavLink } from "react-router-dom";
export const Navigation = () => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <nav className="bg-hero py-[5rem]">
      <div className={`${flexBetween}  `}>
        <div className={`${flexBetween} mx-auto w-5/6 text-center`}>
          <div className={`$ flex items-center justify-between w-full gap-16`}>
            {/* LEFT SIDE */}

            <img src={Logo} alt="" className="w-[15%]" />
            {/* RIGHT SIDE */}
            {isAboveMediumScreens ? (
              <div className={`${flexBetween}  `}>
                <div
                  className={`${flexBetween} gap-8  bg-navback p-3 rounded-md`}
                >
                  <NavLink to="/">
                    <li>
                      <a>Home</a>
                    </li>
                  </NavLink>
                  <NavLink to="/aboutUs">
                    <li>
                      <a>About Us</a>
                    </li>
                  </NavLink>
                  <NavLink to="/features">
                    <li>
                      <a>Features</a>
                    </li>
                  </NavLink>
                  <NavLink to="/purchase">
                    <li>
                      <a>Purchase</a>
                    </li>
                  </NavLink>
                  <NavLink to="/contactUs">
                    <li>
                      <a>ContactUs</a>
                    </li>
                  </NavLink>
                </div>
              </div>
            ) : (
              <button
                className="rounded-full bg-secondary-500 p-2"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="h-6 w-6 text-white" />
              </button>
            )}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      <div>
        {!isAboveMediumScreens && isMenuToggled && (
          <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-navback drop-shadow-xl">
            {/* CLOSE ICON */}
            <div className="flex justify-end p-12">
              <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
                <XMarkIcon className="h-6 w-10 text-gray-400" />
              </button>
            </div>

            {/* MENU ITEMS */}
            <div className="ml-[33%] flex flex-col gap-10 text-2xl">
              <NavLink to="/">
                <li>
                  <a>Home</a>
                </li>
              </NavLink>
              <NavLink to="/aboutUs">
                <li>
                  <a>About Us</a>
                </li>
              </NavLink>
              <NavLink to="/features">
                <li>
                  <a>Features</a>
                </li>
              </NavLink>
              <NavLink to="/purchase">
                <li>
                  <a>Purchase</a>
                </li>
              </NavLink>
              <NavLink to="/contactUs">
                <li>
                  <a>ContactUs</a>
                </li>
              </NavLink>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
