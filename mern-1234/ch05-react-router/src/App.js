
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import User from './pages/User';
import NavbarComponents from './components/Navbar';
import UserProfile from './pages/UserProfile';
import Dashboard from './pages/admin-panel/Dashboard';
import Users from './pages/admin-panel/Users';
import Setting from './pages/admin-panel/Setting';
import NotFound from './components/NotFound';
import ContactUS from './pages/ContactUs';

function App() {
  return (
    <div className="">
      <Router>
        <NavbarComponents />
        <Routes>
          <Route path='/' element={<Home user={"Vishal"} />} />
          <Route path='/users' element={<User />} />
          <Route path='/contact-us' element={<ContactUS />} />


          <Route path='/users/:id' element={<UserProfile />} />
          {/* Routes  for admin panel */}
          <Route path='/admin' element={<Dashboard />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/settings' element={<Setting />} />


          {/* FOr path less route */}
          <Route path='*' element={<NotFound />} />

          


        </Routes>
      </Router>
    </div>
  );
}

export default App;
