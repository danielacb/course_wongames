import GamesTemplate, { GamesTemplateProps } from 'templates/Games'

import { initializeApollo } from 'utils/apollo'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames } from 'graphql/generated/QueryGames'

import filterItemsMock from 'components/ExploreSidebar/mock'

export default function GamesPage(props: GamesTemplateProps) {
  return <GamesTemplate {...props} />
}

export async function getStaticProps() {
  const apolloClient = initializeApollo()

  const { data } = await apolloClient.query<QueryGames>({
    query: QUERY_GAMES,
    variables: { limit: 9 }
  })

  return {
    props: {
      revalidate: 60,
      filterItems: filterItemsMock,
      games: data.games.map((game) => ({
        slug: game.slug,
        title: game.name,
        developer: game.developers[0].name,
        img: `http://localhost:1337${game.cover?.url}`,
        price: game.price
      }))
    }
  }
}
