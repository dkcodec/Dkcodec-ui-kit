import type { Meta, StoryObj } from '@storybook/react'

import Input2D from '../Input2D/Input2D'

const meta = {
  title: 'Example/Input2D',
  component: Input2D,
} satisfies Meta<typeof Input2D>

export default meta
type Story = StoryObj<typeof meta>

export const BaseBtn: Story = {
  args: {},
}

export const RedBtn: Story = {
  args: {},
}

export const OrangeBtn: Story = {
  args: {},
}

export const BigBtn: Story = {
  args: {},
}
