import styled, { css } from 'styled-components'
import media from 'styled-media-query'

import { Container } from 'components/Container'

export const Main = styled.div`
  margin-top: 20rem;

  ${media.greaterThan('medium')`
    margin-top: 37rem;
  `}
`

type CoverProps = {
  src: string
}

export const Cover = styled.div<CoverProps>`
  ${({ src }) => css`
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    height: 39.5rem;
    background-image: url(${src}), url('/img/banner-placeholder.png');
    background-size: cover;
    background-position: top center;

    &::after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: #000000;
      opacity: 0.7;
    }

    ${media.greaterThan('medium')`
      height: 70rem;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0 85%);
    `}
  `}
`

const Section = styled(Container).attrs({ as: 'section' })`
  ${({ theme }) => css`
    margin-bottom: ${theme.spacings.xlarge};

    ${media.greaterThan('medium')`
      margin-bottom: calc(${theme.spacings.xlarge} * 2);
    `}
  `}
`

export const SectionGameInfo = styled(Section)``
export const SectionUpcomingGames = styled(Section)``
export const SectionUpcomingHighlight = styled(Section)``
export const SectionRecommendedGames = styled(Section)``

export const SectionGallery = styled(Section)`
  display: none;

  ${media.greaterThan('medium')`
    display: block;
  `}
`

export const SectionDescription = styled(Section)`
  ${({ theme }) => css`
    .description__copyrights {
      color: ${theme.colors.gray};
      font-size: ${theme.font.sizes.xsmall};
      margin-top: ${theme.spacings.medium};
    }
  `}
`

export const SectionGameDetails = styled(Section)``
