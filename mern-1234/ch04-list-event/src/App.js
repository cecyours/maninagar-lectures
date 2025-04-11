import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css';

// Import without Lazy
import ThemedComponents from './components/ThemedComponents';
import HooksComponents from './components/HooksHooksComponents';

function App() {

  return (
    <div className={`d-flex flex-column justify-content-center align-items-center vh-100 `}>
      <Router>
        <Suspense fallback={<h1> Loading..</h1>}>
          <Routes>
            <Route path='/theme' element={<ThemedComponents />} />
            <Route path='/theme2' element={<h1>Hello world</h1>} />
            <Route path='/hooks' element={<HooksComponents />} />

          </Routes>
        </Suspense>
      </Router>
    </div>
  );
}

export default App;
