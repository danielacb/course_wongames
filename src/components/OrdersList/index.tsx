import * as S from './styles'

import EmptyState from 'components/EmptyState'
import GameItem, { GameItemProps, PaymentInfoProps } from 'components/GameItem'
import Heading from 'components/Heading'

type OrderProps = {
  id: string
  paymentInfo: PaymentInfoProps
  games: GameItemProps[]
}

export type OrdersListProps = {
  items?: OrderProps[]
}

const OrdersList = ({ items }: OrdersListProps) => (
  <S.Wrapper>
    <Heading lineBottom lineColor="primary" color="black">
      My orders
    </Heading>

    {items?.length ? (
      items.map((order) => {
        return order.games.map((game) => (
          <GameItem key={game.id} {...game} paymentInfo={order.paymentInfo} />
        ))
      })
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
