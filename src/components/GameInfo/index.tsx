import * as S from './styles'
import formatPrice from 'utils/formatPrice'

import CartButton from 'components/CartButton'
import Heading from 'components/Heading'
import Ribbon from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'

export type GameInfoProps = {
  id: string
  title: string
  description: string
  price: number
}

const GameInfo = ({ id, title, description, price }: GameInfoProps) => (
  <S.Wrapper data-cy="game-info">
    <Heading color="black" lineBottom>
      {title}
    </Heading>

    <Ribbon color="secondary">{formatPrice(price)}</Ribbon>

    <S.Description>{description}</S.Description>

    <S.ButtonsWrapper>
      <CartButton id={id} size="large" hasText />
      <WishlistButton id={id} hasText size="large" />
    </S.ButtonsWrapper>
  </S.Wrapper>
)

export default GameInfo
