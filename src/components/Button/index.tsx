import Loading from 'components/Loading'
import React, {
  AnchorHTMLAttributes,
  ButtonHTMLAttributes,
  forwardRef
} from 'react'

import * as S from './styles'

type ButtonTypes =
  | AnchorHTMLAttributes<HTMLAnchorElement>
  | ButtonHTMLAttributes<HTMLButtonElement>

export type ButtonProps = {
  size?: 'small' | 'medium' | 'large'
  fullWidth?: boolean
  icon?: React.ReactNode
  minimal?: boolean
  loading?: boolean
  as?: React.ElementType
} & ButtonTypes

const Button: React.ForwardRefRenderFunction<S.WrapperProps, ButtonProps> = (
  { children, size, fullWidth, icon, minimal, loading, ...props },
  ref
) => (
  <S.Wrapper
    size={size}
    fullWidth={fullWidth}
    hasIcon={!!icon}
    minimal={minimal}
    ref={ref}
    {...props}
  >
    {loading ? (
      <Loading color="white" size="small" />
    ) : (
      <>
        {!!icon && icon}
        {!!children && <span>{children}</span>}
      </>
    )}
  </S.Wrapper>
)

export default forwardRef(Button)
