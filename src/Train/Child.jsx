import React,{useContext} from 'react'
import { ChanelContext, UserContext } from '../AppTest'


const Child = () => {
    const user = useContext(UserContext);
    const chanel = useContext(ChanelContext);
    return (
    <div>
        {user[0].skill} - {chanel}
    </div>
  )
}

export default Child
