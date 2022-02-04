import Heading from 'components/Heading'
import EmptyState from 'components/EmptyState'
import GameItem, { GameItemProps } from 'components/GameItem'

import * as S from './styles'

export type OrdersListProps = {
  items?: GameItemProps[]
}

const OrdersList = ({ items }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black">
      My orders
    </Heading>

    {items?.length ? (
      items.map((item) => <GameItem key={item.downloadLink} {...item} />)
    ) : (
      <EmptyState
        title="You have no orders yet"
        description="Go back to the store and explore great games and offers"
        hasLink
      />
    )}
  </S.Wrapper>
)

export default OrdersList
