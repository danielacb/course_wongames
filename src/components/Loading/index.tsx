import styled, { css, DefaultTheme, keyframes } from 'styled-components'

export type LoadingProps = {
  color?: 'primary' | 'secondary' | 'white'
}

const Wrapper = styled.div`
  width: 100%;
  text-align: center;
  margin: 1rem 0;
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
  `
}

const Spinner = styled.div<LoadingProps>`
  ${({ theme, color = 'primary' }) => css`
    display: inline-block;
    border-color: rgba(255, 255, 255, 0.2);
    border-style: solid;
    border-width: 0.5rem;
    border-radius: 50%;
    width: 4rem;
    height: 4rem;
    animation: ${spin} 1s infinite linear;

    ${color && loadingModifier[color](theme)}
  `}
`

const Loading = ({ color }: LoadingProps) => (
  <Wrapper>
    <Spinner color={color} />
  </Wrapper>
)

export default Loading
