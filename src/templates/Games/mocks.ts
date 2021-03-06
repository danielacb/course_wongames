import { QUERY_GAMES } from 'graphql/queries/games'

export const noGamesMock = {
  request: {
    query: QUERY_GAMES,
    variables: { limit: 15, where: {} }
  },
  result: {
    data: {
      games: [],
      gamesConnection: {
        values: [],
        __typename: 'GameConnection'
      }
    }
  }
}

export const gamesMock = [
  {
    request: {
      query: QUERY_GAMES,
      variables: { limit: 12, where: {} }
    },
    result: {
      data: {
        games: [
          {
            id: '1',
            name: 'Sample Game',
            slug: 'sample-game',
            cover: {
              url: '/uploads/sample-games.jpg'
            },
            developers: [{ name: 'Sample Studios' }],
            price: 65.99,
            __typename: 'Game'
          }
        ],
        gamesConnection: {
          values: [{ id: '1' }, { id: '2' }],
          __typename: 'GameConnection'
        }
      }
    }
  }
]

export const fetchMoreMock = [
  {
    request: {
      query: QUERY_GAMES,
      variables: { limit: 12, where: {}, start: 1 }
    },
    result: {
      data: {
        games: [
          {
            id: '2',
            name: 'Fetch More Game',
            slug: 'fetch-more-game',
            cover: {
              url: '/uploads/fetch-more-games.jpg'
            },
            developers: [{ name: 'Fetch More Studios' }],
            price: 62.99,
            __typename: 'Game'
          }
        ],
        gamesConnection: {
          values: [{ id: '1' }, { id: '2' }],
          __typename: 'GameConnection'
        }
      }
    }
  }
]
