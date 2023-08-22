
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import CompanyPage from './Pages/CompanyPage';

function App()  {
      return (
        <Router>
            <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/company' element={<CompanyPage/>} />
            </Routes>
        </Router>
      );
    };

export default App;
