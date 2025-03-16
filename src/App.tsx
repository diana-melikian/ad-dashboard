import React from 'react'
import { RouterProvider } from 'react-router'

import router from './router'
import { StoreProvider } from 'easy-peasy'
import store from './redux/redux-config'

const App: React.FC = () => (
  <StoreProvider store={store}>
    <RouterProvider router={router} />
  </StoreProvider>
)
App.displayName = 'App'
export default App
