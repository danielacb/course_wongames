import { useQuery } from '@apollo/client'

import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard, { GameCardProps } from 'components/GameCard'
import { Grid } from 'components/Grid'
import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'
import Base from 'templates/Base'

import * as S from './styles'
import { QUERY_GAMES } from 'graphql/queries/games'
import { QueryGames, QueryGamesVariables } from 'graphql/generated/QueryGames'
import Loading from 'components/Loading'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
  games?: GameCardProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { data, loading, fetchMore } = useQuery<
    QueryGames,
    QueryGamesVariables
  >(QUERY_GAMES, { variables: { limit: 12 } })

  const handleFilter = () => {
    return
  }

  const handleShowMore = () => {
    fetchMore({
      variables: { limit: 12, start: data?.games.length }
    })
  }

  return (
    <Base>
      <S.Main>
        <ExploreSidebar items={filterItems} onFilter={handleFilter} />

        {loading ? (
          <Loading />
        ) : (
          <section>
            <Grid>
              {data &&
                data.games.map((game) => (
                  <GameCard
                    key={game.slug}
                    slug={game.slug}
                    title={game.name}
                    developer={game.developers[0].name}
                    img={`http://localhost:1337${game.cover?.url}`}
                    price={game.price}
                  />
                ))}
            </Grid>

            <S.ShowMore role="button" onClick={handleShowMore}>
              <p>show more</p>
              <KeyboardArrowDown size={35} />
            </S.ShowMore>
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
