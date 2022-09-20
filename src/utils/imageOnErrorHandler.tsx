import { useState } from 'react'

import Image from 'next/image'
import theme from 'styles/theme'

export const imageOnErrorHandler = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  image: string
) => {
  event.currentTarget.src = image
  event.currentTarget.style.background = theme.colors.white
}

type ImageWithFallbackProps = {
  src: string
  alt: string
  fallback?: string
}

export const ImageWithFallback = ({
  src,
  alt,
  fallback = '/img/banner-placeholder.png'
}: ImageWithFallbackProps) => {
  const [imageError, setImageError] = useState(false)

  return (
    <Image
      src={imageError ? fallback : src}
      alt={alt}
      layout="fill"
      objectFit="cover"
      onError={() => setImageError(true)}
    />
  )
}
