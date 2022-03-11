import Base from 'templates/Base'
import { Container } from 'components/Container'
import BannerSlider from 'components/BannerSlider'
import { HighlightProps } from 'components/Highlight'
import { BannerProps } from 'components/Banner'
import { GameCardProps } from 'components/GameCard'
import Showcase from 'components/Showcase'

import * as S from './styles'

export type HomeTemplateProps = {
  banners: BannerProps[]
  newGames: GameCardProps[]
  newGamesTitle: string
  mostPopularHighlight: HighlightProps
  mostPopularGames: GameCardProps[]
  mostPopularGamesTitle: string
  upcomingGames: GameCardProps[]
  upcomingGamesTitle: string
  upcomingHighlight: HighlightProps
  freeGames: GameCardProps[]
  freeGamesTitle: string
  freeHighlight: HighlightProps
}

const Home = ({
  banners,
  newGames,
  newGamesTitle,
  mostPopularHighlight,
  mostPopularGames,
  mostPopularGamesTitle,
  upcomingGames,
  upcomingGamesTitle,
  upcomingHighlight,
  freeGames,
  freeGamesTitle,
  freeHighlight
}: HomeTemplateProps) => {
  return (
    <Base>
      <Container>
        <S.SectionBanner>
          <BannerSlider banners={banners} />
        </S.SectionBanner>
      </Container>

      <S.SectionNews>
        <Showcase title={newGamesTitle} games={newGames} color="black" />
      </S.SectionNews>

      <Showcase
        title={mostPopularGamesTitle}
        highlight={mostPopularHighlight}
        games={mostPopularGames}
      />

      <Showcase
        title={upcomingGamesTitle}
        games={upcomingGames}
        highlight={upcomingHighlight}
      />

      <Showcase
        title={freeGamesTitle}
        highlight={freeHighlight}
        games={freeGames}
      />
    </Base>
  )
}

export default Home
