import { Container, BannerWrapper, Subtitle, Title } from './styles'

export type Props = {
  background: string
  subtitle: string
  title: string
}

const Banner = ({ background, subtitle, title }: Props) => {
  return (
    <Container background={background}>
      <BannerWrapper>
        <Subtitle>{subtitle}</Subtitle>
        <Title>{title}</Title>
      </BannerWrapper>
    </Container>
  )
}

export default Banner
