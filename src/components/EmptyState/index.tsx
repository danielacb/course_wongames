import Button from 'components/Button'
import Link from 'next/link'

import * as S from './styles'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const EmptyState = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <S.Image
      src="/img/empty.svg"
      alt="A person sitting on a couch playing videogame"
      role="img"
    />
    <S.Title>{title}</S.Title>
    <S.Descripton>{description}</S.Descripton>

    {hasLink && (
      <Link href="/" passHref>
        <Button as="a">Go back to the store</Button>
      </Link>
    )}
  </S.Wrapper>
)

export default EmptyState
