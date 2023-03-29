
import React, { useState } from 'react';
import Navbar from './components/Navbar'
import Textform from './components/Textform'
import Alert from './components/Alert'






function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert = (message, type) => {
    setalert({
      msg: message,
      typ: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }


  // toggle mode function

  const togglemode = () => {

    if (mode === 'light') {

      setmode('dark');
      document.body.style.backgroundColor = '#042743';
      showalert("dark mode has been enable", "success");
    }

    else {
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showalert("light mode has been enable", "success");

    }
  }
  return (
    <>

      <Navbar title="Textutils" abouttext="About" mode={mode} togglemode={togglemode} />
      <Alert alert={alert} />
      <div className='container my-3'>

        <Textform showalert={showalert} heading="Try textUtils Word counter,Charcter counter,Remove extraspaces" mode={mode} />

      </div>


    </>

  );
}

export default App;
