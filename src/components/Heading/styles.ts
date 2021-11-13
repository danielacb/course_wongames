import styled, { css, DefaultTheme } from 'styled-components'
import media from 'styled-media-query'

import { HeadingProps } from '.'

type LineColors = 'primary' | 'secondary'

export const wrapperModifiers = {
  lineLeft: (theme: DefaultTheme, lineColor: LineColors) => css`
    padding-left: ${theme.spacings.xxsmall};
    border-left: 0.7rem solid ${theme.colors[lineColor]};
  `,

  lineBottom: (theme: DefaultTheme) => css`
    position: relative;
    margin-bottom: ${theme.spacings.medium};
    &::after {
      position: absolute;
      left: 0;
      content: '';
    }
  `,

  small: (theme: DefaultTheme, lineColor: LineColors) => css`
    font-size: ${theme.font.sizes.medium};

    &::after {
      width: 3rem;
      bottom: -1rem;
      border-bottom: 0.4rem solid ${theme.colors[lineColor]};
    }
  `,

  medium: (theme: DefaultTheme, lineColor: LineColors) => css`
    font-size: ${theme.font.sizes.xlarge};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}

    &::after {
      width: 5rem;
      bottom: -1.2rem;
      border-bottom: 0.5rem solid ${theme.colors[lineColor]};
    }
  `,

  huge: (theme: DefaultTheme) => css`
    font-size: ${theme.font.sizes.huge};
  `
}

export const Wrapper = styled.h2<HeadingProps>`
  ${({
    theme,
    color = 'white',
    lineLeft,
    lineBottom,
    size = 'medium',
    lineColor = 'primary'
  }) => css`
    color: ${theme.colors[color]};

    ${lineLeft && wrapperModifiers.lineLeft(theme, lineColor)}
    ${lineBottom && wrapperModifiers.lineBottom(theme)}
    ${!!size && wrapperModifiers[size](theme, lineColor)}
  `}
`
