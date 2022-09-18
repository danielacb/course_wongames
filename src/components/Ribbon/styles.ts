import { RibbonColors, RibbonProps } from '.'
import styled, { DefaultTheme, css } from 'styled-components'

const wrapperModifier = {
  color: (theme: DefaultTheme, color: RibbonColors) => css`
    background-color: ${theme.colors[color]};

    &::before {
      border-left-color: ${theme.colors[color]};
      border-top-color: ${theme.colors[color]};
    }

    &::after {
      border-left-color: rgba(29, 29, 29, 0.44);
      border-top-color: rgba(29, 29, 29, 0.44);
    }
  `,

  normal: (theme: DefaultTheme) => css`
    height: 3.6rem;
    font-size: ${theme.font.sizes.small};
    padding: 0 ${theme.spacings.small};
    right: -2rem;

    &::after,
    &::before {
      top: 3.6rem;
      border-top-width: 1rem;
      border-right-width: 2rem;
    }
  `,

  small: (theme: DefaultTheme) => css`
    height: 2.6rem;
    font-size: ${theme.font.sizes.xsmall};
    padding: 0 ${theme.spacings.xsmall};
    right: -1.5rem;

    &::after,
    &::before {
      top: 2.6rem;
      border-top-width: 0.7rem;
      border-right-width: 1.5rem;
    }
  `
}

export const Wrapper = styled.div<Omit<RibbonProps, 'children'>>`
  ${({ theme, color = 'primary', size = 'normal' }) => css`
    position: absolute;
    top: ${theme.spacings.xsmall};
    display: flex;
    align-items: center;
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};
    z-index: ${theme.layers.base};

    &::after,
    &::before {
      content: '';
      position: absolute;
      right: 0;
      border-style: solid;
      border-left-width: 0;
      border-right-color: transparent;
      border-bottom-color: transparent;
      border-bottom-width: 1rem;
    }

    ${!!color && wrapperModifier.color(theme, color)}
    ${!!size && wrapperModifier[size](theme)}
  `}
`
