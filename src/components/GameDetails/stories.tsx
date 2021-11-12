import { Story, Meta } from '@storybook/react/types-6-0'
import GameDetails, { GameDetailsProps } from '.'

import mock from './mock'

export default {
  title: 'Game/GameDetails',
  component: GameDetails,
  args: mock,
  argTypes: {
    platforms: {
      control: {
        type: 'inline-check',
        options: ['windows', 'linux', 'mac']
      }
    },
    releaseDate: {
      control: { type: 'date' }
    }
  },
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<GameDetailsProps> = (args) => (
  <div style={{ maxWidth: '130rem', margin: '0  auto' }}>
    <GameDetails {...args} />
  </div>
)
