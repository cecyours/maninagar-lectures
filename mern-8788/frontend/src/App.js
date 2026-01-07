import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './pages/Home';
import ProductList from './admin/products/ProductList';
import ProductCreate from './admin/products/ProductCreate';
import CategoriesList from './admin/categories/CategoriesList';
import CategoryCreate from './admin/categories/CategoryCreate';
import CategoryUpdate from './admin/categories/CategoryUpdate';
import Sidebar from './components/common/Sidebar';
import ProductUpdate from './admin/products/ProductUpdate';
import UserProducts from './user/pages/UserProducts';

import { Toaster } from "react-hot-toast";



function App() {
  return (
    <>
    <Toaster />
    <Router>
      <div className="flex min-h-screen bg-gray-100">
        
        {/* Sidebar */}
        <Sidebar />

        {/* Main Content */}
        <div className="flex-1 p-6 overflow-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/admin/categories" element={<CategoriesList />} />
            <Route path="/admin/categories/create" element={<CategoryCreate />} />
            <Route path="/admin/categories/:id" element={<CategoryUpdate />} />
            <Route path="/admin/products" element={<ProductList />} />
            <Route path="/admin/products/create" element={<ProductCreate />} />
            <Route path="/admin/products/:id" element={<ProductUpdate />} />
            <Route path="/user/products" element={<UserProducts />} />
          </Routes>
        </div>

      </div>
    </Router>
    </>
  );
}

export default App;
