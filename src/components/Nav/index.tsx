import { useState } from "react";
import Logo from "../../assets/logo.png";
import useMediaQuery from "../hooks/useMediaQuery";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink } from "react-router-dom";

export const Navigation = () => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  const isAboveMediumScreens = useMediaQuery("(min-width: 760px)");

  return (
    <main>
      <nav className="absolute ">
        <div className={`${flexBetween} py[3rem] `}>
          <div
            className={`${flexBetween} mx-auto w-full text-center justify-between`}
          >
            <div
              className={`$ flex items-center justify-between w-full gap-16 px-[5rem] py-[3rem]`}
            >
              {/* LEFT SIDE */}

              <img src={Logo} alt="" className="w-[45%] md:w-[15%]" />
              {/* RIGHT SIDE */}
              {isAboveMediumScreens ? (
                <div className={`${flexBetween}  `}>
                  <div
                    className={`${flexBetween} gap-8  bg-navback p-1 rounded-md`}
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
                  className="rounded-full bg-card p-2"
                  onClick={() => setIsMenuToggled(!isMenuToggled)}
                >
                  <FaBars className="w-10 text-white" />
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
                  <FaTimes className="w-10" />
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
    </main>
  );
};
