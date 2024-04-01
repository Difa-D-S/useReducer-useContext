import React, {useContext} from 'react'
import {context} from '../Context'

const Component4 = () => {

    const values = useContext(context)

    // values.setState("Hi")

  return (
    <div style={{margin: "30px", padding:"30px", border: "1px solid black", backgroundColor: "lightblue"}}>
        <h4>Component4</h4>
        <p>{values.state}</p>
    </div>
  )
}

export default Component4