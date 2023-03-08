/* eslint-disable jsx-a11y/anchor-is-valid */
import logo from "assets/logo.png";
import avatar from "assets/avatar.jpg";
import { Link } from "react-router-dom";
import { routeNames } from "routes/route";

interface NavBarProps {
  user: {
    userId: string;
    firstName: string;
    lastName: string;
    lastLogin: string;
    country: string;
    role: string;
    fbURL: string;
    instaURL: string;
    linkedinURL: string;
    designer: string;
  } | null;
  onLogout: () => void;
}

const NavBar2: React.FC<NavBarProps> = ({ user, onLogout }) => {
  return (
    <div>
      <div className="flex justify-between w-full h-[70px] bg-black pt-3">
        {/* Logo  */}
        <div className="w-[60px] h-[60px] ml-5">
          <Link to={routeNames.Overview}>
            <img src={logo} alt="" className="align-middle" />
          </Link>
        </div>

        {/* Menu Items */}
        <div className="flex mt-[20px] text-[#FEC850]">
          <ul>
            <li className="space-x-[50px] text-sm font-light">
              <Link to={routeNames.Overview}>Overview</Link>
              <Link to={routeNames.JoinUs}>Join Us</Link>
              <div className="content-center dropdown dropdown-hover">
                <label tabIndex={0} className="p-[10px] hover:text-white">
                  Start
                </label>
                <ul
                  tabIndex={0}
                  className="p-2 mt-2 shadow bg-[#171717] dropdown-content menu rounded-box w-52 "
                >
                  <li>
                    <Link
                      className="hover:bg-black focus:bg-[#171717]"
                      to={routeNames.NewDesign}
                    >
                      New Design
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="hover:bg-black focus:bg-[#171717]"
                      to={routeNames.ResourceDesign}
                    >
                      Resource Design
                    </Link>
                  </li>
                </ul>
              </div>
              <Link to={routeNames.Community}>Community</Link>
              <Link to={routeNames.SayHello}>Say Hello</Link>
            </li>
          </ul>
        </div>

        {user ? (
          <>
            {/* Profile Avatar */}
            <div className="Avatar">
              <div className="relative mt-3 align-middle mr-7 ">
                {/* Profile Dropdown */}
                <div className="dropdown dropdown-end">
                  <label tabIndex={0} className="">
                    <div>
                      <img
                        className="w-10 h-10 rounded-full"
                        src={avatar}
                        alt=""
                      />
                      <span className="top-0 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
                    </div>
                  </label>

                  <ul
                    tabIndex={0}
                    className="p-2 shadow bg-[#171717] dropdown-content menu rounded-box w-52"
                  >
                    <li>
                      <Link
                        className="hover:bg-black focus:bg-[#FEC850]"
                        to={routeNames.Profile}
                      >
                        {user?.firstName}
                      </Link>
                    </li>
                    <li>
                      <Link
                        className="hover:bg-black focus:bg-[#FEC850]"
                        to={routeNames.ProfileSetup}
                      >
                        Profile Setup
                      </Link>
                    </li>
                    {user?.role === "ADMIN" && (
                      <li>
                        <Link
                          className="hover:bg-black focus:bg-[#FEC850]"
                          to={routeNames.Profile}
                        >
                          Admin DashBoard
                        </Link>
                      </li>
                    )}
                    <li>
                      <button onClick={onLogout}>Logout</button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </>
        ) : (
          <>
            <div>
              <ul className="flex list-none">
                <li className="inline-block mt-3 mr-4">
                  <Link
                    className="hover:bg-black focus:bg-[#FEC850]"
                    to={routeNames.Login}
                  >
                    <button className="btn1">Log In</button>
                  </Link>
                </li>
                <li className="inline-block mt-3 mr-4">
                  <Link
                    className="hover:bg-black focus:bg-[#FEC850] "
                    to={routeNames.Register}
                  >
                    <button className="btn1">Register</button>
                  </Link>
                </li>
              </ul>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar2;
