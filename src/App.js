import { useState } from 'react';
import './App.css';
import Navbar from './components/mainComponents/Navbar'
import Routing from './components/Routing';
import Footer from './components/mainComponents/Footer';

function App() {
  const [blur, setBlur]=useState(false);
  return (
    <div className='App'>
    <Navbar onBlur={setBlur}/>
    <div className={blur ? "blur-page" : "page"}>
      <Routing onBlur={setBlur}/>
      <Footer/>
    </div>
    </div>
  );
}

export default App;
