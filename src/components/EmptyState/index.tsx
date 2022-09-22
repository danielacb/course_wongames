import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

import Button from 'components/Button'

export type EmptyProps = {
  title: string
  description: string
  hasLink?: boolean
}

const EmptyState = ({ title, description, hasLink }: EmptyProps) => (
  <S.Wrapper>
    <Image
      src="/img/empty.svg"
      alt="A person sitting on a couch playing videogame"
      role="img"
      width={380}
      height={285}
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
