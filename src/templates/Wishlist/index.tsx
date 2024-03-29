import useWishlist from 'hooks/use-wishlist'
import Base from 'templates/Base'

import { Container } from 'components/Container'
import { Divider } from 'components/Divider'
import EmptyState from 'components/EmptyState'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import Heading from 'components/Heading'
import { HighlightProps } from 'components/Highlight'
import Loading from 'components/Loading'
import Showcase from 'components/Showcase'

export type WishlistProps = {
  recommendedTitle?: string
  recommendedGames: GameCardProps[]
  recommendedHighlight: HighlightProps
}

const Wishlist = ({
  recommendedTitle,
  recommendedGames,
  recommendedHighlight
}: WishlistProps) => {
  const { items, loading } = useWishlist()

  return (
    <Base>
      <Container data-cy="wishlist">
        <Heading lineLeft lineColor="secondary">
          Wishlist
        </Heading>

        {loading ? (
          <Loading />
        ) : items.length >= 1 ? (
          <Grid>
            {items.map((game) => (
              <GameCard key={game.id} {...game} />
            ))}
          </Grid>
        ) : (
          <EmptyState
            title="Your wishlist is empty"
            description="Games added to your wishlist will appear here"
            hasLink
          />
        )}

        <Divider />
      </Container>

      <Showcase
        title={recommendedTitle || 'You may like these games'}
        games={recommendedGames}
        highlight={recommendedHighlight}
      />
    </Base>
  )
}

export default Wishlist
