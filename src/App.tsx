import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Footer from './components/Footer'
import Sidebar from './components/Sidebar'
import { store } from './store'

import { GlobalCss } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalCss />
        <Rotas />
        <Footer />
        <Sidebar />
      </BrowserRouter>
    </Provider>
  )
}

export default App
