import React,{ useState } from 'react';
import './App.css';
import About from './components/About';
import Alert from './components/Alert';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import {
  BrowserRouter as Router,
  Routes,
  Route 
} from "react-router-dom";



function App() {
   const [mode, setMode] = useState('light');
   const [alert,  setAlert] = useState('null');

   const showAlert =(message,type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(()=>{
      setAlert(null);
    },1500)
   }

    const toggleModef = () => {
     if(mode ==='light'){
      setMode('dark');
      document.body.style.backgroundColor ='grey';
      showAlert("Dark mode been enabled","Success");
     }
     else{
      setMode('light');
      document.body.style.backgroundColor ='white';
      showAlert("Light mode been enabled","Success");
     }
    };
  return (
    <>
      <Router>
        <div className="container">
          <Navbar title="TextUtils" mode={mode} toggleMode={toggleModef}/>
         <Alert alert= {alert}/>
        </div>
        <div className='container my-3'>
          <Routes>
            <Route path="/about" element={<About mode={mode}/>} />
            <Route path="/" element={<TextForm mode={mode} showAlert={showAlert}  heading="Enter your Text..." />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}


export default App;
