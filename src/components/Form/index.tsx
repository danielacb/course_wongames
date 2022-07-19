import styled, { css } from 'styled-components'

import * as TextFieldStyles from 'components/TextField/styles'
import * as ButtonStyles from 'components/Button/styles'

export const FormWrapper = styled.div`
  ${({ theme }) => css`
    ${TextFieldStyles.Wrapper} {
      margin: ${theme.spacings.xxsmall} 0;
    }

    ${ButtonStyles.Wrapper} {
      margin: ${theme.spacings.small} 0 ${theme.spacings.xsmall};
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

export const FormError = styled.div`
  ${({ theme }) => css`
    text-align: center;
    color: ${theme.colors.red};
    font-size: ${theme.font.sizes.small};
    margin-bottom: ${theme.spacings.xsmall};

    svg {
      width: 1.6rem;
    }
  `}
`

export const FormSuccess = styled.div`
  ${({ theme }) => css`
    text-align: left;
    color: ${theme.colors.black};
    font-size: ${theme.font.sizes.small};

    svg {
      color: ${theme.colors.secondary};
      width: 2.4rem;
    }
  `}
`
