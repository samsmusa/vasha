import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import QuizList from "./pages/quiz/QuizList";
import { ToastContainer } from "react-toastify";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import QuizDetails from "./pages/quiz/QuizDetails";
import Login from "./pages/authentication/Login";
import RequireAuth from "./hooks/RequireAuth";
import RequireAdmin from "./hooks/RequireAdmin";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Order from "./pages/admin/Order";
import ManageQuiz from "./pages/admin/quiz/ManageQuiz";
import QuizUsers from "./pages/admin/user/QuizUsers";
import AllQuiz from "./pages/admin/quiz/AllQuiz";
import PaymentTransaction from "./pages/admin/PaymentTransaction";
import CreateQuestion from "./pages/admin/quiz/CreateQuestion";
import UserAllQuiz from "./pages/userview/UserAllQuiz";
import ManageUserQuiz from "./pages/userview/ManageUserQuiz";
import Question from "./pages/userview/Question"



function App() {
  return (
    <div className="App font-rubik">
      <ToastContainer />
      <Navbar />
      <Routes>
        {/* <div className="container mx-auto">
          <label for="my-modal-4" class="btn modal-button">
            open modal
          </label> */}
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/quiz" element={<QuizList />}></Route>
        <Route path="/quiz/:id" element={<QuizDetails />} />
        <Route
          path="/dashboard"
          element={
            <RequireAuth>
              <UserAllQuiz />
            </RequireAuth>
          }
        ></Route>
        <Route
          path="/dashboard/quiz/:id"
          element={
            <RequireAuth>
              <ManageUserQuiz />
            </RequireAuth>
          }
        />
        <Route
          path="/dashboard/quiz/:quiz_taken/:attemp"
          element={
            <RequireAuth>
              <Question />
            </RequireAuth>
          }
        />

        <Route
          path="/admin/dashboard"
          element={
            <RequireAdmin>
              <AdminDashboard />
            </RequireAdmin>
          }
        >
          <Route
            path="order"
            element={
              <RequireAdmin>
                <Order />
              </RequireAdmin>
            }
          />
          <Route
            path="transaction"
            element={
              <RequireAdmin>
                <PaymentTransaction />
              </RequireAdmin>
            }
          />
          <Route
            path="quiz"
            element={
              <RequireAdmin>
                <AllQuiz />
              </RequireAdmin>
            }
          />

          <Route
            path="user"
            element={
              <RequireAdmin>
                <QuizUsers />
              </RequireAdmin>
            }
          />
          <Route
            path="quiz/:id"
            element={
              <RequireAdmin>
                <ManageQuiz />
              </RequireAdmin>
            }
          ></Route>
          <Route
            path="quiz/:qid/createquestion"
            element={
              <RequireAdmin>
                <CreateQuestion />
              </RequireAdmin>
            }
          />
          <Route
            path="quiz/:qid/editquestion/:qtid"
            element={
              <RequireAdmin>
                <CreateQuestion />
              </RequireAdmin>
            }
          />
        </Route>

        {/* </div> */}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
