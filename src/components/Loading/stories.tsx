import { Story, Meta } from '@storybook/react/types-6-0'
import Loading, { LoadingProps } from '.'

export default {
  title: 'Loading',
  component: Loading,
  argTypes: {
    ref: { table: { disable: true } },
    theme: { table: { disable: true } },
    as: { table: { disable: true } },
    forwardedAs: { table: { disable: true } },
    color: {
      options: ['primary', 'secondary', 'white'],
      control: { type: 'radio' }
    }
  }
} as Meta

export const Default: Story<LoadingProps> = (args) => <Loading {...args} />
