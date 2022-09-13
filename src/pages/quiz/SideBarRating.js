import React from "react";

const SideBarRating = ({rate}) => {
  return (
    <div className="form-control  w-full">
      <label className="label cursor-pointer flex justify-between">
        <input
          // onClick={() => setIsMultiple(false)}
          type="radio"
          name="rate"
          className={`radio bg-white checked:bg-indigo-500`}
          // checked={!isMultiple}
        />
        <div className="rating">
          {
            [...Array(rate)].map((e, index)=> <input
              // type="radio"
              key={index}
              disabled
              name="rating-2"
              className="mask mask-star-2 bg-white"
            />)
          }
          
          {
            [...Array(5-rate)].map((e, index)=><input
            // type="radio"
            key={index}
            disabled
            name="rating-2"
            className="mask mask-star-2 bg-slate-400"
          />)
          }
        </div>
      </label>
    </div>
  );
};

export default SideBarRating;
