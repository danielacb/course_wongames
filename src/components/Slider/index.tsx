import SlickSlider, { Settings as SliderSettings } from 'react-slick'

import * as S from './styles'

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export const Slider = ({ children, settings }: SliderProps) => (
  <S.Wrapper>
    <SlickSlider {...settings}>{children}</SlickSlider>
  </S.Wrapper>
)

export default Slider
