import React, { useState } from 'react'
import WrapperHOC from './WrapperHOC'

const Input = (props) => {
    const [value, setValue] = useState("")

  return (
    <div>
        <input type="text" value={value} onChange={(e)=>setValue(e.target.value)} />
        <br />
        {props.render(value)}
    </div>
  )
}

export default WrapperHOC(Input)