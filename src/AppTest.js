import React from 'react'
import ErrorBoundry from './ErrorBoundry'
import Man from './Test/Man'
import Women from './Test/Women'


const AppTest = () => {
  return (
    <div>
      <ErrorBoundry>
        <Women age='some text' />
      </ErrorBoundry>
      <ErrorBoundry>
        <Man  />
      </ErrorBoundry>
    </div>
  )
}

export default AppTest
