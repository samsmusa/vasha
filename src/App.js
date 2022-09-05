import "./App.css";
import Banner from "./components/Banner";
import CreateQuiz from "./components/CreateQuiz";
import Footer from "./components/Footer";
import ManageQuiz from "./components/ManageQuiz";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import QuizCreate from "./components/QuizCreate";
import QuizList from "./components/QuizList";
import QuizUsers from "./components/QuizUsers";
import SpecialReservation from "./components/SpecialReservation";
import UserQuiz from "./components/UserQuiz";

const question = {
  question: "what is your name ? ",
  multiple: false,
  options: [
    {
      id: 1,
      value: "musa",
    },
    {
      id: 2,
      value: "kusa",
    },
    {
      id: 3,
      value: "lusa",
    },
    {
      id: 4,
      value: "nusa",
    },
  ],
};

function App() {
  return (
    <div className="App font-rubik">
      <Navbar />
      <div className="container mx-auto">
        <label for="my-modal-4" class="btn modal-button">
          open modal
        </label>
        <ManageQuiz />
        <QuizUsers />
        <Question question={question} />
        <QuizCreate />
        <Banner />
        <QuizList />
        <SpecialReservation />
        <UserQuiz />
      </div>
      <Footer />
      <CreateQuiz />
    </div>
  );
}

export default App;
