import React from 'react'

const MolaHOC = (Ketab) => { 
  const KetabeMola = (props) => {
    console.log(props.age);
    return <Ketab {... props}/>
  }  
  return KetabeMola
}
export default MolaHOC
