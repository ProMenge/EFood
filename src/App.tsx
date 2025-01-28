import { BrowserRouter } from 'react-router-dom'
import Rotas from './routes'
import { GlobalCss } from './styles'
import { Provider } from 'react-redux'
import store from './redux/store'
function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <GlobalCss />
          <div className="container">
            <Rotas />
          </div>
        </BrowserRouter>
      </Provider>
    </>
  )
}

export default App
