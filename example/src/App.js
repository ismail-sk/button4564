import React from 'react'
import { Button } from 'button4564'
import 'button4564/dist/index.css'

const App = () => {
  return (
  <>
    <div className="container">
      <Button text="Primary Button" type="primary" />
      <Button text="Default Button" />
      <Button text="Dashed Button" type="dashed" />
    </div>
    
    <div className="container spaceBw">
      <Button text="Text Button" type="text" />
      <Button text="Link Button" type="link" />
    </div>
  </>
  )
}

export default App
