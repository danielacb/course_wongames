import Button, { ButtonProps } from 'components/Button'
import useWishlist from 'hooks/use-wishlist'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { useSession } from 'next-auth/client'
import { useState } from 'react'
import Loading from 'components/Loading'
import styled from 'styled-components'

type WishlistButtonProps = {
  id: string
  hasText?: boolean
} & Pick<ButtonProps, 'size'>

const WishlistButton = ({
  id,
  hasText,
  size = 'small'
}: WishlistButtonProps) => {
  const [session] = useSession()
  const [loading, setLoading] = useState(false)
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()

  if (!session) return null

  const handleClick = async () => {
    setLoading(true)
    isInWishlist(id) ? await removeFromWishlist(id) : await addToWishlist(id)
    setLoading(false)
  }

  const ButtonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'
  return (
    <Button
      icon={
        loading ? (
          <LoadingContainer>
            <Loading size="small" />
          </LoadingContainer>
        ) : isInWishlist(id) ? (
          <Favorite aria-label={ButtonText} />
        ) : (
          <FavoriteBorder aria-label={ButtonText} />
        )
      }
      minimal
      size={size}
      onClick={handleClick}
    >
      {hasText && ButtonText}
    </Button>
  )
}

export default WishlistButton

const LoadingContainer = styled.div`
  width: 2.5rem;
`
