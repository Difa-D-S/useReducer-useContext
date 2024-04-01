import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState } from 'react';
// import Reducer from './components/Reducer';
import Component1 from './components/Component1';
import Component2 from './components/Component2';
import {context} from './Context';

const App = () => {

  // const [state, setState] = useState("Hello")

  const values = useContext(context)

  return (

    // <context.Provider value = {{state, setState}}>

    <>
      {/* <Reducer/> */}

      <div style={{margin: "30px", padding:"30px", border: "1px solid black", backgroundColor: "lightblue"}}>
        <h1>App Components</h1>

        <p>{values.state}</p>

        <Component1/>
        <Component2/>
      </div>
    </> 
    // </context.Provider>
       
  )
}

export default App
