import { createBrowserRouter } from 'react-router'

import Index from './components'

const router = createBrowserRouter([
  {
    path: '*',
    element: <Index />,
  },
])

export default router
