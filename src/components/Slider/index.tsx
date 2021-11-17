import { forwardRef } from 'react'
import SlickSlider, { Settings as SliderSettings } from 'react-slick'

import * as S from './styles'

export type SliderProps = {
  children: React.ReactNode
  settings: SliderSettings
}

export const Slider: React.ForwardRefRenderFunction<SlickSlider, SliderProps> =
  ({ children, settings }, ref) => (
    <S.Wrapper>
      <SlickSlider ref={ref} {...settings}>
        {children}
      </SlickSlider>
    </S.Wrapper>
  )

export default forwardRef(Slider)
