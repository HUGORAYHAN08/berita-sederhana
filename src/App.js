import './App.css';
import { Link, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Profile from './pages/Profile';
import Blog from './pages/Blog';
import Contect from './pages/Contect';
import BlogDetail from './pages/BlogDetail';

function App() {
  return (
    <div className="App">
      <nav>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Profile">Profile</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Contect">Contect</Link>
        </li>
      </nav>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Profile' element={<Profile/>} />
        <Route path='/Blog' element={<Blog/>} />
        <Route path='/Blog/:id' element={<BlogDetail/>} />
        <Route path='/Contect' element={<Contect/>} />
      </Routes>
    </div>
  );
}

export default App;
