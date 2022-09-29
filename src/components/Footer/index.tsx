import * as S from './styles'
import Link from 'next/link'

import Heading from 'components/Heading'
import Logo from 'components/Logo'

const Footer = () => (
  <S.Wrapper>
    <Logo color="black" />

    <S.Content>
      <S.Column aria-label="contact">
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Contact
        </Heading>
        <a href="mailto:noreply@danielacb.com">noreply@danielacb.com</a>
      </S.Column>

      <S.Column aria-labelledby="social-media">
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Follow us
        </Heading>
        <nav id="social-media">
          <a
            href="https://www.instagram.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Instagram
          </a>
          <a
            href="https://www.twitter.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Twitter
          </a>
          <a
            href="https://www.youtube.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Youtube
          </a>
          <a
            href="https://www.facebook.com/won-games"
            target="_blank"
            rel="noopenner, noreferrer"
          >
            Facebook
          </a>
        </nav>
      </S.Column>

      <S.Column aria-labelledby="footer-resources">
        <Heading color="black" lineBottom lineColor="secondary" size="small">
          Links
        </Heading>
        <nav id="footerresources">
          <Link href="/">
            <a>Home</a>
          </Link>
          <Link href="/games">
            <a>Store</a>
          </Link>
          <Link href="/search">
            <a>Buscar</a>
          </Link>
        </nav>
      </S.Column>

      <S.Column aria-label="location">
        <Heading color="black" lineColor="secondary" lineBottom size="small">
          Location
        </Heading>
        <span>Lorem ipsum dolor sit.</span>
        <span>Lorem Ipsum</span>
        <span>Lorem, ipsum dolor.</span>
      </S.Column>
    </S.Content>

    <S.Copyright>Won Games 2021 © All rights reserved.</S.Copyright>
  </S.Wrapper>
)

export default Footer
