import React from "react";
import { Link } from "react-router-dom";

const Quiz = ({ data }) => {
  return (
    <div className={`card  shadow-[inset_0_0_99999px_rgba(63,81,200,1)]`}>
      <div className="font-roboto text-xl text-white items-start text-left ml-6 my-2">
        Brain
      </div>
      <figure className="mx-6 my-2 border-2 border-white">
        <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
      </figure>
      <div className="card-body text-white">
        <h2 className="card-title text-lg text-left">
          <Link to={`/quiz/${data.id}`}>{data.title}</Link>
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p className="text-left">
          {data.description} lorem dkf sdfkd sfsd fsdfj sdfjs fsd sdj fdskfj
          sdfjds fdkjfd fdslf dsfjsdkf....
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">{data.taken}</div>
        </div>
      </div>
    </div>
  );
};

export default Quiz;
