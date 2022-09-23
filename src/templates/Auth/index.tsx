import * as S from './styles'
import Image from 'next/image'
import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <Image
        src="/img/auth-bg.jpg"
        alt="Won Games Auth Page"
        layout="fill"
        objectFit="cover"
      />
      <S.BannerContent>
        <Link href="/">
          <a>
            <Logo id="banner" />
          </a>
        </Link>

        <div>
          <Heading size="huge">All your favorite games in one place</Heading>
          <S.SubTitle>
            <strong>WON</strong> is the best and most complete gaming platform.
          </S.SubTitle>
        </div>

        <S.BannerFooter>Won Games 2020 © All Rights Reserved</S.BannerFooter>
      </S.BannerContent>
    </S.BannerBlock>

    <S.ContentWrapper>
      <S.Content>
        <Link href="/">
          <a>
            <Logo color="black" size="large" id="content" />
          </a>
        </Link>

        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.Content>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Auth
