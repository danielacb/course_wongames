import styled, { css, DefaultTheme, keyframes } from 'styled-components'

export type LoadingProps = {
  color?: 'primary' | 'secondary' | 'white'
  size?: 'small' | 'medium' | 'large'
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`

const spin = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`

const loadingModifier = {
  primary: (theme: DefaultTheme) => css`
    border-top-color: ${theme.colors.primary};
    border-right-color: ${theme.colors.primary};
  `,

  secondary: (theme: DefaultTheme) => css`
    border-top-color: ${theme.colors.secondary};
    border-right-color: ${theme.colors.secondary};
  `,

  white: (theme: DefaultTheme) => css`
    border-top-color: ${theme.colors.white};
    border-right-color: ${theme.colors.white};
  `,

  small: () => css`
    width: 2rem;
    height: 2rem;
    border-width: 0.3rem;
  `,

  medium: () => css`
    width: 4rem;
    height: 4rem;
    border-width: 0.5rem;
  `,

  large: () => css`
    width: 6rem;
    height: 6rem;
    border-width: 0.7rem;
  `
}

const Spinner = styled.div<LoadingProps>`
  ${({ theme, color = 'primary', size = 'medium' }) => css`
    display: inline-block;
    border-color: rgba(255, 255, 255, 0.2);
    border-style: solid;
    border-radius: 50%;
    animation: ${spin} 1s infinite linear;

    ${size && loadingModifier[size]}
    ${color && loadingModifier[color](theme)}
  `}
`

const Loading = ({ color, size }: LoadingProps) => (
  <Wrapper data-testid="loading">
    <Spinner color={color} size={size} />
  </Wrapper>
)

export default Loading
