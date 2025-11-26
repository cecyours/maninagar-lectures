import logo from './logo.svg';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import ProductList from './admin/products/ProductList';
import ProductCreate from './admin/products/ProductCreate';
import CategoriesList from './admin/categories/CategoriesList';
import CategoryCreate from './admin/categories/CategoryCreate';
import CategoryUpdate from './admin/categories/CategoryUpdate';


function App() {
  return (
    <div className="">
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />




          <Route path='/admin/categories' element={<CategoriesList />} />
          <Route path='/admin/categories/create' element={<CategoryCreate />} />
          <Route path='/admin/categories/:id' element={<CategoryUpdate />} />






          <Route path='/admin/products' element={<ProductList />} />
          <Route path='/admin/products/create' element={<ProductCreate />} />



        </Routes>
      </Router>
    </div>
  );
}

export default App;
