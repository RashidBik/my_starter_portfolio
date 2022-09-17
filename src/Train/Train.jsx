import React, { useEffect, useState } from 'react'

const Train = () => {
    const [x, setX] = useState(0);
    const [y, setY] = useState(0);
    // const timer = () => {
        //     setX(x + 1);
        // }
        useEffect(() => {
     const msMove = e => {
         console.log('mouse event');
         setX(x + 1);
         setY(y + 1)
     }
    console.log('effect updated');
    window.addEventListener('mousemove',msMove);
const interval = setInterval(msMove, 5000);
    return () => {
        window.removeEventListener('mousemove', msMove)
        clearInterval(interval)
}
},[x]);
    return (
    <div>
        {x}
        {/* X: {x}px
        y: {y}px */}
    </div>
  )
}

export default Train
