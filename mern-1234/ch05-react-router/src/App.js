
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import User from './pages/User';
import NavbarComponents from './components/Navbar';
import UserProfile from './pages/UserProfile';

function App() {
  return (
    <div className="">
      <Router>
        <NavbarComponents />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/users' element={<User />} />
          <Route path='/users/:id' element={<UserProfile />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
