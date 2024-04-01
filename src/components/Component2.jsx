import React from 'react'
import Component3 from './Component3'
import Component4 from './Component4'

const Component2 = () => {
  return (

    <div style={{margin: "30px", padding:"30px", border: "1px solid black", backgroundColor: "lightblue"}}>

        <h3>Component2</h3>

        <Component3/>
        <Component4/>
    </div>


  )
}

export default Component2