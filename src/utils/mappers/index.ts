import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryHome_banners } from 'graphql/generated/QueryHome'
import formatPrice from 'utils/formatPrice'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: `http://localhost:1337${banner.image?.url}`,
    title: banner.title,
    subtitle: banner.subtitle,
    buttonLabel: banner.button?.label,
    buttonLink: banner.button?.link,
    ...(banner.ribbon && {
      ribbon: banner.ribbon.text,
      ribbonColor: banner.ribbon.color,
      ribbonSize: banner.ribbon.size
    })
  }))
}

export const gamesMapper = (games: QueryGames_games[] | null | undefined) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover?.url}`
          : '/img/banner-placeholder.png',
        price: game.price
      }))
    : []
}

export const highlightMapper = (
  highlight: HighlightFragment | null | undefined
) => {
  return highlight
    ? {
        title: highlight?.title,
        subtitle: highlight?.subtitle,
        backgroundImage: `http://localhost:1337${highlight?.background?.url}`,
        floatImage: highlight.floatImage?.url
          ? `http://localhost:1337${highlight?.floatImage?.url}`
          : null,
        buttonLabel: highlight?.buttonLabel,
        buttonLink: highlight?.buttonLink,
        alignment: highlight?.alignment
      }
    : {}
}

export const cartItemsMapper = (
  games: QueryGames_games[] | null | undefined
) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        img: game.cover?.url
          ? `http://localhost:1337${game.cover.url}`
          : '/img/banner-placeholder.png',
        name: game.name,
        price: formatPrice(game.price),
        slug: game.slug
      }))
    : []
}
