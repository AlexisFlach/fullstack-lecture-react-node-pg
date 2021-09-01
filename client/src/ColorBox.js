import React from 'react'

const ColorBox = ({color}) => {
  return (
    <div style={{height: "140px",width:"140px", background: color, display:"flex", justifyContent: 'center', alignItems:'center'}}>
       <h4 style={{color: 'black', fontSize: '2em'}}>{color}</h4> 
    </div>
  )
}

export default ColorBox
