import * as S from './styles'

export type GameItemProps = {
  img: string
  title: string
  price: string
}

const GameItem = ({ img, title, price }: GameItemProps) => (
  <S.Wrapper>
    <S.GameContentWrapper>
      <S.ImageBox>
        <img src={img} alt={title} />
      </S.ImageBox>

      <S.GameContent>
        <S.Title>{title}</S.Title>
        <S.Price>{price}</S.Price>
      </S.GameContent>
    </S.GameContentWrapper>
  </S.Wrapper>
)

export default GameItem
