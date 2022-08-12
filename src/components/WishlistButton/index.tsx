import Button, { ButtonProps } from 'components/Button'
import useWishlist from 'hooks/use-wishlist'
import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import { useSession } from 'next-auth/client'

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
  const { addToWishlist, isInWishlist, removeFromWishlist } = useWishlist()

  if (!session) return null

  const handleClick = () => {
    isInWishlist(id) ? removeFromWishlist(id) : addToWishlist(id)
  }

  const ButtonText = isInWishlist(id)
    ? 'Remove from wishlist'
    : 'Add to wishlist'
  return (
    <Button
      icon={
        isInWishlist(id) ? (
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
