import type { Meta, StoryObj } from '@storybook/react'

import Toggle2D from '../Toggle2D/Toggle2D'

const meta = {
  title: 'Example/Toggle2D',
  component: Toggle2D,
} satisfies Meta<typeof Toggle2D>

export default meta
type Story = StoryObj<typeof meta>

export const BaseBtn: Story = {
  args: {
    children: 'Hello',
  },
}

export const RedBtn: Story = {
  args: {
    children: 'Hello',
  },
}

export const OrangeBtn: Story = {
  args: {
    children: 'Hello',
    btnColor: 'black',
    background: 'orange',
    toggleSize: '2xl',
    borderColor: 'orange',
  },
}

export const BigBtn: Story = {
  args: {
    toggleSize: 'sm',
    children: 'Hello',
  },
}
