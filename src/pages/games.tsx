import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'

import filterItemsMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  await apolloClient.query<QueryGames, QueryGamesVariables>({
    query: QUERY_GAMES,
    variables: { limit: 12 }
  })

  return {
    props: {
      revalidate: 60,
      filterItems: filterItemsMock,
      initialApolloState: apolloClient.cache.extract()
    }
  }
}
