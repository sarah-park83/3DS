import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom'

import App from './components/App'
import PlayGameButton from './components/PlayGameButton'

export const Router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<PlayGameButton />} />
      <Route path="game" element={<App />} />
    </>
  )
)
