import { Download } from '@styled-icons/boxicons-solid/Download'
import * as S from './styles'

export type PaymentInfoProps = {
  number: string
  flag: string
  img: string
  purchaseDate: string
}

export type GameItemProps = {
  img: string
  name: string
  price: string
  downloadLink?: string
  paymentInfo?: PaymentInfoProps
}

const GameItem = ({
  img,
  name,
  price,
  downloadLink,
  paymentInfo
}: GameItemProps) => (
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
        <S.Price>{price}</S.Price>
      </S.GameContent>
    </S.GameContentWrapper>

    {!!paymentInfo && (
      <S.PaymentContent>
        <p>{paymentInfo.purchaseDate}</p>
        <S.CardInfo>
          <span>{paymentInfo.number}</span>
          <img src={paymentInfo.img} alt={paymentInfo.flag} />
        </S.CardInfo>
      </S.PaymentContent>
    )}
  </S.Wrapper>
)

export default GameItem
