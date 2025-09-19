


// http://www.omdbapi.com/?i=tt3896198&apikey=46ae5993
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import About from './pages/About';
import ContactUs from './pages/ContactUs';
import User from './pages/User';
import SingleUser from './pages/SingleUser';
import NotFound from './pages/NotFound';
import UserComments from './pages/UserComments';
import Movies from './pages/Movies';
import Posts from './pages/post/Posts';
import SinglePost from './pages/post/SinglePost';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Product from './pages/products/product';
import SingleProduct from './pages/products/SingleProduct';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />

        <div className=''>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/posts' element={<Posts />} />
            <Route path='/posts/:id' element={<SinglePost />} />
            <Route path='/contact' element={<ContactUs />} />
            <Route path='/users' element={<User />} />
            <Route path='/movies' element={<Movies />} />
            <Route path='/products' element={<Product />} />
            <Route path='/products/:id' element={<SingleProduct />} />







            {/* this calles dynamic routes */}
            <Route path='/users/:id' element={<SingleUser />} />
            <Route path='/users/:id/comments' element={<UserComments />} />


            {/* <Route path='/users/:id/comments/:id' element={<SingleUserComments />} /> */}

            {/*for not found pages*/}
            <Route path='*' element={<NotFound />} />
          </Routes>
        </div>


        <Footer />
      </Router>
    </div>
  );
}

export default App;
