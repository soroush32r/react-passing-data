

export const Select = ({colors}) => {
  return (
    <div className="flex"> 
      <label htmlFor="color" className="p-4">Color</label>
      <select id="color">
        {colors.map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>

    </div>
  )
} 