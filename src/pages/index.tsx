import { QueryHome, QueryHomeVariables } from 'graphql/generated/QueryHome'
import { QUERY_HOME } from 'graphql/queries/home'
import Home, { HomeTemplateProps } from 'templates/Home'
import { initializeApollo } from 'utils/apollo'
import { bannerMapper, gamesMapper, highlightMapper } from 'utils/mappers'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

export async function getStaticProps() {
  const today = new Date().toISOString().slice(0, 10)

  const apolloClient = initializeApollo()

  const {
    data: { banners, newGames, upcomingGames, freeGames, sections }
  } = await apolloClient.query<QueryHome, QueryHomeVariables>({
    query: QUERY_HOME,
    variables: { date: today },
    fetchPolicy: 'no-cache'
  })

  return {
    revalidate: 30,
    props: {
      banners: bannerMapper(banners),

      newGamesTitle: sections?.newGames?.title,
      newGames: gamesMapper(newGames),

      mostPopularGamesTitle: sections?.popularGames?.title,
      mostPopularGames: gamesMapper(sections?.popularGames?.games),
      mostPopularHighlight: highlightMapper(sections?.popularGames?.highlight),

      upcomingGamesTitle: sections?.upcomingGames?.title,
      upcomingGames: gamesMapper(upcomingGames),
      upcomingHighlight: highlightMapper(sections?.upcomingGames?.highlight),

      freeGamesTitle: sections?.freeGames?.title,
      freeGames: gamesMapper(freeGames),
      freeGamesHighlight: highlightMapper(sections?.freeGames?.highlight)
    }
  }
}
