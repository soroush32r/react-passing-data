import { useState } from 'react'

export const Select = ({colors, colorChange}) => {
  
  const handleSelectorOption = (e) => {
    colorChange(e.target.value)
  }

  return (
    <div className="flex"> 
      
      <label htmlFor="color" className="p-4">Color</label>

      <select id="color" onChange={handleSelectorOption}>
        {colors.map((item) => (
          <option value={item} key={item}>{item}</option>
        ))}
      </select>

    </div>
  )
} 