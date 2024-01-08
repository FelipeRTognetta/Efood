import Banner from './components/Banner'
import Footer from './components/Footer'
import RestaurantList from './components/RestaurantList'
import { GlobalCss } from './styles'

function App() {
  return (
    <>
      <GlobalCss />
      <Banner />
      <RestaurantList />
      <Footer />
    </>
  )
}

export default App
