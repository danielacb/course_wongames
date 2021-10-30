import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const Wrapper = styled.main`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.medium} 0 ${theme.spacings.xsmall};
    }
  `}
`

export const FormLink = styled.div`
  ${({ theme }) => css`
    font-size: ${theme.font.sizes.small};
    color: ${theme.colors.black};
    text-align: center;

    a {
      color: ${theme.colors.secondary};
      text-decoration: none;
      border-bottom: 0.1rem solid ${theme.colors.secondary};
      transition: filter ${theme.transition.fast};

      &:hover {
        filter: brightness(80%);
      }
    }
  `}
`
