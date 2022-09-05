import React from "react";

const CreateQuiz = () => {
  function handleSubmit(e) {
    e.preventDefault();
    console.log("j");
  }
  return (
    <div>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <form onSubmit={handleSubmit}>
            <div className="form-control w-full">
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz Name</span>
                <input
                  type="text"
                  placeholder="Type here"
                  class=" col-span-2 input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="label  grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz Description</span>
                <textarea
                  class="col-span-2 textarea textarea-bordered scroll"
                  placeholder="Bio"
                ></textarea>
              </label>
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz Time</span>
                <input
                  type="text"
                  placeholder="Type here"
                  class=" col-span-2 input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz Attemps</span>
                <input
                  type="text"
                  placeholder="Type here"
                  class=" col-span-2 input input-bordered w-full max-w-xs"
                />
              </label>
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">
                  Quiz Question Per submit
                </span>
                <div className="flex justify-between">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text px-2">Yes</span>
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio checked:bg-red-500"
                        checked
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text px-2">No</span>
                      <input
                        type="radio"
                        name="radio-6"
                        className="radio checked:bg-blue-500"
                        checked
                      />
                    </label>
                  </div>
                </div>
              </label>
              <label className="label  grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz picture</span>
                <input type="file" class="col-span-2 input w-full max-w-xs" />
              </label>
              <label className="label  grid grid-cols-3 justify-between">
                <button className="btn btn-sm btn-success">Save</button>
              </label>
            </div>
          </form>
        </label>
      </label>
    </div>
  );
};

export default CreateQuiz;
