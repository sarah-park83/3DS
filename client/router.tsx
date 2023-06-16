import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import Homepage from './components/Homepage'
import Game from './components/Game' // Import the Gamepage component

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Homepage />} />
      <Route path="gamepage/:difficulty" element={<Game />} />
    </Route>
  )
)
