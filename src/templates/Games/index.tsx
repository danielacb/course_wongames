import { useRouter } from 'next/router'
import { ParsedUrlQueryInput } from 'querystring'

import { KeyboardArrowDown } from '@styled-icons/material-outlined/KeyboardArrowDown'

import { useQueryGames } from 'graphql/queries/games'
import { parseQueryStringToFilter, parseQueryStringToWhere } from 'utils/filter'
import ExploreSidebar, { ItemProps } from 'components/ExploreSidebar'
import GameCard from 'components/GameCard'
import { Grid } from 'components/Grid'
import Loading from 'components/Loading'
import Base from 'templates/Base'

import * as S from './styles'
import EmptyState from 'components/EmptyState'

export type GamesTemplateProps = {
  filterItems: ItemProps[]
}

const GamesTemplate = ({ filterItems }: GamesTemplateProps) => {
  const { push, query } = useRouter()
  const { data, loading, fetchMore } = useQueryGames({
    variables: {
      limit: 12,
      where: parseQueryStringToWhere({ queryString: query, filterItems }),
      sort: query.sort as string | null
    }
  })

  const handleFilter = (items: ParsedUrlQueryInput) => {
    push({
      pathname: '/games',
      query: items
    })
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
        <ExploreSidebar
          initialValues={parseQueryStringToFilter({
            queryString: query,
            filterItems
          })}
          items={filterItems}
          onFilter={handleFilter}
        />

        {loading ? (
          <Loading />
        ) : (
          <section>
            {data?.games.length ? (
              <>
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
              </>
            ) : (
              <EmptyState
                title=":("
                description="We didn't find any games with this filter"
                hasLink
              />
            )}
          </section>
        )}
      </S.Main>
    </Base>
  )
}

export default GamesTemplate
