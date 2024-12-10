import RestaurantList from '../../components/RestaurantList'
import RestaurantOBJ from '../../models/Restaurant'

import Hioki from '../../assets/images/Hioki.png'
import Trattoria from '../../assets/images/Tarttoria.png'
import Footer from '../../components/Footer'
import HeroHeader from '../../components/HeroHeader'

const highlight: RestaurantOBJ[] = [
  {
    id: 1,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas mollitia quisquam vero explicabo deserunt ea id veritatis voluptatibus? A adipisci possimus illo quisquam reiciendis tenetur corporis porro delectus doloribus!',
    image: Hioki,
    infos: ['Destaque da semana', 'Japonesa'],
    stars: '4.6',
    title: 'Hioki Sushi'
  },
  {
    id: 2,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas mollitia quisquam vero explicabo deserunt ea id veritatis voluptatibus? A adipisci possimus illo quisquam reiciendis tenetur corporis porro delectus doloribus!',
    image: Trattoria,
    infos: ['Destaque', 'Italiana'],
    stars: '4.6',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 3,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas mollitia quisquam vero explicabo deserunt ea id veritatis voluptatibus? A adipisci possimus illo quisquam reiciendis tenetur corporis porro delectus doloribus!',
    image: Trattoria,
    infos: ['Destaque', 'Italiana'],
    stars: '4.6',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 4,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas mollitia quisquam vero explicabo deserunt ea id veritatis voluptatibus? A adipisci possimus illo quisquam reiciendis tenetur corporis porro delectus doloribus!',
    image: Trattoria,
    infos: ['Destaque', 'Italiana'],
    stars: '4.6',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 5,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas mollitia quisquam vero explicabo deserunt ea id veritatis voluptatibus? A adipisci possimus illo quisquam reiciendis tenetur corporis porro delectus doloribus!',
    image: Trattoria,
    infos: ['Destaque', 'Italiana'],
    stars: '4.6',
    title: 'La Dolce Vita Trattoria'
  },
  {
    id: 6,
    description:
      'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias voluptas mollitia quisquam vero explicabo deserunt ea id veritatis voluptatibus? A adipisci possimus illo quisquam reiciendis tenetur corporis porro delectus doloribus!',
    image: Trattoria,
    infos: ['Destaque', 'Italiana'],
    stars: '4.6',
    title: 'La Dolce Vita Trattoria'
  }
]

const Hero = () => (
  <>
    <HeroHeader />
    <RestaurantList restaurants={highlight} />
    <Footer />
  </>
)

export default Hero
