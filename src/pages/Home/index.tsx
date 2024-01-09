import Banner from '../../components/Banner'
import RestaurantList from '../../components/RestaurantList'
import Restaurant from '../../models/Restaurant'

import hioki from '../../assets/images/hioki.png'
import trattoria from '../../assets/images/trattoria.png'

const restaurant: Restaurant[] = [
  {
    title: 'Hioki Sushi',
    rating: '4.9',
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida.Experimente o Japão sem sair do lar com nosso delivery!',
    infos: ['Destaque da semana', 'Japonesa'],
    image: hioki,
    id: 1
  },
  {
    title: 'La Dolce Vita Trattoria',
    rating: '4.6',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana'],
    image: trattoria,
    id: 2
  },
  {
    title: 'Sushi La Dolce Vita Hiokiana',
    rating: '3.0',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Italiana', 'Japonesa'],
    image: hioki,
    id: 3
  },
  {
    title: 'H10ky',
    rating: '4.0',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Ch1ne5a'],
    image: trattoria,
    id: 4
  },
  {
    title: 'Vita Trattoria Dolce',
    rating: '5.0',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Mexicana'],
    image: hioki,
    id: 5
  },
  {
    title: 'La Hioki Zika Trattoria',
    rating: '6.0',
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    infos: ['Brasileira'],
    image: trattoria,
    id: 6
  }
]

function App() {
  return (
    <>
      <Banner />
      <RestaurantList restaurants={restaurant} />
    </>
  )
}

export default App
