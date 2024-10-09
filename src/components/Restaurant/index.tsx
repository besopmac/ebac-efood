import { Restaurante } from '../../types/Restaurante'
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
  restaurante: Restaurante
}

const Restaurant = ({ restaurante }: Props) => {
  return (
    <Card>
      <Image src={restaurante.capa} title={restaurante.titulo} />
      <Categories>
        {restaurante.destacado && <Tag>Destaque da semana</Tag>}
        <Tag>{restaurante.tipo}</Tag>
      </Categories>
      <CardInfo>
        <CardInfoHeader>
          <Title>{restaurante.titulo}</Title>
          <Rating>{restaurante.avaliacao}</Rating>
          <img src={star} alt="" />
        </CardInfoHeader>
        <Description>{restaurante.descricao}</Description>
        <ButtonLink to={`/restaurante/${restaurante.id}`}>
          Saiba mais
        </ButtonLink>
      </CardInfo>
    </Card>
  )
}

export default Restaurant
