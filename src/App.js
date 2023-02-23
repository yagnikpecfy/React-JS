import './App.css';
import React, { useState } from 'react'
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  const [mode,setMode] =useState("light")
  const [alert,setAlert] = useState(null)

 

  const showAlert=(message)=>{
    setAlert(message)

    setTimeout(() => {
      setAlert(null)
    }, 1500);
  }

  const colorMode =()=>{

    if(mode!=='red'){
      setMode('red');
      document.body.style.backgroundColor='red';
      showAlert("red mode");
    }else{
      setMode('green')
      document.body.style.backgroundColor='green'
      showAlert("Green mode");
    }
  }

  const toggleMode =()=>{

    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor='black';
      showAlert("Dark mode");
    }else{
      setMode('light')
      document.body.style.backgroundColor='white'
      showAlert("Light mode");
    }
  }

  return (
    <>
    <Router>
    <Navbar title='TextUtils' aboutUs='About TextUtils' mode={mode} toggleMode={toggleMode} colorMode={colorMode}/>
    <Alert alert={alert}/>
    {/* below example is for default props passing */}
    {/* <Navbar/> */}
    <div className="container my-3">
      {/* <TextForm heading='Enter Text To Convert' mode={mode}/> */}
      {/* <About/> */}

     
        {/* <Switch>
          
          <Route path="/about">
            <About/>
          </Route>
            <Route path="/users">
          <TextForm heading='Enter Text To Convert' mode={mode}/>
          </Route>
        </Switch> */}

    <Routes>
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/" element={<TextForm heading='Enter Text To Convert' mode={mode}/>} />

    </Routes>

    </div>
    </Router>
  </>
  );
}

export default App;
