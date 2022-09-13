import React from "react";
import { Link, Outlet } from "react-router-dom";

const AdminDashboard = () => {
  const sideLinkStyle = "hover:bg-indigo-500 hover:text-white rounded";
  return (
    <div className="container mx-auto">
      <div className="drawer drawer-mobile">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center">
          <label
            htmlFor="my-drawer-2"
            className="btn btn-primary drawer-button lg:hidden"
          >
            Open drawer
          </label>
          <div className="mx-2 self-start min-w-full">
            <Outlet></Outlet>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
          <ul className="menu p-4 overflow-y-auto w-60 bg-indigo-100 text-base-content ">
            <ul className="bg-indigo-200">
              <li className={sideLinkStyle}>
                <Link to="quiz">Manage Quiz</Link>
              </li>
              <li className={sideLinkStyle}>
                <Link to="user">Manage User</Link>
              </li>
              <li className={sideLinkStyle}>
                <Link to="order">Manage Orders</Link>
              </li>
              <li className={sideLinkStyle}>
                <Link to="transaction">see all transacion</Link>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
