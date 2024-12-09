import { BrowserRouter } from 'react-router-dom'
import Rotas from './rotes'
import { GlobalCss } from './styles'
function App() {
  return (
    <>
      <BrowserRouter>
        <GlobalCss />
        <div className="container">
          <Rotas />
        </div>
      </BrowserRouter>
    </>
  )
}

export default App