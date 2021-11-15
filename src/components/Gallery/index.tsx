import { Settings as SliderSettings } from 'react-slick'
import Slider from 'components/Slider'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'

import * as S from './styles'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  images: GalleryImageProps[]
}

const settings: SliderSettings = {
  arrows: true,
  slidesToShow: 4,
  infinite: false,
  lazyLoad: 'ondemand',
  responsive: [
    {
      breakpoint: 1375,
      settings: {
        arrows: false,
        slidesToShow: 3.2,
        draggable: true
      }
    },
    {
      breakpoint: 1024,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    },
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        slidesToShow: 2.2,
        draggable: true
      }
    }
  ],
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const Gallery = ({ images }: GalleryProps) => (
  <S.Wrapper>
    <Slider settings={settings}>
      {images.map((image) => (
        <img
          key={`thumb-${image.src}`}
          src={image.src}
          alt={`Thumb - ${image.label}`}
          role="button"
        />
      ))}
    </Slider>
  </S.Wrapper>
)

export default Gallery
