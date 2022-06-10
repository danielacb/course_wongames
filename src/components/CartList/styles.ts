import * as EmptyStateStyles from 'components/EmptyState/styles'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

type WrapperProps = {
  isEmpty: boolean
}

export const Wrapper = styled.div<WrapperProps>`
  ${({ theme, isEmpty }) => css`
    background: ${theme.colors.white};
    display: flex;
    flex-direction: column;
    align-self: start;

    ${isEmpty &&
    css`
      ${EmptyStateStyles.Wrapper} {
        padding-bottom: ${theme.spacings.medium};
      }
      ${EmptyStateStyles.Image} {
        max-width: 20rem;
      }
      ${EmptyStateStyles.Title} {
        font-size: ${theme.font.sizes.large};
      }
      ${EmptyStateStyles.Descripton} {
        color: ${theme.colors.black};
        font-size: ${theme.font.sizes.medium};
      }
    `}
  `}
`

export const Footer = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.lightBg};
    color: ${theme.colors.black};
    font-weight: ${theme.font.bold};
    font-size: ${theme.font.sizes.small};
    padding: 2rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.medium};
      padding: ${theme.spacings.small};
    `};
  `}
`

export const Total = styled.span`
  ${({ theme }) => css`
    color: ${theme.colors.primary};
  `}
`

export const Loading = styled.div`
  ${({ theme }) => css`
    background: ${theme.colors.white};
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40rem;
    min-width: 56rem;
  `}
`

export const GameList = styled.div`
  max-height: 40rem;
  overflow-y: auto;

  a {
    text-decoration: none;
  }
`
