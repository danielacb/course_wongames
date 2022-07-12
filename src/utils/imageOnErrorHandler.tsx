import theme from 'styles/theme'

export const imageOnErrorHandler = (
  event: React.SyntheticEvent<HTMLImageElement, Event>,
  image: string
) => {
  event.currentTarget.src = image
  event.currentTarget.style.background = theme.colors.white
}
