import { Container, BannerWrapper, Type, Title } from './styles'

export type Props = {
  background: string
  title: string
  type: string
}

const Banner = ({ background, type, title }: Props) => {
  return (
    <Container background={background}>
      <BannerWrapper>
        <Type>{type}</Type>
        <Title>{title}</Title>
      </BannerWrapper>
    </Container>
  )
}

export default Banner
