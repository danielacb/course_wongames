import Link from 'next/link'

import Button from 'components/Button'
import EmptyState from 'components/EmptyState'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type CartListProps = {
  items?: GameItemProps[]
  total?: string
  hasButton?: boolean
}

const CartList = ({ items = [], total, hasButton }: CartListProps) => (
  <S.Wrapper isEmpty={!items.length}>
    {items.length ? (
      <>
        {items.map((item) => (
          <GameItem key={item.title} {...item} />
        ))}

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

export default CartList
