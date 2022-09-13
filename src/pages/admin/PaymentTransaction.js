import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import {BsFillCheckCircleFill} from 'react-icons/bs'
import {RiBatteryShareFill} from 'react-icons/ri'

const PaymentTransaction = () => {
  return (
    <div className="">
      <div>
        <p className="text-xl font-bold p-3 text-left bg-warning text-white">
          Request for Paid Quiz
        </p>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>user</th>
                <th>date</th>
                <th>quiz</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">23/23/23</div>
                      <div className="text-sm opacity-50">United States...</div>
                    </div>
                  </div>
                </td>
                <td>
                  23/23/23
                </td>
                <td>Purple......</td>
                <th>
                <label className="flex justify-start items-center">
                <MdOutlineDelete fill="red" className="text-red-500 text-3xl mx-2 cursor-pointer" />
                <BsFillCheckCircleFill fill="green"  className="text-white text-3xl cursor-pointer" />
                </label>
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="my-3">
        <p className="text-xl font-bold p-3 text-left bg-success text-white">
          Paid Quiz Users
        </p>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>user</th>
                <th>date</th>
                <th>quiz</th>
                <th>transaction id</th>
                <th>refund</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">Hart Hagerty</div>
                      <div className="text-sm opacity-50">United States</div>
                    </div>
                  </div>
                </td>
                <td>
                  12/12/12
                </td>
                <td>Purple</td>
                <th>
                  sdfsdf2323dfsd
                </th>
                <th>
                  <RiBatteryShareFill fill="green" className="text-3xl cursor-pointer" />
                </th>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default PaymentTransaction;
