import { useState } from "react"
import { Box, Select } from './components'

function App() {
  
  const [ color,setColor ] = useState('Red');
  const colors = ['Red', 'Yellow', 'Green', 'Pink'];

  const handleColorChange = ( selectedColor ) => {
    setColor(selectedColor)
  }

  return (
    <div className="flex h-screen justify-around items-center">
      
      <Select colors={colors} colorChange={handleColorChange} />
      <Box color={color}></Box>
      
    </div>
  )
}

export default App
