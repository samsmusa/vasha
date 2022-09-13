import axios from "axios";
import React from "react";
import { AiOutlineEdit } from "react-icons/ai";
import { MdOutlineDelete } from "react-icons/md";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import LoadData from "../hooks/LoadData";

const QiuzQuestion = ({ quizid }) => {
  const [questions, setQuestions] = React.useState(null);
  const { isLoading, error, data, refetch } = LoadData(
    `http://127.0.0.1:8000/quizobj/${quizid}`,
    [quizid]
  );

  function deleteQuestion(id) {
    axios
      .delete(`http://127.0.0.1:8000/quiz/${quizid}/question/${id}`, {
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
        if (res.status === 204) {
          toast.success("question delete ");
          refetch();
        }
      })
      .catch((error) => {
        toast.error("something wrong ");
      });
  }
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Name</th>
            <th>options</th>
            <th>success rate</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {data &&
            data?.questions.map((e) => (
              <tr>
                <td>{e.question}</td>
                <td>{e?.options.length}</td>
                <td>94%</td>
                <th>
                  <label className="flex justify-start">
                    <MdOutlineDelete
                      onClick={() => deleteQuestion(e.id)}
                      className="mx-2 text-red-500 text-xl cursor-pointer"
                    />
                    <Link to={`editquestion/${e.id}`}>
                      <AiOutlineEdit className="text-warning text-xl mx-2 cursor-pointer" />
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

export default QiuzQuestion;
