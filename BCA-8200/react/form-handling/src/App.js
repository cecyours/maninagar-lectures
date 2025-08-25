
import Arithmactic from './components/Arithmactic';
import './App.css';
import Event from './components/Event';
import Uncontrolled from './components/Uncontrolled';
import Theme from './components/Theme';
import React, { Suspense } from 'react';



const CodeSplit = React.lazy(() => import('./components/CodeSplit'))


function App() {


  return (
    <div className="">

      {/* <Event /> */}

      {/* <Arithmactic /> */}



      <Theme />

      <Uncontrolled />


      <Suspense fallback={<div>Loading...</div>}>
        <CodeSplit />
      </Suspense>



{/* Router > Routes > Route -> path , element  */}
    </div>
  );
}

export default App;
