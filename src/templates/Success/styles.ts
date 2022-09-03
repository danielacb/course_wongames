import styled, { css } from 'styled-components'

export const Wrapper = styled.div`
  ${({ theme }) => css`
    padding: ${theme.spacings.xxlarge} 0 calc(${theme.spacings.xxlarge} * 3);
  `}
`

export const Heading = styled.h1`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.xxlarge};
    text-align: center;
  `}
`

export const CheckMark = styled.div`
  ${({ theme }) => css`
    text-align: center;
    padding: ${theme.spacings.large};
    max-width: 82rem;
    margin: 0 auto;
    position: relative;

    &::before,
    &::after {
      content: '';
      position: absolute;
      height: 1px;
      width: calc(50% - 9rem);
      background: ${theme.colors.primary};
      top: 50%;
      transform: translateY(-50%);
      z-index: -1;
    }

    &::before {
      left: 0;
    }

    &::after {
      right: 0;
    }

    svg {
      outline: 1.25rem solid ${theme.colors.primary}33;
      color: ${theme.colors.white};
      background: ${theme.colors.primary};
      border-radius: 50%;
      padding: 1rem;
      width: 7rem;
    }
  `}
`

export const Text = styled.p`
  ${({ theme }) => css`
    color: ${theme.colors.white};
    font-size: ${theme.font.sizes.medium};
    text-align: center;
    max-width: 60rem;
    margin: auto;

    a {
      color: ${theme.colors.primary};
      text-decoration: none;
    }
  `}
`
