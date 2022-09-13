import axios from "axios";
import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
// import useAxios from "./useAxios";

const CreateQuiz = ({ quizdata, refetch }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  function SetDefaultValue() {
    reset({
      title: quizdata?.title,
      description: quizdata?.description,
      quiztimemin: quizdata?.quiztimemin,
      quiztimesec: quizdata?.quiztimesec,
      see_answer_after_submit: quizdata?.see_answer_after_submit,
      retake: quizdata?.retake,
      per_question_time: quizdata?.per_question_time,
      paid: quizdata?.paid,
      image: quizdata?.image,
    });
  }
  const onSubmit = (data) => {
    console.log("h");
    const { quiztimemin, quiztimesec, image, ...res } = data;

    res.quiz_duration = quiztimemin * 60 + quiztimesec;
    res.image = image[0];
    // var fileObject =image[0];

    console.log(res);
    const formData = new FormData();
    for (const name in res) {
      formData.append(name, res[name]);
    }

    axios
      .post("http://127.0.0.1:8000/quiz/", res, {
        headers: {
          Authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : null,
          "Content-Type": "multipart/form-data",
          accept: "application/json",
        },
      })
      .then((res) => {
        if (res.status === 201) {
          toast.success("quiz Create ");
          reset();
          refetch();
        }
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });
  };
  return (
    <div>
      <input type="checkbox" id="my-modal-4" class="modal-toggle" />
      <label for="my-modal-4" class="modal cursor-pointer">
        <label class="modal-box relative" for="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-control w-full">
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz Name</span>
                <input
                  {...register("title", { required: true })}
                  type="text"
                  placeholder="Type here"
                  class={`${
                    errors.title && "border-red-500"
                  } col-span-2 input input-bordered w-full max-w-xs`}
                />
              </label>
              <label className="label  grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz Description</span>
                <textarea
                  {...register("description")}
                  class="col-span-2 textarea textarea-bordered scroll"
                  placeholder="Bio"
                ></textarea>
              </label>
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz Time</span>
                <div className="flex items-center justify-evenly">
                  <input
                    {...register("quiztimemin", { required: true })}
                    type="number"
                    placeholder="min"
                    class={`${
                      errors.quiztimemin && "border-red-500"
                    } col-span-2 input input-bordered w-16`}
                  />
                  <span className="font-extrabold text-3xl">:</span>
                  <input
                    {...register("quiztimesec", { required: true })}
                    type="number"
                    placeholder="sec"
                    class={`${
                      errors.quiztimesec && "border-red-500"
                    } col-span-2 input input-bordered w-16`}
                  />
                </div>
              </label>
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz Attemps</span>
                <input
                  {...register("retake", { required: true })}
                  type="number"
                  placeholder="Type here"
                  class={`${
                    errors.retake && "border-red-500"
                  } col-span-2 input input-bordered w-full max-w-xs`}
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
                        {...register("see_answer_after_submit", {
                          required: true,
                        })}
                        type="radio"
                        value={true}
                        className={`${
                          errors.see_answer_after_submit && "border-red-500"
                        } radio checked:bg-red-500`}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text px-2">No</span>
                      <input
                        {...register("see_answer_after_submit", {
                          required: true,
                        })}
                        type="radio"
                        value={false}
                        className={`${
                          errors.see_answer_after_submit && "border-red-500"
                        } radio checked:bg-blue-500`}
                      />
                    </label>
                  </div>
                </div>
              </label>
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">
                  Quiz Answer Per submit
                </span>
                <div className="flex justify-between">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text px-2">Yes</span>
                      <input
                        {...register("per_question_time", { required: true })}
                        type="radio"
                        value={true}
                        className={`${
                          errors.per_question_time && "border-red-500"
                        } radio checked:bg-red-500`}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text px-2">No</span>
                      <input
                        {...register("per_question_time", { required: true })}
                        type="radio"
                        value={false}
                        className={`${
                          errors.per_question_time && "border-red-500"
                        } radio checked:bg-blue-500`}
                      />
                    </label>
                  </div>
                </div>
              </label>
              <label className="label grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">paid</span>
                <div className="flex justify-between">
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text px-2">Yes</span>
                      <input
                        {...register("paid", { required: true })}
                        type="radio"
                        value={true}
                        className={`${
                          errors.paid && "border-red-500"
                        } radio checked:bg-green-500`}
                      />
                    </label>
                  </div>
                  <div className="form-control">
                    <label className="label cursor-pointer">
                      <span className="label-text px-2">No</span>
                      <input
                        {...register("paid", { required: true })}
                        type="radio"
                        value={false}
                        className={`${
                          errors.paid && "border-red-500"
                        } radio checked:bg-blue-500`}
                      />
                    </label>
                  </div>
                </div>
              </label>
              <label className="label  grid grid-cols-3 justify-between">
                <span className="col-span-1 label-text">Quiz picture</span>
                <input
                  {...register("image", { required: true })}
                  type="file"
                  class={`${
                    errors.image ? "border-red-500" : ""
                  } col-span-2 input input-bordered w-full max-w-xs`}
                />
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
