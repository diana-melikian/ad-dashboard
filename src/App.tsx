import React from 'react'
import { RouterProvider } from 'react-router'
import { ErrorBoundary } from 'react-error-boundary'

import router from './router'
import { StoreProvider } from 'easy-peasy'
import store from './redux/redux-config'

const App: React.FC = () => (
  <ErrorBoundary fallback={<p>Something went wrong</p>}>
    <StoreProvider store={store}>
      <RouterProvider router={router} />
    </StoreProvider>
  </ErrorBoundary>
)
App.displayName = 'App'
export default App
