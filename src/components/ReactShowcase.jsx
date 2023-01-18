import { useState } from "react"

function Showcase() {
  const [name, setName] = useState('Christian')
  return (
    <div>Hello {name}</div>
  )
}

export default Showcase
