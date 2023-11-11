import { useState } from "react"
import { Box, Select } from './components'

function App() {
  
  const [ color,setColor ] = useState('Red');
  const colors = ['Red', 'Yellow', 'Green', 'Pink'];
  return (
    <div className="flex h-screen justify-around items-center">
      
      <Select colors={colors} />
      <Box color={'red'}></Box>
      
    </div>
  )
}

export default App
