import Base from 'templates/Base'

import Heading from 'components/Heading'
import Showcase from 'components/Showcase'
import { Container } from 'components/Container'
import { Grid } from 'components/Grid'
import GameCard, { GameCardProps } from 'components/GameCard'
import { HighlightProps } from 'components/Highlight'

export type WishlistProps = {
  games?: GameCardProps[]
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  games,
  recommendedGames,
  recommendedHighlight
}: WishlistProps) => (
  <Base>
    <Container>
      <Heading lineLeft lineColor="secondary">
        Wishlist
      </Heading>

      <Grid>
        {games?.map((game, index) => (
          <GameCard key={`wishlist-${index}`} {...game} />
        ))}
      </Grid>
    </Container>

    <Showcase
      title="You may like these games"
      games={recommendedGames}
      highlight={recommendedHighlight}
    />
  </Base>
)

export default Wishlist
