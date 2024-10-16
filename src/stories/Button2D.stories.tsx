import type { Meta, StoryObj } from '@storybook/react'

import Button2D from '../Button2D/Button2D'

const meta = {
  title: 'Example/Button2D',
  component: Button2D,
} satisfies Meta<typeof Button2D>

export default meta
type Story = StoryObj<typeof meta>

export const BaseBtn: Story = {
  args: {
    children: 'Hello',
  },
}

export const RedBtn: Story = {
  args: {
    textColor: 'red',
    children: 'Hello',
  },
}

export const OrangeBtn: Story = {
  args: {
    textColor: 'orange',
    children: 'Hello',
    btnColor: 'black',
    background: 'orange',
    size: '2xl',
    borderColor: 'orange',
  },
}

export const BigBtn: Story = {
  args: {
    textColor: 'blue',
    size: 'sm',
    children: 'Hello',
  },
}
