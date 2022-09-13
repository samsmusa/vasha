import axios from "axios";
import React from "react";
import Progress from "../../components/Progress";
import Quiz from "./Quiz";
import QuizSidebar from "./QuizSidebar";

const QuizList = () => {
  const [quiz, setQuiz] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  React.useEffect(() => {
    axios.get("http://127.0.0.1:8000/quiz/").then((res) => {
      setQuiz(res.data);
      setLoading(false);
    });
  }, []);

  if (loading) {
    return <Progress />;
  }
  return (
    <div className="container mx-auto ">
      <p className="text-left border-l-8 text-3xl font-bold border-indigo-500 my-6 pl-2">
        {" "}
        Quiz list <span className="text-indigo-500 font-extrabold">>></span>
      </p>
      <div className="grid md:grid-cols-4 gap-10  mx-10 md:my-2  md:mx-20">
        <div className="col-span-1 bg-indigo-300 h-min-screen">
          <QuizSidebar />{" "}
        </div>
        <div className="md:col-span-2 grid md:grid-cols-3 gap-9">
          {quiz.map((e) => (
            <Quiz key={e.id} data={e} />
          ))}
        </div>
        <div className="col-span-1 bg-indigo-300 h-min-screen"> </div>
      </div>
    </div>
  );
};

export default QuizList;
