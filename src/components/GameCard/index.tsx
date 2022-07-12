import { Favorite, FavoriteBorder } from '@styled-icons/material-outlined'
import CartButton from 'components/CartButton'
import Ribbon, { RibbonColors, RibbonSizes } from 'components/Ribbon'
import Link from 'next/link'
import formatPrice from 'utils/formatPrice'
import { imageOnErrorHandler } from 'utils/imageOnErrorHandler'
import * as S from './styles'

export type GameCardProps = {
  id: string
  slug: string
  title: string
  developer: string
  img: string
  price: number
  promotionalPrice?: number
  favorite?: boolean
  onFav?: () => void
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
  favorite,
  onFav,
  ribbon,
  ribbonColor,
  ribbonSize
}: GameCardProps) => (
  <S.Wrapper>
    {!!ribbon && (
      <Ribbon color={ribbonColor} size={ribbonSize}>
        {ribbon}
      </Ribbon>
    )}

    <Link href={`game/${slug}`} passHref>
      <S.ImageBox>
        <img
          src={img}
          alt={title}
          onError={(event) =>
            imageOnErrorHandler(event, '/img/banner-placeholder.png')
          }
        />
      </S.ImageBox>
    </Link>

    <S.Content>
      <Link href={`/game/${slug}`}>
        <S.Info>
          <S.Title>{title}</S.Title>
          <S.Developer>{developer}</S.Developer>
        </S.Info>
      </Link>

      <S.FavButton role="button" onClick={onFav}>
        {favorite ? (
          <Favorite aria-label="Remove from wishlist" />
        ) : (
          <FavoriteBorder aria-label="Add to wishlist" />
        )}
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
