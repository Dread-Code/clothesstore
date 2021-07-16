import React from 'react'
import { Button } from '@cs/components'
import { hot } from 'react-hot-loader/root'

const App = () => (
  <div>
    <h1>App...</h1>
    <Button primary="true" label="Button" />
  </div>
)

export default hot(App)
