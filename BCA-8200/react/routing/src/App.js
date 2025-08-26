
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import User from './pages/User';
import SingleUser from './pages/SingleUser';
import NotFound from './pages/NotFound';
import UserComments from './pages/UserComments';
import SingleUserComments from './pages/SingleUserComments';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* static routes */}
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/contact-us' element={<ContactUs />} />
          <Route path='/users' element={<User />} />

          {/* this calles dynamic routes */}
          <Route path='/users/:id' element={<SingleUser />} />
          <Route path='/users/:id/comments' element={<UserComments />} />


          {/* <Route path='/users/:id/comments/:id' element={<SingleUserComments />} /> */}

          {/*for not found pages*/}
          <Route path='*' element={<NotFound />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
