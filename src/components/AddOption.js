import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
var count = 1;
function AddOption({ setOptionList,  optionList }) {
  const [dataList, setDataList] = useState(
    optionList ? optionList : []
  );
  const [option, setOption] = useState("");

  const handleOptionRemove = (index) => {
    const list = [...dataList];
    list.splice(index, 1);
    setDataList(list);
    setOptionList(list);
  };

  const handleOptionAdd = (e) => {
    e.preventDefault();
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
  };

  return (
    <form onSubmit={handleOptionAdd} className="flex flex-col items-center" >
      <div className="flex flex-col items-start">
      <label >Create options</label>
      <div className="flex gap-2 justify-center content-center items-center">
        

        <input
          required
          type="text"
          placeholder="Option value"
          className="input input-bordered w-full max-w-xs"
          onChange={(e) => setOption(e.target.value)}
        />

        <button type="submit" className="btn btn-sm bg-indigo-500 border-none text-white">
          <span>Add a Option</span>
        </button>
      </div>
      </div>
      {/* <h2 className="text-xl text-left font-extrabold my-2">Options:</h2> */}
      <div className="grid grid-cols-2 gap-3">
        <AnimatePresence mode="popLayout">
          {dataList &&
            dataList.map((singleOption, index) => (
              <motion.div
                layout
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.5, opacity: 0 }}
                transition={{ type: "spring" }}
                className="flex justify-center content-center items-center "
                key={singleOption.id}
              >
                {/* <VscActivateBreakpoints /> */}
                <div className="relative mx-2 pr-6 text-left group">
                  {singleOption?.value && (
                    <p className="text-lg font-bold">
                      ({index+1}) {singleOption?.value}
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
    </form>
  );
}

export default AddOption;
