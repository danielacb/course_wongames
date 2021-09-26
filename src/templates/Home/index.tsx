import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import { Container } from 'components/Container'
import GameCardSlider from 'components/GameCardSlider'
import BannerSlider from 'components/BannerSlider'
import Highlight, { HighlightProps } from 'components/Highlight'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'

// import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  upcomingGames: GameCardProps[]
  upcomingHighlight: HighlightProps
  upcomingMoreGames: GameCardProps[]
  freeGames: GameCardProps[]
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  mostPopularHighlight,
  mostPopularGames,
  upcomingGames,
  upcomingHighlight,
  upcomingMoreGames,
  freeGames,
  freeHighlight
}: HomeTemplateProps) => {
  return (
    <section>
      <Container>
        <Menu />
        <BannerSlider banners={banners} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary" color="black">
          News
        </Heading>

        <GameCardSlider cards={newGames} color="black" />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Most Popular
        </Heading>

        <Highlight {...mostPopularHighlight} />
        <GameCardSlider cards={mostPopularGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Upcoming
        </Heading>

        <GameCardSlider cards={upcomingGames} />
        <Highlight {...upcomingHighlight} />
        <GameCardSlider cards={upcomingMoreGames} />
      </Container>

      <Container>
        <Heading lineLeft lineColor="secondary">
          Free Games
        </Heading>

        <Highlight {...freeHighlight} />
        <GameCardSlider cards={freeGames} />
      </Container>

      <Container>
        <Footer />
      </Container>
    </section>
  )
}

export default Home
