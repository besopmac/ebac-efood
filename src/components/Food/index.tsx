import { Card, Title, Image, ButtonLink, Description } from './styles'

type Props = {
  title: string
  image: string
  description: string
}

const Food = ({ title, image, description }: Props) => {
  return (
    <Card>
      <Image src={image} title={title} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <ButtonLink to={'/'}>Adicionar ao carrinho</ButtonLink>
    </Card>
  )
}

export default Food
