import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const Question = ({ question }) => {
  return (
    <div className="m-4 py-4 rounded shadow">
      <div className="flex justify-between items-center text-2xl text-white font-bold bg-green-700 p-2">
        <div
          class="radial-progress text-sm"
          style={{ "--value": 70, "--size": "3rem", "--thickness": "4px" }}
        >
          70%
        </div>
        <p>Skill Assesment</p>
        <span class="countdown font-mono text-2xl">
          <span style={{"--value":10}}></span>:
          <span style={{"--value":10}}></span>
        </span>
      </div>
      <p className="text-left text-xl text-slate-900 border-b-2 border-zinc-300 p-2">
        {question.question}
      </p>

      <div className="">
        <AnimatePresence mode="popLayout">
          {question?.options &&
            question.options.map((singleOption, index) => (
              <motion.div
                layout
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring" }}
                className="flex justify-between border-b-2 border-zinc-300 p-2"
                key={singleOption.id}
              >
                {/* <VscActivateBreakpoints /> */}
                <div className="relative mx-2 pr-6 ttext-left text-xl text-slate-900 group">
                  {singleOption?.value && (
                    <div className="flex rounded-md justify-between items-center ">
                      {question.multiple ? (
                        <input
                          type="checkbox"
                          className=" ml-1 mr-3 checkbox checkbox-black "
                        />
                      ) : (
                        <input
                          type="radio"
                          name="answer"
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
          value="10"
          max="100"
        ></progress>
      </div>
      <div className="flex flex-row-reverse my-4">
        <button className="btn border-none bg-indigo-500 btn-sm">Next</button>
      </div>
    </div>
  );
};

export default Question;
