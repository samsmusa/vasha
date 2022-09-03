import "./App.css";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import QuizCreate from "./components/QuizCreate";
import QuizList from "./components/QuizList";
import SpecialReservation from "./components/SpecialReservation";
import UserQuiz from "./components/UserQuiz";

function App() {
  return (
    <div className="App font-rubik">
      <Navbar />
      <div className="m-2">
        <QuizCreate />
        <Banner />
        <QuizList />
        <SpecialReservation />
        <UserQuiz />
      </div>
      <Footer />
    </div>
  );
}

export default App;
