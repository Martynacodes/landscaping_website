
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages';
import Signin from './pages/Signin';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} exact />
        <Route path='/signin' element={<Signin />} exact />
      </Routes>
    </Router>
  );
}

export default App;
