import { Close as CloseIcon } from '@styled-icons/material-outlined/Close'
import { Search as SearchIcon } from '@styled-icons/material-outlined/Search'
import { Menu2 as MenuIcon } from '@styled-icons/remix-fill/Menu2'
import Link from 'next/link'
import { useState } from 'react'

import Button from 'components/Button'
import CartDropdown from 'components/CartDropdown'
import CartIcon from 'components/CartIcon'
import Logo from 'components/Logo'
import MediaMatch from 'components/MediaMatch'
import UserDropdown from 'components/UserDropdown'

import * as S from './styles'

export type MenuProps = {
  username?: string | null
  loading?: boolean
}

const Menu = ({ username, loading }: MenuProps) => {
  const [isOpen, setisOpen] = useState(false)

  return (
    <S.Wrapper>
      <MediaMatch lessThan="medium">
        <S.IconWrapper>
          <MenuIcon aria-label="Open Menu" onClick={() => setisOpen(true)} />
        </S.IconWrapper>
      </MediaMatch>

      <S.LogoWrapper>
        <Link href="/" passHref>
          <a>
            <Logo hideOnMobile />
          </a>
        </Link>
      </S.LogoWrapper>

      <MediaMatch greaterThan="medium">
        <S.MenuNav>
          <Link href="/" passHref>
            <S.MenuLink>Home</S.MenuLink>
          </Link>
          <Link href="/games" passHref>
            <S.MenuLink>Explore</S.MenuLink>
          </Link>
        </S.MenuNav>
      </MediaMatch>

      {!loading && (
        <>
          <S.MenuGroup>
            <S.IconWrapper>
              <SearchIcon aria-label="search" />
            </S.IconWrapper>
            <MediaMatch greaterThan="medium">
              <CartDropdown />
            </MediaMatch>
            <MediaMatch lessThan="medium">
              <Link href="/cart">
                <a>
                  <CartIcon />
                </a>
              </Link>
            </MediaMatch>
            <MediaMatch greaterThan="medium">
              {!username ? (
                <Link href="/signin" passHref>
                  <Button as="a">Sign in</Button>
                </Link>
              ) : (
                <UserDropdown username={username} />
              )}
            </MediaMatch>
          </S.MenuGroup>

          <S.MenuFull aria-hidden={!isOpen} isOpen={isOpen}>
            <CloseIcon
              aria-label="Close Menu"
              onClick={() => setisOpen(false)}
            />

            <S.MenuNav>
              <Link href="/" passHref>
                <S.MenuLink>Home</S.MenuLink>
              </Link>
              <Link href="/games" passHref>
                <S.MenuLink>Explore</S.MenuLink>
              </Link>
              {!!username && (
                <>
                  <Link href="/profile/me" passHref>
                    <S.MenuLink>My profile</S.MenuLink>
                  </Link>
                  <Link href="/wishlist" passHref>
                    <S.MenuLink>Wishlist</S.MenuLink>
                  </Link>
                </>
              )}
            </S.MenuNav>

            {!username && (
              <S.RegisterBox>
                <Link href="/signin" passHref>
                  <Button fullWidth size="large" as="a">
                    Log in now
                  </Button>
                </Link>
                <span>or</span>
                <Link href="/signup" passHref>
                  <S.CreateAccount href="#">Sign up</S.CreateAccount>
                </Link>
              </S.RegisterBox>
            )}
          </S.MenuFull>
        </>
      )}
    </S.Wrapper>
  )
}

export default Menu
