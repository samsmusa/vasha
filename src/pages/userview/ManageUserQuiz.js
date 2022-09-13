import React from "react";
import { BiEdit } from "react-icons/bi";
import { Link, useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import Progress from "./../../components/Progress";
import { toast } from "react-toastify";
import QuizAttemps from "./QuizAttemps";

const ManageUserQuiz = () => {
  const navigate = useNavigate()
  const { id } = useParams();
  const [quiz, setQuiz] = React.useState({});
  const [attemp, setAttemp] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    axios
      .get(`http://127.0.0.1:8000/takequiz/${id}`, {
        headers: {
          Authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : null,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          setQuiz(res.data?.quiz);
          setAttemp(res?.data?.qtattemp);
          setLoading(false);
        }
      });
    // axios.get(`http://127.0.0.1:8000/takequiz/?quiz_id=${id}`,{ headers: {
    //   Authorization: localStorage.getItem("access_token")
    //     ? "Bearer " + localStorage.getItem("access_token")
    //     : null,
    //   "Content-Type": "application/json",
    //   accept: "application/json",
    // }}).then((res) => {
    //   console.log(res);
    //   if (res.status === 200) {
    //     setQuiz(res.data?.quiz);
    //     setLoading(false);
    //   }
    // });
  }, [id]);

  function handleAttemp(){
    const data = {}
    data.quiz_take = id
     axios.post(`http://127.0.0.1:8000/attemp/`,data,{ headers: {
      Authorization: localStorage.getItem("access_token")
        ? "Bearer " + localStorage.getItem("access_token")
        : null,
      "Content-Type": "application/json",
      accept: "application/json",
    }}).then((res) => {
      console.log(res);
      if (res.status === 201) {
        const from = `/dashboard/quiz/${id}/${res.data.id}`
        navigate(from, { replace: true });
      }
    });
  }
  if (loading) {
    return <Progress />;
  }

  return (
    <div>
      <div>
        <div
          className="hero min-h-1/2"
          style={{ backgroundImage: "url(https://placeimg.com/1000/800/arch)" }}
        >
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="text-left group">
              <h1 className="mb-5 text-5xl font-bold flex justify-between ">
                {quiz?.title}
                <span className="group-hover:block hidden cursor-pointer text-2xl">
                  <BiEdit />
                </span>
              </h1>
              <p className="text-left">{quiz?.description}</p>
              <div className=" grid grid-cols-4 gap-4 ">
                <p className="mb-5">quiz time:</p>
                <p className="mb-5">
                  {quiz?.quiz_duration &&
                    Math.floor(quiz?.quiz?.quiz_duration / 60)}{" "}
                  min{" "}
                  {quiz?.quiz_duration &&
                    quiz?.quiz_duration -
                      Math.floor(quiz?.quiz_duration / 60) * 60}{" "}
                  sec
                </p>
                <p>max atemps</p>
                <p>{quiz?.retake}</p>
                <p>per attemps question</p>
                <p>14</p>
                <p>Show answer per question submit</p>
                <p>Yes</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-between text-xl font-bold text-white text-left  bg-indigo-500 p-4">
        <p className="">
          See all Atemps
        </p>
        <button onClick={handleAttemp} className="btn btn-sm bg-success border-none text-white">Try a</button>
      </div>

      <QuizAttemps allattemp={attemp} />
    </div>
  );
};

export default ManageUserQuiz;
