import * as S from './styles'
import Image from 'next/image'

import Button from 'components/Button'

export type HighlightProps = {
  title: string
  subtitle: string
  buttonLabel: string
  buttonLink: string
  backgroundImage: string
  floatImage?: string
  alignment?: 'left' | 'right'
}

const Highlight = ({
  title,
  subtitle,
  buttonLabel,
  buttonLink,
  backgroundImage,
  floatImage,
  alignment
}: HighlightProps) => (
  <S.Wrapper alignment={alignment}>
    <Image src={backgroundImage} alt={`${title} background`} layout="fill" />
    {!!floatImage && (
      <S.FloatImageWrapper>
        <Image src={floatImage} alt={title} width={400} height={300} />
      </S.FloatImageWrapper>
    )}
    <S.Content>
      <S.Title>{title}</S.Title>
      <S.Subtitle>{subtitle}</S.Subtitle>
      <Button as="a" href={buttonLink}>
        {buttonLabel}
      </Button>
    </S.Content>
  </S.Wrapper>
)

export default Highlight
