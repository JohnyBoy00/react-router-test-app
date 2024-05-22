import { Routes, Route, Link } from 'react-router-dom';
import Home from "./pages/Home";
import Projects from './pages/Projects';
import About from "./pages/About";
import './App.css';
import NotFound from './pages/NotFound';

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <div className="logo">NavBar</div>
          <ul className="nav-links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/About">Features</Link>
            </li>
            <li>
              <Link to="/Projects">Services</Link>
            </li>
          </ul>
        </div>
      </nav>

      <Routes>
        <Route path='*' element={<NotFound />}></Route>
        <Route path='/' element={<Home />}></Route>
        <Route path='/About' element={<About />}></Route>
        <Route path='/Projects' element={<Projects />}></Route>
      </Routes>
    </>
  );
}

export default App;
