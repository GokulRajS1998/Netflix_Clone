import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import {action,originals,comedy,horror} from './urls';
import "./App.css";
import Banner from "./Components/Banner/Banner";
import RowPost from "./Components/RowPost/RowPost";



function App(){
  return(
    <div className='App'>
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action Movies' isSmall/>
      <RowPost url={comedy} title='Comedy Movies' isSmall/>
      <RowPost url={horror} title='Horror Movies' isSmall/>


      
    </div>
  );
}

export default App;

