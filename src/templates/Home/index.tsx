import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import { Container } from 'components/Container'

// import * as S from './styles'

const Home = () => {
  return (
    <section>
      <Container>
        <Menu />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
