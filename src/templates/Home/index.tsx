import Menu from 'components/Menu'
import Footer from 'components/Footer'
import Heading from 'components/Heading'
import { Container } from 'components/Container'
import GameCardSlider from 'components/GameCardSlider'
import BannerSlider from 'components/BannerSlider'
import Highlight, { HighlightProps } from 'components/Highlight'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'

import * as S from './styles'

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
    <>
      <Container>
        <Menu />

        <S.SectionBanner>
          <BannerSlider banners={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Container>
          <Heading lineLeft lineColor="secondary" color="black">
            News
          </Heading>

          <GameCardSlider cards={newGames} color="black" />
        </Container>
      </S.SectionNews>

      <Container>
        <S.SectionMostPopular>
          <Heading lineLeft lineColor="secondary">
            Most Popular
          </Heading>
          <Highlight {...mostPopularHighlight} />
          <GameCardSlider cards={mostPopularGames} />
        </S.SectionMostPopular>

        <S.SectionUpcoming>
          <Heading lineLeft lineColor="secondary">
            Upcomming
          </Heading>
          <GameCardSlider cards={upcomingGames} />
          <Highlight {...upcomingHighlight} />
          <GameCardSlider cards={upcomingMoreGames} />
        </S.SectionUpcoming>

        <S.SectionFreeGames>
          <Heading lineLeft lineColor="secondary">
            Free games
          </Heading>
          <Highlight {...freeHighlight} />
          <GameCardSlider cards={freeGames} />
        </S.SectionFreeGames>
      </Container>

      <S.SectionFooter>
        <Container>
          <Footer />
        </Container>
      </S.SectionFooter>
    </>
  )
}

export default Home
