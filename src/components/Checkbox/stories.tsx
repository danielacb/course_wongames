import { Story, Meta } from '@storybook/react/types-6-0'
import Checkbox, { CheckboxProps } from '.'

export default {
  title: 'Checkbox',
  component: Checkbox,
  parameters: {
    backgrounds: {
      default: 'won-dark'
    }
  }
} as Meta

export const Default: Story<CheckboxProps> = (args) => <Checkbox {...args} />

Default.args = {
  label: 'Option one',
  id: 'one',
  labelColor: 'white'
}
