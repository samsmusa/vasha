import React from 'react';
import Quiz from './Quiz';

const QuizList = () => {
  return (
    <div>
      <p className="text-left border-l-8 text-3xl font-bold border-indigo-500 my-6 pl-2"> Quiz list <span className="text-indigo-500 font-extrabold">>></span></p>
        <div className="grid grid-cols-3 gap-4 m-2">
          {[...Array(6)].map((e) => (
            <Quiz />
          ))}
        </div>
    </div>
  );
};

export default QuizList;