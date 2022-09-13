import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useParams } from "react-router-dom";
import RadialTimer from "./RadialTimer";
import CountDown from "./CountDown";
const question = {
  question: "what is your name ? ",
  multiple: false,
  options: [
    {
      id: 1,
      value: "a",
    },
    {
      id: 2,
      value: "b",
    },
    {
      id: 3,
      value: "c",
    },
    {
      id: 4,
      value: "d",
    },
  ],
};

const Question = () => {
  const { quiz_taken, attemp } = useParams();
  const [questions, setQuestions] = useState([]);
  const [question, setQuestion] = useState([]);
  const [quiz, setQuiz] = useState({});
  const [count, setCount] = useState(1);
  const [timeup, setTimeup] = useState(false);
  const [answer, setAnswer] = useState([])
  const [options, setOptions] = useState([])
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const getAllData = async () => {
    let quiz_id;
    await axios
      .get(`http://127.0.0.1:8000/takequiz/4/`, {
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
          setQuiz(res.data.quiz);
          console.log(res.data.quiz)
          quiz_id = res.data.quiz.id;
        }
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });

    axios
      .get(`http://127.0.0.1:8000/quiz/2/question/`, {
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
          setQuestions(res.data);
          setQuestion(res.data[0]);
          setAnswer([{question:res.data[0].id}])
        }
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });
  };

  useEffect(() => {
    getAllData();
  }, []);

  function handleRadio(event){
    if (event.target.checked && !question.multiple){
      setOptions([parseInt(event.target.value)])
      console.log('true')
    }
  }

  function handleChecked(event, i){
    if(event.target.checked){
      setOptions([...options, parseInt(event.target.value)])
    }else{
      setOptions(options.filter(e=>e !== parseInt(event.target.value)))
    }
  }

  function handleNext() {
    if (count < questions.length) {
      setQuestion(questions[count]);
      answer[count-1].options = [...options]
      setAnswer([...answer, {question:questions[count].id}])
      setCount(count + 1);
      setOptions([])
    }
  }

  function onSubmit() {
    answer[count-1].options = [...options]
    const data = {}
    data.attemp = parseInt(attemp)
    data.quiz_take = parseInt(quiz_taken)
    data.submissions = answer
    console.log(data)
    // data.question = 1;
    // data.answer = [1, 2, 3];
    axios
      .post("http://127.0.0.1:8000/submit/", data, {
        headers: {
          Authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : null,
          "Content-Type": "application/json",
          accept: "application/json",
        },
      })
      .then((res) => {
        console.log(res)
        if (res.status === 201) {
          // reset();
        }
      })
      .catch((error) => {
        console.log("the error has occured: " + error);
      });
  }
  return (
    <div className="m-4 py-4 rounded shadow">
      <div className="flex justify-between items-center text-2xl text-white font-bold bg-green-700 p-2">
        {quiz?.quiz_duration && <RadialTimer second={quiz?.quiz_duration} setTimeup={setTimeup} />}
        <p>Skill Assesment</p>
        {quiz?.quiz_duration && <CountDown second={quiz?.quiz_duration} setTimeup={setTimeup} />}
      </div>
      <p className="text-left text-xl text-slate-900 border-b-2 border-zinc-300 p-2">
        {question?.question}
      </p>

      <div className="">
        <AnimatePresence
        // mode="popLayout"
        >
          {question?.options &&
            question?.options?.map((singleOption, index) => (
              <motion.div
                // layout
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="flex justify-between border-b-2 border-zinc-300 p-2"
                key={singleOption.id}
              >
                {/* <VscActivateBreakpoints /> */}
                <div className="relative mx-2 pr-6 ttext-left text-xl text-slate-900 group">
                  {singleOption?.value && (
                    <div className="flex rounded-md justify-between items-center ">
                      {question.multiple ? (
                        <input
                          value={singleOption.id}
                          onChange={(e) => handleChecked(e, index)}
                          type="checkbox"
                          className=" ml-1 mr-3 checkbox checkbox-black "
                        />
                      ) : (
                        <input
                        value={singleOption.id}
                          type="radio"
                          name="answer"
                          onChange={handleRadio}
                          className="ml-1 mr-3 radio  radio-black"
                        />
                      )}
                      <p className="text-left text-xl text-slate-900 mx-3">
                        {singleOption?.value}
                      </p>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
        </AnimatePresence>
      </div>
      <div className="my-3">
        <p>
          Something wrong with this question ?{" "}
          <span className="font-black">Give us Feedback</span>
        </p>
        <progress
          class="progress progress-accent"
          value={count}
          max={questions.length}
        ></progress>
      </div>
      <div className="flex flex-row-reverse my-4">
        <label
          onClick={handleNext}
          className={
            count === questions.length
              ? "hidden"
              : "btn border-none bg-indigo-500 btn-sm"
          }
        >
          Next
        </label>
        <button
          type="submit"
          onClick={onSubmit}
          className={
            count === questions.length
              ? "btn border-none bg-indigo-500 btn-sm"
              : "hidden"
          }
        >
          submit
        </button>
      </div>
    </div>
  );
};

export default Question;
