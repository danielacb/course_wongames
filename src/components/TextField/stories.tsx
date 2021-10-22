import { Story, Meta } from '@storybook/react/types-6-0'
import TextField from '.'

export default {
  title: 'TextField',
  component: TextField,
  args: {
    label: 'E-mail',
    id: 'Email',
    initialValue: '',
    placeholder: 'john.doe@gmail.com'
  }
} as Meta

export const Default: Story = (args) => (
  <div style={{ maxWidth: 300, padding: 15 }}>
    <TextField {...args} />
  </div>
)
