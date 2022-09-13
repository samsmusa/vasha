import React from "react";
import useAuthState from "./useAuthState";
import { Link, NavLink, useLocation } from "react-router-dom";

const Navbar = () => {
  const { user, error, loading } = useAuthState();
  const navlinkclass =
    "after:content-[''] after:block after:w-0 after:h-1 after:bg-white after:ease-in after:duration-300 hover:after:w-full text-white normal-case text-lg  font-roboto font-light rounded px-2";

  function handleLogout() {
    localStorage.removeItem("access_token");
    window.location.reload(false);
  }
  return (
    <div className="bg-indigo-500 font-rubik">
      <div className="navbar container mx-auto  ">
        <div className="flex-1 ">
          <Link to="/" className="btn btn-ghost text-white normal-case text-xl">
            vasha
          </Link>
        </div>
        <div className="flex-none gap-2">
          <Link to="/" className={navlinkclass}>
            HOME
          </Link>
          <span className="text-white text-lg font-bold hidden md:block">
            |
          </span>
          <Link to="/quiz" className={navlinkclass}>
            QUIZ
          </Link>
          <span className="text-white text-lg font-bold hidden md:block">
            |
          </span>
          {user && (
            <Link to="/dashboard" className={navlinkclass}>
              My Quiz
            </Link>
          )}
          {!user && (
            <Link to="/login" className={navlinkclass}>
              LOGIN
            </Link>
          )}
          {user && (
            <div className="dropdown dropdown-end">
              <label tabIndex="0" className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  <img src="https://placeimg.com/80/80/people" />
                </div>
              </label>
              <ul
                tabIndex="0"
                className="mt-3 p-2 shadow menu menu-compact dropdown-content bg-base-100 rounded-box w-52"
              >
                <li>
                  <a className="justify-between">{user.first_name}</a>
                </li>
                <li>
                  <a>Settings</a>
                </li>
                <li className="cursor-pointer">
                  <p onClick={handleLogout}>Logout</p>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
