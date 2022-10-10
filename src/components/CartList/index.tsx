import * as S from './styles'
import { useCart } from 'hooks/use-cart'
import Link from 'next/link'

import Button from 'components/Button'
import EmptyState from 'components/EmptyState'
import GameItem from 'components/GameItem'
import Loading from 'components/Loading'

export type CartListProps = {
  hasButton?: boolean
}

const CartList = ({ hasButton }: CartListProps) => {
  const { items, total, loading } = useCart()

  if (loading) {
    return (
      <S.Loading>
        <Loading />
      </S.Loading>
    )
  }

  return (
    <S.Wrapper isEmpty={!items.length} data-cy="cart-list">
      {items.length ? (
        <>
          <S.GameList>
            {items.map((item) => (
              <Link href={`game/${item.slug}`} key={item.name}>
                <a>
                  <GameItem {...item} />
                </a>
              </Link>
            ))}
          </S.GameList>

          <S.Footer>
            {!hasButton && <span>Total:</span>}
            <S.Total>{total}</S.Total>
            {hasButton && (
              <Link href="/cart">
                <Button as="a">Buy it now</Button>
              </Link>
            )}
          </S.Footer>
        </>
      ) : (
        <EmptyState
          title="Your cart is empty"
          description="Go back to the store and explore great games and offers"
          hasLink
        />
      )}
    </S.Wrapper>
  )
}

export default CartList
