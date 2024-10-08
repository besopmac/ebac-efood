import Restaurant from '../../models/Restaurant'

import Header from '../../components/Header'
import RestaurantList from '../../components/RestaurantList'

import pasta from '../../assets/images/pasta.jpg'
import pizza from '../../assets/images/pizza.jpg'
import sushi from '../../assets/images/sushi.jpg'

const restaurants: Restaurant[] = [
  {
    id: 1,
    rating: 4.9,
    image: sushi,
    title: 'Hioki Sushi',
    categories: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. Experimente o Japão sem sair do lar com nosso delivery!'
  },
  {
    id: 2,
    rating: 4.9,
    image: pizza,
    title: 'Calabresa Trattoria',
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 3,
    rating: 4.6,
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 4,
    rating: 4.6,
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 5,
    rating: 4.6,
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  },
  {
    id: 6,
    rating: 4.6,
    image: pasta,
    title: 'La Dolce Vita Trattoria',
    categories: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!'
  }
]

const Home = () => {
  return (
    <>
      <Header type="home" />
      <div className="container">
        <RestaurantList restaurants={restaurants} />
      </div>
    </>
  )
}

export default Home
