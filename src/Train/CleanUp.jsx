import React, { useState } from 'react'
import Train from './Train';

const CleanUp = () => {
const [state, setState] = useState(true);
    return (
    <div>
      <button className='border bg-red-800' onClick={()=> setState(false)}>End Process</button>
    {state && <Train/>}
    </div>
  )
}

export default CleanUp
