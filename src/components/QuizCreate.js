import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
var count = 1;
function QuizCreate() {
  const [dataList, setDataList] = useState([]);
  const [option, setOption] = useState("");
  const [quest, setQuest] = useState("");
  const [isMultiple, setIsMultiple] = useState(true);

  const handleOptionRemove = (index) => {
    const list = [...dataList];
    list.splice(index, 1);
    setDataList(list);
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
    setOption("");
  };

  function handleSubmit(e) {
    e.preventDefault();
    const data = {
      question: quest,
      multiple: isMultiple,
      options: dataList,
    };
    console.log(data);
    e.target.reset();
    setDataList([])
    setQuest('')
  }

  return (
    <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-4">
      <div className="grid md:grid-cols-2">
        <div className="col-span-1 flex flex-col items-start m-2 shadow bg-base-200 p-4 rounded">
          <p className="text-lg font-bold">Answer Type</p>
          <div className="form-control w-full">
            <label className="label cursor-pointer flex justify-between">
              <span className="label-text">Multiple</span>
              <input
                onClick={() => setIsMultiple(true)}
                type="radio"
                name="multiple"
                className="radio checked:bg-blue-500"
                checked={isMultiple}
              />
            </label>
          </div>
          <div className="form-control  w-full">
            <label className="label cursor-pointer flex justify-between">
              <span className="label-text">Single</span>
              <input
                onClick={() => setIsMultiple(false)}
                type="radio"
                name="sigle"
                className="radio checked:bg-blue-500"
                checked={!isMultiple}
              />
            </label>
          </div>
        </div>

        <div className="col-span-1 m-2 flex flex-col items-start shadow bg-base-200 p-4 rounded cursor-not-allowed">
          <label className="text-lg font-bold">Time</label>
          <div className="flex items-center w-1/2">
            <input
              disabled
              type="text"
              placeholder="minute"
              className="input px-1 input-bordered w-1/4"
              onChange={(e) => setQuest(e.target.value)}
            />
            <span className="text-4xl mx-3">:</span>
            <input
              disabled
              type="text"
              placeholder="second"
              className="input input-bordered w-1/4 px-1"
              onChange={(e) => setQuest(e.target.value)}
            />
          </div>
        </div>

        <div className="col-span-2 m-2  flex flex-col items-start shadow bg-base-200 p-4 rounded">
          <label className="text-lg font-bold">Question</label>
          <input
            required
            type="text"
            placeholder="Option value"
            className="input input-bordered w-full"
            onChange={(e) => setQuest(e.target.value)}
          />
        </div>

        <div className="col-span-2 m-2  flex flex-col items-start shadow bg-base-200 p-4 rounded">
          <label className="text-lg font-bold">Create options</label>
          <div className="flex md:flex-row flex-col gap-2 items-start md:justify-between  md:items-center">
            <input
              required
              type="text"
              placeholder="Option value"
              className="input input-bordered w-full"
              onChange={(e) => setOption(e.target.value)}
            />

            <label
              onClick={handleOptionAdd}
              className="btn btn-sm bg-indigo-500 border-none text-white"
            >
              <span>Add a Option</span>
            </label>
          </div>
        </div>
      </div>
      <div className="bg-base-200 m-2 p-4 rounded">
        <p className="text-left text-xl text-slate-500">
          <span className="text-xl text-black font-black">Question:</span>{" "}
          {quest}
        </p>

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
                  <div className="relative mx-2 pr-6 text-left text-white group">
                    {singleOption?.value && (
                      <div className="flex bg-indigo-400  rounded-md justify-between items-center">
                        {isMultiple ? (
                          <input
                            type="checkbox"
                            className=" ml-1 mr-3 checkbox checkbox-secondary bg-slate-800"
                          />
                        ) : (
                          <input
                            type="radio"
                            name="answer"
                            className="ml-1 mr-3 radio bg-slate-800 radio-secondary"
                          />
                        )}
                        {/* <div className="rounded-full justify-center align-middle flex  bg-indigo-600 text-white w-6 h-6">
                        {index + 1}
                      </div>{" "} */}
                        <p className="text-lg font-bold mx-3">
                          {singleOption?.value}
                        </p>
                        <button
                          type="button"
                          onClick={() => handleOptionRemove(index)}
                          className="btn-sm rounded-full hover:text-red-500 font-extrabold"
                        >
                          <span>X</span>
                        </button>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
          </AnimatePresence>
        </div>
      </div>
      <button type="submit" className="btn btn-wide border-none bg-indigo-500">
        save
      </button>
    </form>
  );
}

export default QuizCreate;
