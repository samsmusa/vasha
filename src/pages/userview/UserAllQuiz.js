import React from "react";
import axios from "axios";
import Progress from "./../../components/Progress";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import LoadData from "./../../hooks/LoadData";

const UserAllQuiz = () => {
  // const [quiz, setQuiz] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);
  const {
    data: quiz,
    isLoading,
    refetch,
  } = LoadData("http://127.0.0.1:8000/takequiz/", ["allquiz"]);
  if (isLoading) {
    return <Progress />;
  }
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-between text-left bg-success p-2 text-white font-bold text-xl px-4">
        <p className="">My QuizList</p>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>title</th>
            <th>Remain attemp</th>
            <th>Max Attemp</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {quiz &&
            quiz?.map((e) => (
              <tr key={e.id}>
                <td>{e?.quiz.title}</td>
                <td>{e?.quiz.retake - e?.attemp}</td>
                <td>{e?.quiz.retake}</td>
                <th>
                  <label className="flex justify-start">
                    <Link to={`quiz/${e.id}`}>
                      <FcViewDetails className="mx-2 text-blue-200 text-xl cursor-pointer" />
                    </Link>
                  </label>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserAllQuiz;
