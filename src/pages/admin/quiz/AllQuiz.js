import React from "react";
import axios from "axios";
import Progress from "../../../components/Progress";
import { FcViewDetails } from "react-icons/fc";
import { Link } from "react-router-dom";
import CreateQuiz from "./CreateQuiz";
import LoadData from "../../../hooks/LoadData";

const AllQuiz = () => {
  // const [quiz, setQuiz] = React.useState([]);
  // const [loading, setLoading] = React.useState(true);
  const {
    data: quiz,
    isLoading,
    refetch,
  } = LoadData("http://127.0.0.1:8000/quiz/", ["allquiz"]);

  if (isLoading) {
    return <Progress />;
  }
  return (
    <div className="overflow-x-auto w-full">
      <div className="flex justify-between text-left bg-success p-2 text-white font-bold text-xl px-4">
        <p className="">all quiz QuizList</p>
        <label
          for="my-modal-4"
          class="btn btn-sm bg-white text-black shadow border-none hover:text-white"
        >
          Add new
        </label>
      </div>
      <table className="table w-full">
        <thead>
          <tr>
            <th>title</th>
            <th>taken</th>
            <th>success rate</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {quiz &&
            quiz?.map((e) => (
              <tr key={e.id}>
                <td>{e.title}</td>
                <td>{e?.taken}</td>
                <td>94%</td>
                <th>
                  <label className="flex justify-start">
                    <Link to={`${e.id}`}>
                      <FcViewDetails className="mx-2 text-blue-200 text-xl cursor-pointer" />
                    </Link>
                  </label>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
      <CreateQuiz refetch={refetch} />
    </div>
  );
};

export default AllQuiz;
