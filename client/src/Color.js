import React, {useState, useEffect} from 'react'
import ColorBox from './ColorBox'

const Color = () => {
  const [colors, setColors] = useState([])

  const getColors = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/colors");
      const jsonData = await response.json();
      
      for(let i = 0; i <= jsonData.length - 1; i++) {
        const {color_name} =jsonData[i]
        setColors(prevArray => [...prevArray, color_name])
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  useEffect(() => {
    getColors();
  }, []);

  return (
    <div style={{display:"flex"}}>
      {colors.map((color) => {
        return <ColorBox key={color} color={color} />
      })} 
      
    </div>
  )
}

export default Color
