import React from "react";
import { MdOutlineDelete } from "react-icons/md";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { RiBatteryShareFill } from "react-icons/ri";
import axios from "axios";

const QuizUsers = () => {
  const [user, setUser] = React.useState([]);
  
  React.useEffect(() => {
    axios
      .get("http://127.0.0.1:8000/auth/user/list/", {
        headers: {
          Authorization: localStorage.getItem("access_token")
            ? "Bearer " + localStorage.getItem("access_token")
            : null,
          "Content-Type": "application/form-data",
          accept: "application/json",
        },
      })
      .then((res) => {
        if (res.status === 200) {
          console.log(res)
          setUser(res.data.results);
        }
      });
  }, []);
  return (
    <div className="">
      <div>
        <p className="text-xl font-bold p-3 text-left bg-warning text-white">
          All user
        </p>
        <div className="overflow-x-auto w-full">
          <table className="table w-full">
            <thead>
              <tr>
                <th>user</th>
                <th>date</th>
                <th>quiz</th>
              </tr>
            </thead>
            <tbody>
              {user &&
                user.map((e) => (
                  <tr key={e.id}>
                    <td>
                      <div className="flex items-center space-x-3">
                        <div>
                          <div className="font-bold">{e.first_name}</div>
                        </div>
                      </div>
                    </td>
                    <td>23/23/23</td>
                    <td>Purple......</td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default QuizUsers;
