import Heading from 'components/Heading'
import Logo from 'components/Logo'

import * as S from './styles'

type AuthProps = {
  title: string
  children: React.ReactNode
}

const Auth = ({ title, children }: AuthProps) => (
  <S.Wrapper>
    <S.BannerBlock>
      <S.BannerContent>
        <Logo id="banner" />

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
        <Logo color="black" size="large" id="content" />
        <Heading color="black" lineColor="secondary" lineLeft>
          {title}
        </Heading>
        {children}
      </S.Content>
    </S.ContentWrapper>
  </S.Wrapper>
)

export default Auth
