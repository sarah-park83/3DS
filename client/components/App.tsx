import { Outlet } from 'react-router-dom'
import Game from './Game'

function App() {
  return (
    <div className="outlet">
      <Outlet />
    </div>
  )
}

export default App
