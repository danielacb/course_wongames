import { HighlightFragment } from 'graphql/generated/HighlightFragment'
import { QueryGames_games } from 'graphql/generated/QueryGames'
import { QueryHome_banners } from 'graphql/generated/QueryHome'
import { QueryOrders_orders } from 'graphql/generated/QueryOrders'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'
import formatPrice from 'utils/formatPrice'
import { getImageUrl } from 'utils/getImageUrl'

export const bannerMapper = (banners: QueryHome_banners[]) => {
  return banners.map((banner) => ({
    img: getImageUrl({ url: banner.image?.url }),
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

export const gamesMapper = (
  games: QueryGames_games[] | QueryWishlist_wishlists_games[] | null | undefined
) => {
  return games
    ? games.map((game) => ({
        id: game.id,
        title: game.name,
        slug: game.slug,
        developer: game.developers[0].name,
        img: getImageUrl({ url: game.cover?.url }),
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
        backgroundImage: getImageUrl({ url: highlight?.background?.url }),
        floatImage: highlight.floatImage?.url
          ? getImageUrl({ url: highlight?.floatImage?.url })
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
        img: getImageUrl({ url: game.cover?.url }),
        name: game.name,
        price: formatPrice(game.price),
        slug: game.slug
      }))
    : []
}

export const ordersMapper = (orders: QueryOrders_orders[] | undefined) => {
  return orders
    ? orders.map((order) => {
        return {
          id: order.id,
          paymentInfo: {
            flag: order.card_brand,
            img: order.card_brand ? `/img/cards/${order.card_brand}.png` : null,
            number: order.card_last4
              ? `∗∗∗∗ ∗∗∗∗ ∗∗∗∗ ${order.card_last4}`
              : 'Free Game',
            purchaseDate: `Purchase made on ${new Intl.DateTimeFormat('en-US', {
              day: 'numeric',
              month: 'short',
              year: 'numeric'
            }).format(new Date(order.created_at))}`
          },
          games: order.games.map((game) => ({
            id: game.id,
            name: game.name,
            downloadLink:
              'https://wongames.com/game/download/yuYT56Tgh431LkjhNBgdf',
            img: getImageUrl({ url: game.cover?.url }),
            price: formatPrice(game.price)
          }))
        }
      })
    : []
}
