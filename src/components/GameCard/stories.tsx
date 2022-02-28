import { Story, Meta } from '@storybook/react/types-6-0'
import GameCard, { GameCardProps } from '.'

export default {
  title: 'GameCard',
  component: GameCard,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  },
  args: {
    slug: 'population-zero',
    title: 'Population Zero',
    developer: 'Rockstart Games',
    img: 'https://source.unsplash.com/user/willianjusten/300x140',
    price: 'R$ 235',
    promotionalPrice: 'R$ 200,00',
    favorite: false
  },
  argTypes: {
    onFav: { action: 'clicked' },
    ribbon: { type: 'string' }
  }
} as Meta

export const Default: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)

export const WithRibbon: Story<GameCardProps> = (args) => (
  <div style={{ maxWidth: '30rem', margin: '0 auto' }}>
    <GameCard {...args} />
  </div>
)

WithRibbon.args = {
  ribbon: 'New',
  ribbonSize: 'normal',
  ribbonColor: 'primary'
}
