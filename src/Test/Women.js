import React from 'react'
import MolaHOC from './MolaHOC'


const Parent = (props) => {
  return (
    <div>
      Women {props.name}
    </div>
  )
}

export default MolaHOC(Parent); 
