import React from "react";

const QuizAttemps = ({allattemp}) => {
  // const [attemps, setAttemps] = React.useState([])

  // React.useEffect(()=>{
  //   fetch(`http://127.0.0.1:8000/quizobj/${quizid}`)
  //   .then(res=>res.json())
  //   .then(res=>setAttemps(res))
  // },[quizid])
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>user</th>
            <th>date time</th>
            <th>atemps</th>
            <th>answer</th>
            <th>grade</th>
          </tr>
        </thead>
        <tbody>
          {
            allattemp?.map(e=><tr key={e.id}>
              <td>zilmil</td>
              <td>31/21/21</td>
              <td>2</td>
              <th>12/15</th>
              <th>4.00</th>
            </tr>)
          
          }
        </tbody>
      </table>
    </div>
  );
};

export default QuizAttemps;
