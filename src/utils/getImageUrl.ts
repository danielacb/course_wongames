type GetImageUrlProps = {
  url: string | undefined
  placeholder?: string
}

export const getImageUrl = ({
  url,
  placeholder = '/img/banner-placeholder.png'
}: GetImageUrlProps): string => {
  if (process.env.NEXT_PUBLIC_IMAGE_HOST) {
    return `${process.env.NEXT_PUBLIC_IMAGE_HOST}${url}`
  }

  return url ? url : placeholder
}
