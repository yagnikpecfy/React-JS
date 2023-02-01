import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
    <Navbar title='TextUtils' aboutUs='About TextUtils'/>
    {/* below example is for default props passing */}
    {/* <Navbar/> */}
    <div className="container">
      <TextForm heading='Enter Text To Convert'/>
    </div>

  </>
  );
}

export default App;
