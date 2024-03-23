import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Jee from './components/Jee/jee';
import Neet from './components/Neet/Neet';
import FileUpload from './components/FileUpload/FileUpload';
import QuizPage from './components/QuizPage/QuizPage';
import TextExtraction from './components/FileUpload/TextExtraction';

function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          {/* <Route path='/jee' element={<Jee />} />
          <Route path='/neet' element={<Neet />} /> */}
          <Route path='/quizPage' element={<TextExtraction />} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
