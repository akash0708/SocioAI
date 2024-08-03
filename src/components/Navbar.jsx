import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import { RxCross2 } from "react-icons/rx";

function Navbar() {
  const [menuopen, setmenuopen] = useState(false);

  return (
    <header className="w-full h-100px top-0 shadow-xl">
      <nav className=" flex justify-between items-center h-[100%] pt-3 pb-3 px-5">
        <div className="icon font-gothic font-[900] text-4xl">
          <span className="text-[#1D2E28]">Socio</span>
          <span className="text-black">AI</span>
        </div>

        <div
          className={
            menuopen
              ? "nav-side-bar flex bg-[#18392B] absolute top-0 right-0 h-[100%] w-[50%] shadow-xl md:shadow-none md:relative md:right-[none] md:top-[none] md:w-[70%] lg:w-[55%] md:bg-transparent md:h-auto"
              : "hidden md:flex md:relative md:w-[70%] lg:w-[45%]"
          }
        >
          <ul className="flex flex-col justify-start gap-9 items-center py-3 w-full text-xl font-bold md:flex-row md:justify-between md:items-center md:gap-0 ">
            <div
              className={
                "cross-mobile md:hidden text-white font-extrabold text-5xl flex justify-end items-center w-[100%] h-14 right-6 relative"
              }
              onClick={() => {
                setmenuopen(false);
              }}
            >
              <RxCross2 />
            </div>

            <li>
              {" "}
              <NavLink
                to="/"
                className={({ isActive }) =>
                  ` duration-200 ${
                    isActive
                      ? "underline text-[#0A5C36] "
                      : "text-white md:text-[#18392B]"
                  }  hover:text-[#0A5C36] hover:underline`
                }
              >
                HOME
              </NavLink>
            </li>
            <li>
              {" "}
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  ` duration-200 ${
                    isActive
                      ? "underline text-[#0A5C36]"
                      : "text-white md:text-[#18392B]"
                  }  hover:text-[#0A5C36] hover:underline`
                }
              >
                ABOUT
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/register"
                className={({ isActive }) =>
                  ` duration-200 ${
                    isActive
                      ? "underline text-[#0A5C36]"
                      : "text-white md:text-[#18392B]"
                  }  hover:text-[#0A5C36] hover:underline`
                }
              >
                REGISTER
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contactus"
                className={({ isActive }) =>
                  ` duration-200 ${
                    isActive
                      ? "underline text-[#0A5C36]"
                      : "text-white md:text-[#18392B]"
                  }  hover:text-[#0A5C36] hover:underline`
                }
              >
                CONTACT US
              </NavLink>
            </li>
            <li>
              <Link to="/#login">
                <div className="login py-1 w-[120px] rounded-[6px] bg-white text-[#18392B] md:bg-[#18392B] md:text-white flex justify-center items-center hover:bg-[#0A5C36] hover:text-gray-50">
                  Log In
                </div>
              </Link>
            </li>
          </ul>
        </div>

        <div
          className="menu md:hidden flex flex-col right-2 top-3 justify-between h-6 w-9 z-10"
          onClick={() => {
            setmenuopen(!menuopen);
          }}
        >
          <span className="bg-[#18392B] h-1 w-[100%] rounded-md"></span>
          <span className="bg-[#18392B] h-1 w-[100%] rounded-md"></span>
          <span className="bg-[#18392B] h-1 w-[100%] rounded-md"></span>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
