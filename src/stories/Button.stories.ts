import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '../components/Button.vue'

// More on how to set up stories at: https://storybook.js.org/docs/vue/writing-stories/introduction
const meta = {
  title: 'Button',
  component: Button,
  // This component will have an automatically generated docsPage entry: https://storybook.js.org/docs/vue/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {},
  args: {} // default value
} satisfies Meta<typeof Button>

export default meta
type Story = StoryObj<typeof meta>
/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Default: Story = {
  args: { name: 'Default' }
}

export const Outline: Story = {
  args: { name: 'Outline', outline: true }
}

export const Text: Story = {
  args: { name: 'Text', text: true }
}

export const DisableShadow: Story = {
  args: { name: 'Disable Shadow', disableShadow: true }
}

export const Disabled: Story = {
  args: { name: 'Disabled', disabled: true }
}

export const DisabledText: Story = {
  args: { name: 'Disabled Text', text: true, disabled: true }
}

export const StartIcon: Story = {
  args: { name: 'Start Icon', startIcon: 'local_grocery_store' }
}

export const EndIcon: Story = {
  args: { name: 'End Icon', endIcon: 'local_grocery_store' }
}
