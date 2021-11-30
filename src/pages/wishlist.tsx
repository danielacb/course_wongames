import Wishlist, { WishlistProps } from 'templates/Wishlist'

import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function WishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />
}

export async function getStaticProps() {
  return {
    props: {
      games: gamesMock,
      recommendedGames: gamesMock.slice(0, 5),
      recommendedHighlight: highlightMock
    }
  }
}
