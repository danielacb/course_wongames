import { HighlightProps } from '.'
import styled, { css } from 'styled-components'
import media from 'styled-media-query'

const wrapperModifier = {
  left: () => css`
    grid-template-areas: 'content floatimage';
    grid-template-columns: 2fr 1.3fr;

    ${Content} {
      text-align: left;
    }

    ${FloatImageWrapper} {
      justify-self: end;
    }
  `,

  right: () => css`
    grid-template-areas: 'floatimage content';
    grid-template-columns: 1.3fr 2fr;

    ${Content} {
      text-align: right;
    }
  `
}

type WrapperProps = Pick<HighlightProps, 'alignment'>

export const Wrapper = styled.section<WrapperProps>`
  ${({ alignment = 'right' }) => css`
    position: relative;
    height: 23rem;
    display: grid;

    ${!!alignment && wrapperModifier[alignment]()}

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.6);
    }

    img {
      position: absolute;
      object-fit: cover;
    }

    ${media.greaterThan('medium')`
      height: 32rem;
    `}
  `}
`
export const Content = styled.div`
  ${({ theme }) => css`
    grid-area: content;
    z-index: ${theme.layers.base};
    padding: ${theme.spacings.xsmall};

    ${media.greaterThan('medium')`
      align-self: end;
      padding: ${theme.spacings.xlarge};
    `}
  `}
`
export const Title = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.large};
    font-weight: ${theme.font.bold};
    color: ${theme.colors.white};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.xxlarge};
    `}
  `}
`

export const Subtitle = styled.h2`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    font-weight: ${theme.font.light};
    color: ${theme.colors.white};
    margin-bottom: ${theme.spacings.medium};

    ${media.greaterThan('medium')`
      font-size: ${theme.font.sizes.large};
      `}
  `}
`

export const FloatImageWrapper = styled.div`
  ${({ theme }) => css`
    grid-area: floatimage;
    align-self: end;
    z-index: ${theme.layers.base};
    max-height: 23rem;
    max-width: 100%;

    img {
      position: relative;
      object-fit: contain;
    }

    ${media.greaterThan('medium')`
      max-height: 32rem;
    `}
  `}
`
