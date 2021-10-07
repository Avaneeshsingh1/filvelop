import React,{useState} from 'react'
import './App.css';
import Home1 from './Home1';
import About from './Component/About';
import Discussion from './Component/Discussion ';
import Colleges from './Component/Colleges';
import Happening from './Component/Happening';
import Login from './Component/Login';
import Signup from './Component/Signup';
import Header from './Component/Header';


function App() {
  const Loading=(value)=>{
    console.log(value)
setScreen(value)
  }
  const[screen,setScreen]=useState(0)
  return (
  <>  
<Header Loading={Loading}/>
{(screen===0) && <Home1/>}
{(screen===1) && <About/>}
{(screen===2) && <Discussion/>}
{(screen===4) && <Colleges/>}
{(screen===3) && <Happening/>}
{(screen===5) && <Login/>}
{(screen===6) && <Signup/>}
     </> 
      );
}

export default App;
