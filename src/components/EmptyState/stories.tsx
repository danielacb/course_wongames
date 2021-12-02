import { Story, Meta } from '@storybook/react/types-6-0'
import EmptyState, { EmptyProps } from '.'

export default {
  title: 'EmptyState',
  component: EmptyState,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<EmptyProps> = (args) => <EmptyState {...args} />

Default.args = {
  title: 'Your wishlist is empty',
  description: 'Games added to your wishlist will appear here',
  hasLink: true
}
