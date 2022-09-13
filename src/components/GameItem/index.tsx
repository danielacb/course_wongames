import * as S from './styles'
import { Download } from '@styled-icons/boxicons-solid/Download'
import { useCart } from 'hooks/use-cart'

export type PaymentInfoProps = {
  number: string
  flag: string | null
  img: string | null
  purchaseDate: string
}

export type GameItemProps = {
  id: string
  img: string
  name: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  id,
  img,
  name,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => {
  const { isInCart, removeFromCart } = useCart()

  return (
    <S.Wrapper>
      <S.GameContentWrapper>
        <S.ImageBox>
          <img src={img} alt={name} />
        </S.ImageBox>

        <S.GameContent>
          <S.Title>
            {name}
            {!!downloadLink && (
              <S.DownloadLink
                href={downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Get ${name} here`}
              >
                <Download size={22} />
              </S.DownloadLink>
            )}
          </S.Title>
          <S.Group>
            <S.Price>{price}</S.Price>
            {isInCart(id) && (
              <S.Remove onClick={() => removeFromCart(id)}>Remove</S.Remove>
            )}
          </S.Group>
        </S.GameContent>
      </S.GameContentWrapper>

      {!!paymentInfo && (
        <S.PaymentContent>
          <p>{paymentInfo.purchaseDate}</p>
          <S.CardInfo>
            <span>{paymentInfo.number}</span>
            {!!paymentInfo.img && paymentInfo.flag && (
              <img src={paymentInfo.img} alt={paymentInfo.flag} />
            )}
          </S.CardInfo>
        </S.PaymentContent>
      )}
    </S.Wrapper>
  )
}
export default GameItem
