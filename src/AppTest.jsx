import React from 'react'
import Parent from './Train/Parent'

export const UserContext = React.createContext();
export const ChanelContext = React.createContext();

const AppTest = () => {
  const arr = [
    {
      name: 'rashid',
      age: 23,
      skill: 'webDeveloper'
    }
  ]
  return (
    <div>
      <UserContext.Provider value={arr}>
        <ChanelContext.Provider value="bAdFOx">
          <Parent />
        </ChanelContext.Provider>
      </UserContext.Provider>
    </div>
  )
}

export default AppTest
