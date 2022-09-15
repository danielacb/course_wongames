import { GetServerSidePropsContext } from 'next'

import { QueryRecommended } from 'graphql/generated/QueryRecommended'
import {
  QueryWishlist,
  QueryWishlistVariables
} from 'graphql/generated/QueryWishlist'
import { QUERY_RECOMMENDED } from 'graphql/queries/recommended'
import { QUERY_WISHLIST } from 'graphql/queries/wishlist'
import Wishlist, { WishlistProps } from 'templates/Wishlist'
import { initializeApollo } from 'utils/apollo'
import { gamesMapper, highlightMapper } from 'utils/mappers'
import protectedRoutes from 'utils/protected-routes'

import gamesMock from 'components/GameCardSlider/mock'

export default function WishlistPage(props: WishlistProps) {
  return <Wishlist {...props} />
}

export async function getServerSideProps(context: GetServerSidePropsContext) {
  const session = await protectedRoutes(context)
  const apolloClient = initializeApollo(null, session)

  if (!session) return { props: {} }

  await apolloClient.query<QueryWishlist, QueryWishlistVariables>({
    query: QUERY_WISHLIST,
    variables: {
      identifier: session.user?.email as string
    }
  })

  const { data } = await apolloClient.query<QueryRecommended>({
    query: QUERY_RECOMMENDED
  })

  return {
    props: {
      session,
      initializeApolloState: apolloClient.cache.extract(),
      games: gamesMock,
      recommendedTitle: data.recommended?.section?.title,
      recommendedGames: gamesMapper(data.recommended?.section?.games),
      recommendedHighlight: highlightMapper(
        data.recommended?.section?.highlight
      )
    }
  }
}
