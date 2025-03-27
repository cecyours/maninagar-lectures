import { useTheme } from './context/ThemeProvider';
import React, { Suspense } from 'react';
import logo from './logo.svg';
import './App.css';
import List from './components/List';
import Event from './components/Event';
import ControlledForm from './components/ControlledForm';
import UncontrolledForm from './components/UncontrolledForm';


// Import without Lazy
import ThemedComponents from './components/ThemedComponents';


// Import with Lazy
const LazyThemedComponents = React.lazy(() => import('./components/ThemedComponents'))


const SuspenseComponents = React.lazy(() => import('./components/SuspenseComponents'))

function App() {
  const { theme } = useTheme()
  return (
    <div className={`d-flex flex-column justify-content-center align-items-center vh-100 `}>
      <Suspense fallback={<h1> Loading..</h1>}>

        <SuspenseComponents />
      </Suspense>
    </div>
  );
}

export default App;
