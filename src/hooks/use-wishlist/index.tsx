import { createContext, useContext, useEffect, useState } from 'react'
import { GameCardProps } from 'components/GameCard'
import { useQueryWishlist } from 'graphql/queries/wishlist'
import { useSession } from 'next-auth/client'
import { gamesMapper } from 'utils/mappers'
import { QueryWishlist_wishlists_games } from 'graphql/generated/QueryWishlist'

export type WishlistContextData = {
  items: GameCardProps[]
  loading: boolean
  isInWishlist: (id: string) => boolean
}

export const WishlistContextDefaultValues = {
  items: [],
  loading: false,
  isInWishlist: () => false
}

export const WishlistContext = createContext<WishlistContextData>(
  WishlistContextDefaultValues
)

export type WishlistProviderProps = {
  children: React.ReactNode
}

export const WishlistProvider = ({ children }: WishlistProviderProps) => {
  const [session] = useSession()
  const [wishlistItems, setWishlistItems] = useState<
    QueryWishlist_wishlists_games[]
  >([])

  const { data, loading: loadingQuery } = useQueryWishlist({
    skip: !session?.user?.email,
    context: { session },
    variables: { identifier: session?.user?.email as string }
  })

  useEffect(() => {
    setWishlistItems(data?.wishlists[0]?.games || [])
  }, [data])

  const isInWishlist = (id: string) =>
    !!wishlistItems.find((game) => game.id === id)

  return (
    <WishlistContext.Provider
      value={{
        items: gamesMapper(wishlistItems),
        isInWishlist,
        loading: loadingQuery
      }}
    >
      {children}
    </WishlistContext.Provider>
  )
}

const useWishlist = () => useContext(WishlistContext)

export default useWishlist
