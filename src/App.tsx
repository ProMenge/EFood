import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { GlobalCss } from './styles'

import { Provider } from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <>
      <BrowserRouter>
        <Provider store={store}>
          <GlobalCss />
          <div className="container">
            <Rotas />
          </div>
        </Provider>
      </BrowserRouter>
    </>
  )
}

export default App
