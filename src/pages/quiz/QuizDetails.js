import React from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Progress from "../../components/Progress";
import { BiTime, BiQuestionMark, BiGroup } from "react-icons/bi";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { TbGeometry } from "react-icons/tb";

const QuizDetails = () => {
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
    <div className="bg-base-200">
      <div className="container mx-auto">
        <div className="grid grid-cols-3 gap-4">
          <div className="bg-white p-4 text-left rounded">
            <p>
              <span className="text-xl font-rubik font-bold">Quiz Type: </span>
              Percentage
            </p>
            <p>
              The phone comes with a 5.20-inch touchscreen display offering a
              resolution of 1080x1920 pixels. Sony Xperia XZ is powered by a
              1.6GHz quad-core Qualcomm
            </p>
          </div>
          <div className="bg-white p-4 text-left rounded">
            <img className="w-full h-80" src={quiz?.image} alt="image_quiz" />
          </div>
          <div className="bg-green-400 flex flex-col justify-between text-left rounded">
            <p></p>
            <div className="text-white text-center">
              <p className="text-xl">your score is Awesome</p>
              <p className="font-roboto text-2xl font-bold bg-white text-green-500">
                your score 100% awesome
              </p>
              <p className="text-xs px-20">
                your score The phone comes with a 5.20-inch touchscreen display
                offering a resolution of 1080x1920 pixels. Sony Xperia XZ is
                powered by a 1.6GHz quad-core Qualcomm
              </p>
            </div>
            <p className="bg-white p-3 text-xl font-bold">hello</p>
          </div>
        </div>

        <div className="bg-white my-2">
          <p className="p-4 bg-white text-left font-bold font-roboto border border-b-2">
            QUIZ STRUCTURE
          </p>
          <div className="grid grid-cols-12 gap-2 items-center ">
            <div className="col-span-2 bg-base-100 m-4 rounded flex-col flex justify-center items-center p-4">
              <TbGeometry className="text-7xl text-slate-400" />
              <span>max attemp: 4</span>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <MdOutlineArrowForwardIos className="text-5xl" />
            </div>
            <div className="col-span-2 bg-base-100 m-4 rounded flex-col flex justify-center items-center p-4">
              <BiTime className="text-7xl text-slate-400" />
              <span>30:15</span>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <MdOutlineArrowForwardIos className="text-5xl" />
            </div>
            <div className="col-span-2 bg-base-100 m-4 rounded flex-col flex justify-center items-center p-4">
              <BiQuestionMark className="text-7xl text-slate-400" />
              <span>15</span>
            </div>
            <div className="col-span-1 flex justify-center items-center">
              <MdOutlineArrowForwardIos className="text-5xl" />
            </div>
            <div className="col-span-2 bg-base-100 m-4 rounded flex-col flex justify-center items-center p-4">
              <BiGroup className="text-7xl text-slate-400" />
              <span>50</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuizDetails;
