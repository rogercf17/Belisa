import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Galeria from './pages/Galeria/Galeria';
import Mensagem from './pages/Mensagem/Mensagem';
import Quiz from './pages/Quiz/Quiz';
import Top from './pages/Top/Top';

function App() {
  return (
    <div className='app-container'>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/galeria' element={<Galeria />} />
          <Route path='/mensagem' element={<Mensagem />} />
          <Route path='/quiz' element={<Quiz />} />
          <Route path='/top' element={<Top />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
