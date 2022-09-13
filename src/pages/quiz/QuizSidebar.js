import React from "react";
import SideBarRating from "./SideBarRating";

const QuizSidebar = () => {
  return (
    <div className="p-4 text-white font-extrabold text-xl text-left">
      <div className="col-span-1 flex flex-col items-start m-2 shadow bg-indigo-500 p-4 rounded">
        <p>Sort with Price</p>
        <div className="form-control w-full">
          <label className="label cursor-pointer flex justify-between">
            <span className="label-text text-white">Free</span>
            <input
              // onClick={() => setIsMultiple(true)}
              type="radio"
              name="multiple"
              className={`radio bg-white checked:bg-indigo-500`}
              // checked={isMultiple}
            />
          </label>
        </div>
        <div className="form-control  w-full">
          <label className="label cursor-pointer flex justify-between">
            <span className="label-text text-white">Paid</span>
            <input
              // onClick={() => setIsMultiple(false)}
              type="radio"
              name="sigle"
              className={`bg-white radio checked:bg-indigo-500`}
              // checked={!isMultiple}
            />
          </label>
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-start m-2 shadow bg-indigo-500 p-4 rounded">
        <p>Sort with Type</p>
        <div className="form-control w-full">
          <label className="label cursor-pointer flex flex-col items-start">
            <span className="label-text w-full hover:bg-indigo-300 hover:text-indigo-600 p-2 px-4 text-white">
              All
            </span>
            <span className="label-text w-full hover:bg-indigo-300 hover:text-indigo-600 p-2 px-4 text-white">
              Technical
            </span>
            <span className="label-text w-full hover:bg-indigo-300 hover:text-indigo-600 p-2 px-4 text-white">
              Public
            </span>
            <span className="label-text w-full hover:bg-indigo-300 hover:text-indigo-600 p-2 px-4 text-white">
              Physics
            </span>
            <span className="label-text w-full hover:bg-indigo-300 hover:text-indigo-600 p-2 px-4 text-white">
              Chemistry
            </span>
          </label>
        </div>
      </div>

      <div className="col-span-1 flex flex-col items-start m-2 shadow bg-indigo-500 p-4 rounded">
        <p>Sort with Rating</p>
        <div className="form-control w-full">
          <label className="label cursor-pointer flex flex-col items-start">
            <div className="form-control  w-full">
              <label className="label cursor-pointer flex justify-between">
                <input
                  type="radio"
                  name="rate"
                  className={`radio bg-white checked:bg-indigo-500`}
                />
                <label>All</label>
              </label>
            </div>
            <SideBarRating rate={1} />
            <SideBarRating rate={2} />
            <SideBarRating rate={3} />
            <SideBarRating rate={4} />
            <SideBarRating rate={5} />
          </label>
        </div>
      </div>
    </div>
  );
};

export default QuizSidebar;
