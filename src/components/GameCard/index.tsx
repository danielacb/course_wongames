import * as S from './styles'
import Link from 'next/link'
import formatPrice from 'utils/formatPrice'
import { ImageWithFallback } from 'utils/imageOnErrorHandler'

import CartButton from 'components/CartButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import WishlistButton from 'components/WishlistButton'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  ribbon?: React.ReactNode
  ribbonColor?: RibbonColors
  ribbonSize?: RibbonSizes
}

const GameCard = ({
  id,
  slug,
  title,
  developer,
  img,
  price,
  promotionalPrice,

  ribbon,
  ribbonColor,
  ribbonSize
}: GameCardProps) => (
  <S.Wrapper data-cy="game-card">
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <ImageWithFallback src={img} alt={title} />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`/game/${slug}`}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavButton>
        <WishlistButton id={id} />
      </S.FavButton>

      <S.BuyBox>
        {!!promotionalPrice && (
          <S.Price isPromotional>{formatPrice(price)}</S.Price>
        )}
        <S.Price>{formatPrice(promotionalPrice || price)}</S.Price>
        <CartButton id={id} />
      </S.BuyBox>
    </S.Content>
  </S.Wrapper>
)

export default GameCard
