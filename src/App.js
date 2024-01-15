import './App.css';
import Quiz from './Quiz';
import PyQuizData from './PythonQuiz';

function App() {
  return (
    <div>
      <Quiz data={PyQuizData}/>
    </div>
  )
}

export default App;
