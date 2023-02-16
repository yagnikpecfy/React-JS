import './App.css';
import React, { useState } from 'react'
//import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode,setMode] =useState("light")
  const [alert,setAlert] = useState(null)

  const showAlert=(message)=>{
    setAlert(message)

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const toggleMode =()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode");
    }
    else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode");
    }
  }
  return (
    <>
    <Navbar title='TextUtils' aboutUs='About TextUtils' mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    {/* below example is for default props passing */}
    {/* <Navbar/> */}
    <div className="container my-3">
      <TextForm heading='Enter Text To Convert' mode={mode}/>
      {/* <About/> */}

    </div>

  </>
  );
}

export default App;
