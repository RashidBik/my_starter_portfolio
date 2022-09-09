import React from 'react'
import MolaHOC from './MolaHOC'

const Man = (props) => {
    // let x = 0;
    // if(x === 0){
    //     throw new Error
    // }
  return (
    <div>
      Man Age {props.age}
    </div>
  )
}

export default MolaHOC(Man);
