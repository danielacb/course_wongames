import { useEffect, useRef, useState } from 'react'
import SlickSlider, { Settings as SliderSettings } from 'react-slick'
import Slider from 'components/Slider'

import { ArrowBackIos as ArrowLeft } from '@styled-icons/material-outlined/ArrowBackIos'
import { ArrowForwardIos as ArrowRight } from '@styled-icons/material-outlined/ArrowForwardIos'
import { Close } from '@styled-icons/material-outlined/Close'

import * as S from './styles'

export type GalleryImageProps = {
  src: string
  label: string
}

export type GalleryProps = {
  images: GalleryImageProps[]
}

const commonSliderSettings: SliderSettings = {
  arrows: true,
  infinite: false,
  lazyLoad: 'ondemand',
  nextArrow: <ArrowRight aria-label="next image" />,
  prevArrow: <ArrowLeft aria-label="previous image" />
}

const previewSliderSettings: SliderSettings = {
  ...commonSliderSettings,
  slidesToShow: 4,
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
  ]
}

const modalSliderSettings: SliderSettings = {
  ...commonSliderSettings,
  slidesToShow: 1
}

const Gallery = ({ images }: GalleryProps) => {
  const slider = useRef<SlickSlider>(null)
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const handleKeyUp = ({ key }: KeyboardEvent) => {
      key === 'Escape' && setIsOpen(false)
    }

    window.addEventListener('keyup', handleKeyUp)

    return () => window.removeEventListener('keyup', handleKeyUp)
  }, [])

  return (
    <S.Wrapper>
      <Slider ref={slider} settings={previewSliderSettings}>
        {images.map((image, index) => (
          <img
            key={`thumb-${image.src}`}
            src={image.src}
            alt={`Thumb - ${image.label}`}
            role="button"
            onClick={() => {
              setIsOpen(true)
              slider.current && slider.current.slickGoTo(index, true)
            }}
          />
        ))}
      </Slider>

      <S.Modal aria-label="modal" aria-hidden={!isOpen} isOpen={isOpen}>
        <S.Close
          role="button"
          aria-label="close modal"
          onClick={() => setIsOpen(false)}
        >
          <Close size={40} />
        </S.Close>
        <S.ModalContent>
          <Slider ref={slider} settings={modalSliderSettings}>
            {images.map((image) => (
              <img
                key={`gallery-${image.src}`}
                src={image.src}
                alt={image.label}
              />
            ))}
          </Slider>
        </S.ModalContent>
      </S.Modal>
    </S.Wrapper>
  )
}

export default Gallery
