// src/App.js
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotFound from './components/NotFound';
import AdminLayout from './layout/AdminLayout';
import UserLayout from './layout/UserLayout';
import Home from './pages/user/Home';
import User from './pages/user/User';
import ContactUS from './pages/user/ContactUs';
import UserProfile from './pages/user/UserProfile';
import ContactUsView from './pages/user/ContactUsView';
import ContactUsUpdate from './pages/user/ContactUsUpdate';
import Dashboard from './pages/admin-panel/Dashboard';
import Users from './pages/admin-panel/Users';
import Setting from './pages/admin-panel/Setting';
import ContactUsAdmin from './pages/admin-panel/ContactUsAdmin';
import ProductCreate from './pages/admin-panel/ProductCreate';

function App() {
  return (
    <Router>
      <Routes>

        {/* User Layout */}
        <Route path='/' element={<UserLayout />}>
          <Route index element={<Home user={"Vishal"} />} />
          <Route path="users" element={<User />} />
          <Route path="contact-us" element={<ContactUS />} />
          <Route path="users/:id" element={<UserProfile />} />
          <Route path="contact-us/view/:id" element={<ContactUsView />} />
          <Route path="contact-us/update/:id" element={<ContactUsUpdate />} />
        </Route>

        {/* Admin Layout */}
        <Route path='/admin/*' element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Setting />} />
          <Route path="contact-us" element={<ContactUsAdmin />} />
          <Route path="products/create" element={<ProductCreate />} />
        </Route>

        {/* Not Found Page */}
        <Route path='*' element={<NotFound />} />

      </Routes>
    </Router>
  );
}

export default App;
