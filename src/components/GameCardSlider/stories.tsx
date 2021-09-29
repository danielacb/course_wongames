import { Story, Meta } from '@storybook/react/types-6-0'

import { GameCardProps } from 'components/GameCard'
import cards from './mock'
import GameCardSlider from '.'

export default {
  title: 'GameCardSlider',
  component: GameCardSlider,
  args: { cards },
  parameters: {
    layout: 'fullscreen',
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameCardProps[]> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0 auto' }}>
    <GameCardSlider cards={args} {...args} />
  </div>
)
