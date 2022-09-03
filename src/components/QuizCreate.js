import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
var count = 1;
function QuizCreate({ setOptionList, optionList }) {
  const [dataList, setDataList] = useState(optionList ? optionList : []);
  const [option, setOption] = useState("");
  const [quest, setQuest] = useState("");

  const handleOptionRemove = (index) => {
    const list = [...dataList];
    list.splice(index, 1);
    setDataList(list);
    setOptionList(list);
  };

  const handleOptionAdd = (e) => {
    // e.preventDefault();
    count = count + 1;
    const list = [
      ...dataList,
      {
        id: count,
        value: option,
      },
    ];
    setDataList(list);
    setOptionList(list);
    e.target.reset();
    setOption("")
  };

  return (
    <form className="mx-auto">
      <div className="grid grid-cols-2">
        <div className="flex flex-col items-start">
          <label>Question</label>
          <input
            required
            type="text"
            placeholder="Option value"
            className="input input-bordered w-full"
            onChange={(e) => setQuest(e.target.value)}
          />
        </div>

        <div className="flex flex-col items-start ml-4">
          <label className="">Create options</label>
          <div className="flex gap-2 justify-center content-center items-center">
            <input
              required
              type="text"
              placeholder="Option value"
              className="input input-bordered w-full max-w-xs"
              onChange={(e) => setOption(e.target.value)}
            />

            <button
            onClick={handleOptionAdd}
              
              className="btn btn-sm bg-indigo-500 border-none text-white"
            >
              <span>Add a Option</span>
            </button>
          </div>
        </div>
      </div>
      <div className="mt-12 ">
        <p className="text-left text-xl">Question: {quest}</p>

        <div className="grid grid-cols-2 gap-3 mt-4">
          <AnimatePresence mode="popLayout">
            {dataList &&
              dataList.map((singleOption, index) => (
                <motion.div
                  layout
                  initial={{ scale: 0.5, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.5, opacity: 0 }}
                  transition={{ type: "spring" }}
                  className="flex justify-between"
                  key={singleOption.id}
                >
                  {/* <VscActivateBreakpoints /> */}
                  <div className="relative mx-2 pr-6 text-left group">
                    {singleOption?.value && (
                      <p className="text-lg font-bold flex">
                        <div className="rounded-full justify-center align-middle flex  bg-indigo-600 text-white w-6 h-6">
                          {index + 1}
                        </div>{" "}
                        {singleOption?.value}
                      </p>
                    )}
                    <button
                      type="button"
                      onClick={() => handleOptionRemove(index)}
                      className="absolute hidden group-hover:block  -right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 btn-sm rounded-full btn-error font-extrabold"
                    >
                      <span>X</span>
                    </button>
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
    </form>
  );
}

export default QuizCreate;
