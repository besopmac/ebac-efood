import {
  Card,
  Title,
  Image,
  Rating,
  CardInfo,
  Categories,
  ButtonLink,
  Description,
  CardInfoHeader
} from './styles'
import star from '../../assets/images/star.svg'
import Tag from '../Tag'

type Props = {
  title: string
  image: string
  rating: number
  description: string
  categories: string[]
}

const Restaurant = ({
  title,
  image,
  rating,
  description,
  categories
}: Props) => {
  return (
    <Card>
      <Image src={image} title={title} />
      <Categories>
        {categories.map((category) => (
          <Tag key={category}>{category}</Tag>
        ))}
      </Categories>
      <CardInfo>
        <CardInfoHeader>
          <Title>{title}</Title>
          <Rating>{rating}</Rating>
          <img src={star} alt="" />
        </CardInfoHeader>
        <Description>{description}</Description>
        <ButtonLink to={'/categories'}>Saiba mais</ButtonLink>
      </CardInfo>
    </Card>
  )
}

export default Restaurant
