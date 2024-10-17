import React, { FC } from 'react'
import './Input2D.css'

interface Input2DProps extends React.InputHTMLAttributes<HTMLInputElement> {
  textColor?: string
  background?: string
  inputColor?: string
  type?: 'text' | 'password' | 'email' | 'number'
  placeholder?: string
  additionalClass?: string
  inputSize?: '2xl' | 'xl' | 'lg' | 'md' | 'sm'
}

const Input2D: FC<Input2DProps> = ({
  textColor,
  background,
  inputColor,
  type = 'text',
  placeholder = 'Enter smth...',
  additionalClass,
  inputSize = 'md',
  ...props
}) => {
  const sizeStyles: Record<string, { width: string; height: string }> = {
    '2xl': { width: '6em', height: '3em' },
    xl: { width: '5em', height: '2.5em' },
    lg: { width: '4em', height: '2em' },
    md: { width: '3em', height: '1.5em' },
    sm: { width: '2em', height: '1em' },
  }

  const selectedSize = sizeStyles[inputSize] || sizeStyles.md

  const inputStyles = {
    '--input-width': selectedSize.width,
    '--input-height': selectedSize.height,
    '--input-color': inputColor || '#e8e8e8',
    '--text-color': textColor || '#000',
    '--bg-color': background || '#e8e8e8',
  } as React.CSSProperties

  const classNames = ['input']

  switch (inputSize) {
    case '2xl':
      classNames.push('input-2xl')
      break
    case 'xl':
      classNames.push('input-xl')
      break
    case 'lg':
      classNames.push('input-lg')
      break
    case 'sm':
      classNames.push('input-sm')
      break
    default:
      classNames.push('input-md')
  }

  return (
    <input
      type={type}
      placeholder={placeholder}
      className={classNames.join(' ')}
      style={inputStyles}
    />
  )
}

export default Input2D
