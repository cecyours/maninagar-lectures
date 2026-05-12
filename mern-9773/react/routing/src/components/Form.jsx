import React, { useState } from 'react';
import { useNavigate, useBeforeUnload } from 'react-router-dom';

const Form = () => {
    const [isChanged, setIsChanged] = useState(false);
    const navigate = useNavigate();
  
    // Modern replacement for <Prompt> in React Router v6
  
    useBeforeUnload((event) => {
    if (isChanged) {
      event.preventDefault();
      event.returnValue = '';
    }
  
});
  
return (
    <div>
      <h2> Fill Form</h2>
      <input
        type="text"
        placeholder="Type something..."
        onChange={() => setIsChanged(true)}
      />
      <button onClick={() => navigate('/')}>Submit & Go Home</button>
    </div>
  );
 
};

export default Form;