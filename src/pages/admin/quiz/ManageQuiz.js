import React from "react";
import { BiEdit } from "react-icons/bi";
import { MdOutlineDelete } from "react-icons/md";
import { AiOutlineEdit } from "react-icons/ai";
// import QuizAttemps from "../../../components/QuizAttemps";
import QiuzQuestion from "../../../components/QiuzQuestion";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Progress from "../../../components/Progress";
import { toast } from "react-toastify";

const ManageQuiz = () => {
  const { id } = useParams();
  const [quiz, setQuiz] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    axios.get(`http://127.0.0.1:8000/quiz/${id}/`).then((res) => {
      console.log(res);
      if (res.status === 200) {
        setQuiz(res.data);
        setLoading(false);
      }
    });
  }, [id]);
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
                {quiz.title}
                <span className="group-hover:block hidden cursor-pointer text-2xl">
                  <BiEdit />
                </span>
              </h1>
              <p className="text-left">{quiz?.description}</p>
              <div className=" grid grid-cols-4 gap-4 ">
                <p className="mb-5">quiz time:</p>
                <p className="mb-5">
                  {quiz?.quiz_duration && Math.floor(quiz?.quiz_duration / 60)}{" "}
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

      <div className="text-xl font-bold text-white text-left p-4  bg-indigo-500 flex justify-between">
        <p className="">Manage Questions</p>
        <Link to={`createquestion`}>
          <button className="btn btn-sm ">Add Questions</button>
        </Link>
      </div>
      <QiuzQuestion quizid={id} />

      <p className="text-xl font-bold text-white text-left p-4  bg-indigo-500">
        See all Atemps
      </p>

      {/* <QuizAttemps quizid={id} /> */}
    </div>
  );
};

export default ManageQuiz;
