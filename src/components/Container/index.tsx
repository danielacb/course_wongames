import styled, { css } from 'styled-components'

export const Container = styled.div`
  ${({ theme }) => css`
    margin-left: auto;
    margin-right: auto;
    max-width: ${theme.grid.container};
    padding-left: calc(${theme.grid.gutter} / 2);
    padding-right: calc(${theme.grid.gutter} / 2);
  `}
`
