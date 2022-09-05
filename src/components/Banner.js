import React from "react";

const Banner = () => {
  return (
    <div className="">
      <div
        className="card w-full  shadow-xl image-full bg-opacity-50"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1506770047154-dfed3ac3db4e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1287&q=80)",
        }}
      >
        <div className="card-body bg-white bg-opacity-0 text-indigo-500">
          <h2 className="card-title text-indigo-500">Shoes!</h2>
          <p className="text-indigo-500">
            If a dog chews shoes whose shoes does he choose?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
